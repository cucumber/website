---
slug: bdd/keep-your-scenarios-brief
title: Keep your scenarios BRIEF
authors:
  - seb
tags: [Gherkin, BDD]
---

Over the years that we have been using Gherkin, our approach to writing scenarios has evolved. Because Gherkin is very close to natural language it's very easy to learn, but just like writing reports or stories, it takes practice to do it well. There are three main goals that we try to keep in mind when writing scenarios:

-   Scenarios should be thought of as documentation, rather than tests.
-   Scenarios should enable collaboration between business and delivery, not prevent it.
-   Scenarios should support the evolution of the product, rather than obstruct it.

The following six principles work together to support these goals. To make them easier to remember, we've arranged it so that the first letter of each principle makes up an acronym, **BRIEF**, which is itself the sixth principle.

<!-- truncate -->

**Business language**: The words used in a scenario should be drawn from the business domain, otherwise you will not be able to engage your business colleagues painlessly. The language you use should use terms that business team members understand unambiguously.

_**Common anti-pattern**: using terms that mean different things in different contexts (e.g. address, user, date, account)_

**Real data**: In our book, [Discovery](https://bddbooks.com), we explained that examples should use concrete, real data. This helps expose boundary conditions and underlying assumptions early in the development process. When writing scenarios, we should also use real data whenever this helps _reveal intention_.

_**Common anti-pattern**: scenario relies on the existence of specific production data (e.g. using an actual customer ID "1234", with the expectation that a customer with that ID will actually exist in the customer database)._

**Intention revealing**: Scenarios should reveal the _intent_ of what the actors in the scenario are trying to achieve, rather than describing the _mechanics_ of how they will achieve it. We should start by giving the scenario an intention revealing name, and then follow through by ensuring that every line in the scenario describes _intent, not mechanics_.

_**Common anti-pattern**: using UI terminology (e.g. click button, follow link)._

**Essential**: The purpose of a scenario is to illustrate how a rule should behave. Any parts of a scenario that don't directly contribute to this purpose are _incidental_ and should be removed. If they are important to the system, then they will be covered in other scenarios that illustrate other rules. Additionally, any scenarios that do not add to the reader's understanding of the expected behaviour have no place in the documentation.

_**Common anti-pattern**: including too much incidental detail (e.g. a rule that depends on the date should not be illustrated using date & time, unless the rule's behaviour may be affected by the time)_

**Focused**: Most scenarios should be focused on illustrating a _single rule_. It's easier to achieve this if you derive your scenarios from concrete examples captured during an _Example Mapping_ session.

_**Common anti-pattern**: a scenario can start failing even if the rule that it illustrates has not changed (e.g. changing the interest rate of a loan causes a scenario that illustrates the day of the month that the interest payment will be taken to fail)._

Last, but not least, scenarios should be brief as well as BRIEF.

**Brief**: We suggest you try to restrict most of your scenarios to five lines or fewer. This makes them easier to read and much easier to reason about.

_**Common anti-pattern**: long scenarios that are never read by the product owner, because they can't understand them and see no value in them._

We cover the application of BRIEF in much more detail in our forthcoming book, [Formulation](https://bddbooks.com).