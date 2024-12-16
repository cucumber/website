---
slug: bdd/isn-t-the-business-readable-documentation-just-ove
title: Isn't the business readable documentation just overhead?
authors:
  - seb
tags: [BDD]
---

After my talk called “Are BDD and test automation the same thing?” at the [Automation Guild conference](https://guildconferences.com/ag-2021/) in February 2021 there were more questions than I could answer in the available time. This is the second of five posts answering the five most important ones:

1.  [Why should automation be done by the dev team?](https://cucumber.io/blog/bdd/why-should-automation-be-done-by-the-dev-team/)
2.  Isn’t the business-readable documentation just extra overhead?
3.  [What’s wrong with changing the scenarios to enable automation?](https://cucumber.io/blog/bdd/what-s-wrong-with-changing-the-scenarios-to-enabl/)
4.  [Can all testing be automated?](https://cucumber.io/blog/bdd/can-all-testing-be-automated/)
5.  [How can Cucumber help us understand the root causes of failure?](https://cucumber.io/blog/bdd/how-can-cucumber-help-us-understand-the-root-cause/)

## The question

> Doesn't adding something like SpecFlow to interface with something like Selenium just add an extra code base that must be maintained? Does the benefit justify the extra work?

<!-- truncate -->

This question directly addresses the costs and benefits of a BDD approach. Although it directly references Selenium, tools like SpecFlow always add a layer that needs to be maintained, so this post won’t mention Selenium specifically.

[Adopting BDD does lead to more collaboration between business and delivery teams, development of a shared vocabulary rooted in the business domain, and tooling required to automatically validate the resulting business-readable specifications.](https://www.linkedin.com/pulse/bdd-tasks-activities-seb-rose/) What possible benefit can there be that justifies the cost of adding more interactions and more tooling?

## The cost of software

Software takes time (and hence money) to create. We always seem to take longer than we expected to create the software we think our customers want, so there’s a desire to go faster. Common approaches to going faster forget that software creation is a creative process, rather than a manufacturing problem. Simply cranking the handle faster introduces more bugs into the software, which leads to slower delivery.

Here are my top reasons for why trying to go faster results in bad outcomes:

-   Misunderstood requirements – human communication is notoriously error prone. If the customer, the developers, and the testers don’t have a shared understanding of what is being asked for (and why), then we will not deliver the functionality that is needed.
-   Unarticulated assumptions – it is hard for experts to enumerate all of the assumptions that are foundational to their understanding of the business domain. Where assumptions remain unarticulated, misunderstandings will go unchecked.
-   Unnecessary code – in the absence of stable, reliable requirements, the team become used to regular context switches and rework. This frequently leads them to write overly generic code, intended to be flexible enough to handle whatever changes in behaviour the customer asks for next.
-   Defects & regressions – misunderstandings, missed assumptions, and superfluous code are direct causes of defects and regressions. Additionally, when teams feel pressure to go faster, it’s often practices that seem to be peripheral to producing production code (such as unit testing and documentation) that are skipped, leading to even more defects. The limiting factor in software development is not a programmer’s typing speed.
-   Status reporting – the person paying the bills wants to know that their money is being spent wisely, but getting that information usually requires the team to spend time collecting and presenting that information in a format that the customer can understand.
-   Maintenance – software lasts for years or decades, and over that time has to evolve to fit the changing business landscape. Unreliable documentation, poorly structured code, and incomprehensible test scripts all contribute to inflating the total cost of ownership – and yet these are exactly the areas where short cuts are taken when a team is pressured to focus on delivery.

## The benefits of BDD

Behaviour driven development is an agile approach to developing software, consisting of three practices applied iteratively to each increment of functionality:

-   Discovery – creates a shared understanding of the requirements through collaboration, typically achieved through a structured conversation centred on rules and examples.
-   Formulation – examples of system behaviour are documented using business terminology.
-   Automation – the documentation is automated, creating living documentation that verifies the system’s behaviour.

In the following sections, I’ll outline how adopting these practices can mitigate the costs described in the previous section.

### Discovery

[Discovery](http://bddbooks.com/) (aka 3 Amigos and [Example Mapping](https://cucumber.io/blog/bdd/example-mapping-introduction/)) is where the team really begins to understand how a piece of functionality should behave to deliver value to the customer. The product owner/business analyst prepare their understanding of the next small increment and the delivery team test their understanding of it using concrete examples. Through this process, detailed requirements are refined, while misunderstandings and assumptions are surfaced and resolved.

Discovery takes time, but the detailed shared understanding that is achieved needs to be reached **no matter what approach the team takes**. If the team doesn’t learn about this early, before writing code or test scripts, they will learn later and have to rework code and test scripts that they have already created. Quite apart from the time spent doing the rework, there is the huge cost of the associated [context switching](https://calleia.com/2014/05/15/cost-of-context-switching/).

Another significant benefit of Discovery is gaining the ability to [right-size stories](https://www.kaizenko.com/whats-the-right-size-for-a-user-story/) because having clear, detailed requirements makes it simple to split large stories into fine-grained increments. This gives the product owner the opportunity to prioritise work at a granularity that enables cheap experiments and MVPs.

### Formulation

The team has already derived significant value by reaching a shared, detailed understanding of what needs to be delivered. They can build on that by formulating that understanding as a business-readable specification, providing a feedback loop that ensures misunderstandings don’t creep in as the product evolves.

It’s during [Formulation](http://bddbooks.com/) that the domain language becomes a powerful communication tool. This takes time and effort, but without rigorous definitions of terms being used, both common (e.g., account, customer, date) and domain specific, defects and regressions are inevitable.

### Automation

The incremental value of Formulation is multiplied when the specification is automated, delivering four significant benefits.

When the next increment of the specification is automated **before** the relevant production code is written, it can be used by the development team to guide development. As soon as the automation demonstrates that the product behaves as described in the specification, the development team knows that they have delivered what is required. No more and no less.

The automated specification can be used in the organisation’s continuous integration and delivery (CI/CD) pipeline as part of its regression testing strategy. This can significantly reduce the cost of creating and maintaining automated tests.

At this point, the automated specification becomes reliable, authoritative [living documentation](https://www.pearson.com/us/higher-education/program/Martraire-Living-Documentation-Continuous-Knowledge-Sharing-by-Design/PGM1724668.html). Every time the CI/CD pipeline runs the product will be validated against the specification, giving a high level of confidence that the documentation is accurate. This is valuable immediately but becomes even more valuable as the product matures and the teams that maintain it grow and change.

Because the living documentation is business-readable, this gives businesspeople a transparent view of product development status that would normally require the provided by people from the delivery team. As the functionality of the product grows, the relevant sections of the specifications will appear in the documentation, complete with evidence that the behaviour they describe has verifiably been implemented.

## Conclusion

The original question asks whether the benefits justify the extra work. I hope I have shown that the benefits are significant, but I disagree with the initial assertion that it requires extra work. Instead, I believe that this approach simply makes the necessary work visible.

By encouraging teams to collaboratively learn the details of a feature before writing code or tests, there are reduced misunderstandings, fewer defects, and less context switching. This learning has to happen for the team to be able to deliver the software, but by learning early we reduce the waste of unnecessary rework.

Formulation and Automation take this learning and turn it into an artefact that improves communication, guides developers to only create code that is necessary, contributes to automated testing, and delivers documentation that can be relied on for as long as the product is in use. The value of reliable documentation on its own is hard to overestimate.

The value described in this post derives from adopting a behaviour-driven approach to software development. Using SpecFlow or Cucumber as automation tools without first engaging in Discovery and Formulation will not deliver the same benefits.

## Going deeper

- Gáspár Nagy and I have written_ [books about Discovery and Formulation](http://bddbooks.com/).
- Matt Wynne will be presenting a webinar called "The Engineering Manager's Dilemma" on April 28th, 2021 ([registration needed](https://smartbear.com/resources/webinars/the-engineering-managers-dilemma/))
- Aslak Hellesøy has described techniques for making [functional acceptance tests run in milliseconds](https://www.youtube.com/watch?v=PE_1nh0DdbY) (often reducing dependencies on frameworks like Selenium).

