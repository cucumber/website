---
slug: bdd/what-s-the-roi-of-bdd
title: What's the ROI of BDD?
authors:
  - seb
tags: [BDD]
---

Recently my colleague, Theo England, [broadcast a question](https://twitter.com/cucumberbdd/status/1276148043478372357?s=20):

> We're thinking about running a … [half](https://www.eventbrite.com/e/bdd-for-busy-people-tickets-111969764580)[\-day class \[about BDD\] designed for business execs](https://www.eventbrite.com/e/bdd-for-busy-people-tickets-111969764580). Tell us the questions we must answer for it to be useful.

We received 60 responses, including some very good questions.

As well as providing valuable input into the design of our upcoming course, _BDD for busy people_, we felt that we should answer some of the questions in a public forum. This is the first in the series.

**“How do I convince Business Partners/Stakeholders/Product Managers that there is extreme value in BDD despite the start-up costs/learning curve?”**

<!-- truncate -->

Changing how we work always incurs a cost, and Behaviour-Driven Development is no different. I hope that we don’t initiate a change without a belief that the change itself will deliver some benefit to the business, the employees, the customers, or the wider community. So, the question is “does the benefit expected outweigh the cost predicted?” Or, more prosaically, “Where is the return on investment (ROI)?”

## BDD is more than fixing defects early

BDD is an approach to delivering software consisting of three core practices: [Discovery, Formulation, and Automation](https://cucumber.io/docs/bdd/). Together they promise to reduce the cost of development, maintenance, and enhancement over the life of a software product.

For many decades, there has been a belief that fixing defects early in the development cycle (e.g. during specification) is orders of magnitude cheaper than fixing them later (e.g. during acceptance testing). This belief is founded in a large part on the work of [Barry Boehm](https://www.amazon.co.uk/Engineering-Economics-Prentice-Hall-Computing-Technology/dp/0138221227) and his Boehm curve \[see below\]. However, this has been effectively debunked by [Bossavit](https://leanpub.com/leprechauns) and other research (notably [Menzies et al](https://link.springer.com/article/10.1007/s10664-016-9469-x)).

![Boehm Curve 1981](/img/blog/535c7342c30292adc93a659790b03a7a89a93d31efd203bd5bde9a226c3818da.png)

So, if the Boehm curve can’t be relied upon, where is the ROI of BDD?

## Discovery

The [Discovery](http://bddbooks.com/) practice of BDD brings together multiple perspectives to ensure that there is a shared understanding of the problem that the customer needs solved. On the way to reaching that understanding, it is usual for _[known unknowns](https://en.wikipedia.org/wiki/There_are_known_knowns)_ to be explored and _unknown unknowns_ to be discovered.

The context switching and rework that arises from unexplored or undiscovered unknowns is significant. There are countless research papers that demonstrate [context switching’s negative impact on productivity](https://www.apa.org/research/action/multitask).

Less formally, [Joe Wright conducted an experiment](https://code.joejag.com/2018/lego-workstream-visualisation.html) in which a team managed to increase the amount of time that they spent on planned work from 23% to 56%, by reducing the amount of rework the team needed to do. Perhaps surprisingly, he found that “we spent five times more time in meetings... spending an hour getting feedback was saving a day developing the wrong feature.”

Adopting BDD can reduce context switching and increase productivity, contributing to the ROI. This has been [documented by Gojko Adzic](https://www.amazon.co.uk/Specification-Example-Successful-Deliver-Software/dp/1617290084), who conducted extensive industry research.

## Formulation

One of the outcomes of adopting the BDD practice of [Formulation](https://leanpub.com/bddbooks-formulation) is the creation of documentation written using an unambiguous business terminology (sometimes called the _[Ubiquitous Language](https://en.wikipedia.org/wiki/Domain-driven_design)_). This terminology can be used in all artefacts created by the team, including requirements, specifications, code, and tests.

![Ubiquitous language Venn diagram](/img/blog/44376c958e3443f05cb15c2395f2dec70753711f45424be3876ee87745079a36.png)

The benefit is that there is no need for translation when communicating between different roles in the team. Translation is time consuming and error prone, so removing it enhances ROI.

Additionally, since the terminology is rooted in the business domain of the business, the documentation should be understandable by everyone involved in the specification and delivery of the product. This delivers the huge benefit of enabling all team members to participate in the review and refinement of the product – another ROI enhancing opportunity.

## Automation

There are several tools available (e.g. [Cucumber](https://cucumber.io/tools/cucumber-open/)) that allow teams to automatically validate their business-readable documentation against the software product that they are building. This delivers several major benefits:

-   Reliable, _[living documentation](https://leanpub.com/livingdocumentation)_ that automatically informs the team when it is incorrect or out-of-date. This is immediately beneficial, but its value grows over time as the product evolves and the team members change.
-   Automated, business-readable acceptance tests, enabling business stakeholders to directly observe the progress of development, without the expense of generating additional reports.
-   Regression tests that focus on the valuable behaviours that are of interest to the business.
-   Increased productivity through adopting a _[behaviour-driven approach](https://school.cucumber.io/collections)_ of using automated acceptance tests to guide the development of the product.

## Conclusion

The ROI of BDD starts as soon as a team begins to focus on discovering the _unknowns_ that will harm productivity if left unexplored. The reduction in rework and context switching continues with the creation of a shared, unambiguous business language with which to describe and implement the solution. Finally, the ability to have the documented behaviour automatically validate itself against the software delivers documentation that can be relied upon now and in the future.

There is a cost to adopting BDD, but this is exceeded by the returns in productivity enabled by reduced rework and reduced context switching. Add to this the first truly reliable documentation that your teams have ever experienced, and the confidence brought by having a suite of business-readable acceptance test to protect against regressions, and you have an investment that can be justified by its tangible returns.

