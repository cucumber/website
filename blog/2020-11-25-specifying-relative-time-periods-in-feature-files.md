---
slug: bdd/specifying-relative-time-periods-in-feature-files
title: Specifying relative time periods in feature files
authors:
  - seb
tags: [Gherkin]
---

Gojko Adzic is running a regular challenge called #GivenWhenThenWithStyle and [last month’s topic](https://specflow.org/blog/how-to-specify-relative-periods-givenwhenthenwithstyle/) was how to specify relative time periods. In his [“solution” article](https://specflow.org/blog/solving-how-to-specify-relative-periods-givenwhenthenwithstyle/), he disagreed with the majority of challenge respondents, favouring the use of a long scenario outline containing actual dates.

I have a different take to Gojko, that is more in line with the community response. This article describes my approach – but you’d be advised to read Gojko’s [original posts](https://specflow.org/blog/solving-how-to-specify-relative-periods-givenwhenthenwithstyle/) first (and subscribe to the challenge).

<!-- truncate -->

## BRIEF – the acronym

My colleague, Gáspár Nagy, and I created the BRIEF acronym to capture six principles that we find useful when writing scenarios. I’m going to critique Gojko’s solution using these principles.

We’ve written about BRIEF in the second book in our BDD series, [Formulation](https://leanpub.com/bddbooks-formulation), and there's also a [blog post about it](https://cucumber.io/blog/bdd/keep-your-scenarios-brief/). Here is a high-level summary of the acronym to help you read this article:

|   | Name                | Meaning                                                                           |
|---|---------------------|-----------------------------------------------------------------------------------|
| B | Business language   | Business terminology aids cross-discipline collaboration                          |
| R | Real data           | Using actual data helps reveal assumptions and edge cases                         |
| I | Intention revealing | Describe the desired outcomes, rather than the mechanism of how they are achieved |
| E | Essential           | Omit any information that doesn’t directly illustrate behaviour                   |
| F | Focused             | Each scenario should only illustrate a single rule                                |
|   | Brief               | Shorter scenarios are easier to read, understand and maintain                     |

## Overall structure

Gojko’s solution is a scenario outline with four example tables containing a total of 26 examples. This has a number of problems:

-   **B** – although the scenario does use business language, my instinct is that there are very few customers or product owners that would be interested enough in the detail to actually read and review it in detail. Collaboration is the purpose of using business language and this sort of scenario can easily put people off.
-   **F** – the rule that this scenario is trying to illustrate, as stated in the original post, is “banks will cancel an authorisation if it has not been charged for a month.” However, the majority of the examples are trying to illustrate the meaning of “month” rather than focusing on authorisation cancellation. These are two separate rules, but this scenario is attempting to illustrate both of them.
-   **Brief** – the scenario outline (when combined with the example tables) is long. Most users won’t be able to read the entire thing on a single screen, so they will need to scroll around the page or rely on their memory. Even if they have a large screen or a small font, it’s still hard to parse all this information – which is borne out by the errors that have made it into both the **_February_** example tables.  
    The second example in **_February (non leap)_** should read:
    
    `| 27 January 2019   |  28 February 2019 | cancelled  |`
    
    The fourth example in **_February (non leap)_** should read:
    
    `| 28 January 2019   |  28 February 2019 | authorised |`
    
    The ninth example in **_February (leap year)_** should read:
    
    `| 29 January 2020   |  29 February 2020 | authorised |`
    
    The twelfth example in **_February (leap year)_** should read:
    
    `| 30 January 2020   |  29 February 2020 | cancelled  |`
    
    Both tables for **_February_** are also missing any examples for authorisation dates of 31 January.

## Dates

Using actual dates does appear to follow the **_real data_** principle, but is all that information actually relevant to the rule?

-   **E** – the only reason that the year is used in the examples is to determine whether it’s a leap year or not. It’s entirely unnecessary for the first two example tables. For the last two example tables, it’s only used to indicate whether it’s a leap year or not, so showing the actual year is unnecessary. Having extra information frequently leads to confusion, when a reader has to decide whether it’s significant or not.

## What is meant by “match”?

The original problem statement doesn’t use the word “match”, but it appears three times in the solution scenario outline. What does it mean? Is it explained by the comment in the **_end of month_** example table: “If matching date cannot be caculated (sic), use end of month to cancel”?

-   **I** – the examples are trying to illustrate the _mechanics_ of how a month is calculated. Having read the examples a number of times, the definition of the term “match” is not easy to understand. A cursory reading of this example table might even give a false sense of comfort.
-   **F** – there is a rule about how a month should be calculated. Trying to illustrate this rule in a scenario that is supposed to illustrate authorisation cancellation is distracting.

It seems to me that the September/October examples shouldn’t even be in this example table. I presume that “matching date cannot be calculated” means that the day number of the _authorising_ month is not present in the _processing_ month (e.g. if authorised on 31 March there is no corresponding 31 April). However, the first example is for 30 September, and 30 October is entirely valid, so why is this example present in this table?

Quite apart from that, the rule itself seems inconsistent. When there is a “matching” date in the processing month, cancellation takes place the **day after** that date. The example for 31 March shows the authorisation being cancelled on 30 April, but it would appear more consistent to cancel the authorisation the **day after** the end of month i.e. 1 May. This is, of course, the decision of the product owner, but since the example is just one of many in this scenario outline it may well escape notice. As you will see in the scenarios below, this leads to some very strange inconsistencies (based upon my deduction of how the calculation is intended to take place).

## Another solution

I would suggest writing a much simpler scenario to illustrate the cancellation rule. If after reviewing the calculation itself, the product owner decides to stick with this outlandish definition of a “month” then I would encourage the team to discover a domain-specific name for it!

```gherkin
  Scenario Outline: cancelling uncharged authorisations
   
  To avoid locking up client funds indefinitely, we need to cancel an authorisation if it has not been charged for a month. The accuracy level of 1 day is enough.
   
    Given a transaction is authorised
    And the transaction was not charged
    When the cancellation job runs <processing period> later
    Then the authorisation should be <status>
   
    Examples:
    | processing period | status     |
    | a month           | authorised |
    | a month and a day | cancelled  |
```

### Calculating a month

The month calculation could then be illustrated as shown in the scenarios below. Certainly, this sort of analysis should be provided to challenge the product owner’s definition of a “month”, but whether Given/When/Then is the best way to do it is open to question. Since exhaustive scenarios like these are more like test cases than a business specification, **I would not put these in the same feature file with higher level scenario** **above**. I would either:

-   Consign them to a separate feature file in a sub-folder, where they won’t distract from the narrative flow, or
-   “Push them down the stack” into programmer tests

Notice that there is no mention of authorisation, processing, or cancellation in the follwing scenarios. They simply illustrate how a month should be calculated.

```gherkin
  Scenario Outline: month calculations, not including February
    Given something happened on <start date>
    When a calculation is made on <calc date>
    Then the resulting period should be <period>

    Examples: start and calculation month both have 31 days
    | start date | calc date   | period            |
    | 31 July    | 31 August   | a month           |
    | 31 July    | 1 September | a month and a day | 

    Examples: start month has 30 days and calculation month has 31 days
    | start date | calc date | period            |
    | 30 April   | 30 May    | a month           |
    | 30 April   | 31 May    | a month and a day |

    Examples: start month has 31 days and calculation month has 30 days

    This leads to CRAZY inconsistencies! 
    Have I misunderstood the matching calculation?

    | start date | calc date   | period            |
    | 30 October | 30 November | a month           |
    | 30 October | 1 December  | a month and a day |
    | 31 October | 29 November | a month           |
    | 31 October | 30 November | a month and a day |

  Scenario Outline: month calculation for February
    Given this is a <year type> year
    And something happened on <start date>
    When a calculation is made on <calc date>
    Then the resulting period should be <period>

    Examples: normal year
    | start date | calc date   | year type | period            |
    | 27 January | 27 February | normal    | a month           |
    | 27 January | 28 February | normal    | a month and a day |
    | 28 January | 27 February | normal    | a month           |
    | 28 January | 28 February | normal    | **a month**           |
    | 29 January | 27 February | normal    | a month           |
    | 29 January | 28 February | normal    | a month and a day |
    | 30 January | 27 February | normal    | a month           |
    | 30 January | 28 February | normal    | a month and a day |
    | 31 January | 27 February | normal    | a month           |
    | 31 January | 28 February | normal    | a month and a day |

    Examples: leap year
    | start date | calc date   | year type | period            |
    | 27 January | 27 February | leap      | a month           |
    | 27 January | 28 February | leap      | a month and a day |
    | 27 January | 29 February | leap      | a month and a day |
    | 28 January | 27 February | leap      | a month           |
    | 28 January | 28 February | leap      | a month           |
    | 28 January | 29 February | leap      | a month and a day |
    | 29 January | 27 February | leap      | a month           |
    | 29 January | 28 February | leap      | a month           |
    | 29 January | 29 February | leap      | **a month**           |
    | 30 January | 27 February | leap      | a month           |
    | 30 January | 28 February | leap      | a month           |
    | 30 January | 29 February | leap      | a month and a day |
    | 31 January | 27 February | leap      | a month           |
    | 31 January | 28 February | leap      | a month           |
    | 31 January | 29 February | leap      | a month and a day |
```

The periods **underlined** above are based upon my reverse-engineering of the “matching” rule and so are possibly incorrect. The first directly contradicts the example provided in Gojko’s solution. The second isn’t present in Gojko’s solution, but (by inference) I believe it would have contradicted Gojko's solution. Such is life.

## Conclusion

I have been enjoying the #GivenWhenThenWithStyle series and find it vary valuable. Hopefully I’ve laid out my differences of opinion with Gojko in an intelligible and constructive way.

Gojko is one of the most influential practitioners in the field and his book **_Bridging the communication gap_** is what got me interested in this approach in the first place. It was his encouragement at a conference workshop a few years ago that led me to create the BRIEF acronym.

I look forward to our next meeting, COVID permitting, somewhere on the conference circuit. Or, possibly, at a vegan restaurant.

