---
slug: bdd/gherkin-rules
title: Gherkin Rules
authors:
  - seb
tags: [Gherkin]
---

Gojko Adzic wrote his award-winning book, [Specification By Example](https://www.amazon.co.uk/Specification-Example-Successful-Deliver-Software/dp/1617290084), 11 years ago. Last year, he ran an [online poll](https://gojko.net/2020/03/17/sbe-10-years.html) to determine the most popular format for expressing examples and found that Given/When/Then received 71% of the votes.

Gherkin is probably the reason for this win, because:

-   Given/When/Then are the core keywords of Gherkin
-   Gherkin is the structured syntax understood by automation tools such as Cucumber
-   Cucumber is a widely downloaded, open-source tool, available on numerous platforms

So, it might be fair to say that when it comes to documenting and automating examples, “Gherkin rules.” That is not what this article is about.

<!-- truncate -->

Gherkin had been incredibly stable for almost a decade, but in late 2018 a new keyword was introduced: Rule. I’m going to explain the background to that change and bring you up to date with a recent fix that makes the Rule keyword consistent with other Gherkin keywords.

## Example Mapping

Matt Wynne discovered example mapping while helping a client’s team. They were struggling to analyse the details of a user story and Matt used a deck of coloured index cards to help teach them a structured way of reaching a shared understanding of what behaviour the story should deliver.

If you’re not familiar with example mapping, then I suggest you spend a few minutes reading Matt’s excellent introductory article, [Introducing Example Mapping](/blog/bdd/example-mapping-introduction/). For the purposes of this article, the salient point is that example mapping concerns itself with four concepts, each represented by a coloured card: Story (yellow), Rule (blue), Example (green), and Question (red).

Once example mapping is complete, you should have a structure that looks something like this:

![](/img/blog/seb-rose-gherkin-rules-examples-mapped.png)

You can tell that the story is well understood, because there are no red question cards in the map. All of the team’s questions have been answered satisfactorily.

For the story to be considered _done_, the team will need to deliver code that implements each of the rules, laid out horizontally underneath the story. To dispel any ambiguity, each rule is illustrated by examples, laid out vertically beneath it.

The [next step is to _formulate_ the examples](https://www.linkedin.com/pulse/bdd-tasks-activities-seb-rose/) – translating each example into a business-readable, natural language _Scenario_ that can be automated by Cucumber.

## Formulation

Gherkin scenarios are written in _feature_ files. Each feature file describes some capability of the system being developed. The example map also describes some capability of the system being developed. Formulation is the process of documenting the shared understanding reached during example mapping in a business-readable format (for current and future teams) that can also be understood by automation tools.

Of the four card types used in example mapping, only two of them should be captured in feature files – the rules and the examples.

The story card should not be reflected in a feature file, because a user story is a transient artefact of prioritisation and planning. [I’ve talked about this at length](/blog/bdd/user-stories-are-not-the-same-as-features/).

Question cards should not be reflected in a feature file, because they should be answered before the example map is formulated as scenarios. The answers to the question cards may well have caused the creation of rules and/or examples which need to be documented in the feature file, but the questions themselves are transient.

Each scenario in a feature file represents a single example card from the example map. We’ve had a lot of experience with successful formulation of examples as scenarios, but this is out of scope for this article. If you want to know more, we’ve written a short book about the subject called [Formulation](http://bddbooks.com/).

## Gherkin before Rule

Each example in an example map illustrates one (and only one) rule. The relationship between rule and example is critical. Without its examples, a rule may be ambiguous. Without a rule, an example lacks context. Together they fully specify an expected behaviour of the product and guide the development team’s efforts.

You would therefore expect Gherkin to provide a mechanism for documenting the rule that each scenario illustrates, but until Gherkin 6 this was not possible. The root cause is that Matt discovered example mapping **_after_** BDD, Cucumber, and Gherkin were created.

For over five years, the recommendation was to record the rules illustrated in a feature file as part of the [feature file description](/docs/gherkin/reference/#feature) – a free text portion following the feature’s name.

```gherkin
Feature: Library changes

  Rules implemented:
  - Members pay reservation of $1 per item
  - Maximum of 2 active reservations per member
```

The problem with this approach is that most feature files document several rules and there is no way to associate each scenario in the feature file with the feature file description that lists the rule that it was created to illustrate.

An alternative is to add a comment to each scenario, referencing the rule that it illustrates by name.

```gherkin
Feature: Library changes

  Scenario: Reserving a single book
    Given Andrew is a member
    When he reserves one book
    Then he is charged $1.00
```

While this does document the association, these comments are no different from any other comment as far as IDEs or automation tools are concerned, so the important relationship is only visible after a careful reading of the text.

With the creation of a Rule keyword in 2018 the relationship between rule and scenario became a first-class concern of Gherkin.

```gherkin
Feature: Library changes

  Rule: Members pay reservation of $1 per item
  
    Scenario: Reserving a single book
      Given Andrew is a member
      When he reserves one book
      Then he is charged $1.00
```

Modern IDEs are able to display scenarios grouped by rule – and results of automation are grouped by rule as well. The critical relationship of rule and example that forms the foundation of example mapping can now be truthfully represented in a Gherkin feature file.

## Inconsistent tagging

In the effort to add the Rule keyword to Gherkin, an important piece of functionality was overlooked. Gherkin supports the ability to _tag_ features and scenarios with domain-specific text. The tags can be used for many purposes, including the [creation of documentation subsets and the selective invocation of automation code](/docs/cucumber/api/#tags).

Each Gherkin scenario can have a distinct set of tags applied to it, but all scenarios in a feature file also inherit any tags applied at the feature file level. Since scenarios notionally illustrate a rule, it would make sense for them to inherit any tags applied at the rule level as well.

Unfortunately, the original implementation of the Rule keyword did not allow tags to be added at the Rule level.

### Consistency is coming

Last week, a [pull request enabling the tagging of Rules](https://github.com/cucumber/cucumber/pull/1356) was merged into the Gherkin project. Tag inheritance was also implemented and behaves in exactly the same way as feature tag inheritance. A scenario will inherit any tags applied to the rule that it illustrates, as well as any tags applied to the feature.

```gherkin
@my_feature_tag
Feature: Library changes

  @my_rule_tag
  Rule: Members pay reservation of $1 per item
  
    @my_scenario_tag
    Scenario: Reserving a single book
    # this scenario has all three tags applied 
```

This change will automatically be incorporated into future releases of flavours of Cucumber managed by the [Cucumber open-source project](https://github.com/cucumber) – as well as any ports of Cucumber that use Cucumber’s Gherkin parser.

Over the coming months, expect to see Rule tagging ship with your Gherkin automation tool of choice. Finally, the _Discovery_ practice of example mapping, and the world’s favourite _Formulation_ format will be consistent with each other.

