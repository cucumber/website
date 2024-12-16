---
slug: bdd/bdd-is-not-test-automation
title: BDD is not test automation
authors:
  - aslak
tags: [BDD]
---

There have been a couple of articles published recently by Nikolay Advolodkin ([SDTimes](https://sdtimes.com/test/why-behavior-driven-development-is-hurting-your-test-automation-efforts/) and [SauceLabs](https://saucelabs.com/blog/is-bdd-automation-actually-killing-your-project)) that use a [straw man](https://en.wikipedia.org/wiki/Straw_man) argument to critique Behaviour-Driven Development (BDD). BDD is not test automation -- it’s collaborative requirements analysis combined with test-driven development (TDD), which despite the name, isn’t testing either.

<!-- truncate -->

## What is BDD?

TDD and BDD are techniques for designing and developing software. They produce tests as a by-product, but  they are not testing activities. This notion is lost on the large majority of people who claim to be doing BDD. If you write your tests **after** you’ve written the code you’re not doing BDD no matter what tool you’re using.

I think a better title for these articles would be “BDD is not Testing” or “Doing BDD badly is harmful” or something of that sort. When BDD is done well it doesn’t hurt test automation -- it improves it.

Seb Rose and Gáspár Nagy have [popularised BDD as 3 practices](http://bddbooks.com) - Discovery, Formulation and Automation.

-   Discovery - Create a shared understanding of the requirements through collaboration, typically achieved through a structured conversation centred on rules and examples
-   Formulation - Examples of system behaviour are documented using business terminology
-   Automation - The documentation is automated, creating living documentation that verifies the system’s behaviour

![](/img/blog/f0cc3c65859ca842c2d58cd31bd5fa40ee7f5594b4a71dd1dcbd151eb02affce.png)

The problems arise when the wrong roles are made responsible for each practice (or practices are skiped entirely). What I often see is:

-   Discovery: Not practised at all
-   Formulation: PO/BA writes Gherkin before coding and/or tester writes Gherkin after the developers have implemented a feature
-   Automation: Testers automate the Gherkin scenarios after the developers have implemented a feature.

This is not BDD. Not by a long stretch. It’s just poor communication, slow feedback and traditional test automation.

This is BDD:

-   Discovery: Done collaboratively by a diverse group (3 amigos). PO/BA, Developer, Tester, UX, Ops.
-   Formulation: Done by the developers, optionally aided by testers/UX. The PO/BA approves it.
-   Automation: Done by the developers before implementation of production code. They are the only ones who can do it, because they use it to guide development.

## Taking down the straw man

I’ll address the 4 points Nikolay makes in the [SDTimes](https://sdtimes.com/test/why-behavior-driven-development-is-hurting-your-test-automation-efforts/) article:

1.  The wrong person takes control - This is often the case. It is, however, not a critique of BDD, but a critique of people misapply it.
2.  BDD tools create extra dependencies - BDD done well leads to highly decoupled code, making it easier to develop smaller parts in isolation. Again, this is a critique of not understanding how to apply BDD, not a critique of BDD itself.
3.  BDD tools struggle with parallelization - That is true, but with a highly decoupled system, the need for parallelisation is minimal. With a highly decoupled codebase, most I/O can be eliminated, obviating the need for parallelisation to speed up the test suite. [I’ve talked about this](https://www.youtube.com/watch?v=AJ7u_Z-TS-A).
4.  Tests become less readable, not more - Again, not a critique of BDD, but a critique of poorly written tests. BDD doesn’t tell you to write unreadable tests, but that’s what you end up with when they are written by testers who come from a UI test script mindset.

BDD is difficult. It requires collaboration, which is difficult in siloed organisations. It requires developers who understand TDD and decoupling techniques, which requires training and experience. It requires testers who understand that test-after has nothing to do with BDD. The best way developers and testers can contribute to the BDD process is to get involved in requirements specification (Discovery) and resist the urge to write UI-centric, slow, unreadable Cucumber tests.

## Conclusion

Nikolay is right that BDD is not about test automation. However, I disagree with him when he says that “BDD has proven to make \[test automation\] even more challenging.”

Any team that collaborates on discovery and formulation will gain the benefits of shared understanding and reduced rework. If they then use automation to guide development, they will receive the benefit of business-readable living documentation, which delivers value throughout the lifetime of the product.

And, crucially, the decoupled structure that results from working outside-in (which is essential for both TDD and BDD) can actually make test automation much less challenging, by delivering software that has testability built in. 

