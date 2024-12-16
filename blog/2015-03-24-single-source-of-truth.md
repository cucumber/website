---
slug: bdd/single-source-of-truth
title: Are you doing BDD? Or are you just using Cucumber?
authors:
  - aslak
tags: [BDD]
---

Is your team using Cucumber like this?

![](/img/blog/08550ae4d6aa0691deaa410c605a4e114344fd69858ab37bbf10d8e5a945fd42.png)

Fantastic! I hope you're reaping some benefits from that. But you can do better!

<!-- truncate -->

You could write your Cucumber scenarios _before_ you write the code so that programmers can be guided by an unambiguous specification. This would allow programmers to catch mistakes immediately.

You could write your Cucumber scenarios in such a way that they actually illustrate business rules and not just the UI. If you do that you might actually get the business analysts and product owners on board.

You could write your Cucumber scenarios in such a way that future project members can figure out what the system does simply by reading the scenarios.

You could do BDD:

![](/img/blog/167e4209831a2449a5eb25c1fa49298d06758bec3af779754bf53c54e0d83739.png)

I recently coached a team in an insurance company that had a scenario like this:

```gherkin
Scenario Outline: Detect agent type based on contract number (single contract found)
  Given I am on the "Find me" page
  And I have entered a contract number
  When I click the "Continue" button
  And a contract number match is found
  And the agent type is <DistributorType>
  Then the contract number field will become uneditable
  And the "Back" button will be displayed
  And the following <text> and <input field type> will be displayed

  Examples:
    | DistributorType | input field type | text                            |
    | Broker          | Date of birth    | Please enter your last name     |
    | TiedAgent       | Last name        | Please enter your date of birth |
```

We refactored it together to remove all the UI stuff and focussed on making it illustrate a single _business rule_. This is what we ended up with:

```gherkin
Scenario: Customer has a broker policy so DOB is requested
  Given I have a "Broker" policy
  When I submit my policy number
  Then I should be asked for my date of birth

Scenario: Customer has a tied agent policy so last name is requested
  Given I have a "TiedAgent" policy
  When I submit my policy number
  Then I should be asked for my last name
```

See how much more succinct and to-the-point this is?

This is the essence of BDD. Illustrating business rules with examples (not testing a UI). Cucumber lets you keep specifications, automated tests and documentation in the same place - a single source of truth that never gets out of sync.

Imagine the impact this would have on the development and maintenance costs of your projects. Shorter feedback cycle to fix bugs. Less rework because of misunderstood requirements.

What's holding you back?