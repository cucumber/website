---
slug: bdd/how-does-bdd-affect-traceability
title: How does BDD affect traceability?
authors:
  - seb
tags: [BDD]
---

Recently my colleague, Theo England, [broadcast a question](https://twitter.com/cucumberbdd/status/1276148043478372357?s=20):

> We're thinking about running a … one-day class \[about BDD\] designed for business execs. Tell us the questions we must answer for it to be useful.

We received 60 responses, including some very good questions.

As well as providing valuable input into the design of our upcoming course, _BDD for busy people_, we felt that we should answer some of the questions in a public forum. This is the second in the series.

**“Where does the sign-off of requirements happen – and how is it documented? Can we have full traceability?”**

<!-- truncate -->

Traceability is a big deal. In regulated industries it’s a legal necessity to demonstrate that you have followed the approved process, but it’s important in unregulated businesses as well. If you can prove to yourself that a bug-fix your team has just made fixed the intended defect (and hasn’t inadvertently broken any other functionality), then you will have the confidence to release it. Traceability from the original bug report, to the automated test(s) that initially demonstrated the defect and now demonstrate that it has been fixed, will be essential. Further evidence that relevant regression tests (automated or manual) continue to pass will also be needed. The change may need to be signed-off for compliance or process reasons.

## BDD isn’t a methodology

[Behaviour-Driven Development (BDD)](/docs/bdd/) is a set of practices (Discovery, Formulation, Automation) that help enable teams to deliver software in an iterative and incremental way. We have seen how BDD can be a game-changer for organisations that aspire to agility (which is most of them), but we realise that there is more to delivering valuable software than the BDD practices.

![](/img/blog/f0cc3c65859ca842c2d58cd31bd5fa40ee7f5594b4a71dd1dcbd151eb02affce.png)

You can use BDD with any of the agile methodologies (Scrum, SAFe, XP, LeSS etc.), because BDD is about building the shared understanding that’s necessary to deliver and evolve great software products. You can use the BDD practices in any industry, on any platform, in any country, because BDD practices are agnostic about most of the specifics of your context.

The corollary to this is that BDD will not tell you how to implement traceability or capture sign-off. BDD is not a methodology and does not prevent you adopting your methodology of choice.

## Where do requirements come from?

Matt Wynne created a lovely diagram that captures software product development at a very high level.

![](/img/blog/1e772451e48c248407ad9766df46e38286eca9c690d3146c9f7e12069e4e6d9a.png)

In this diagram, requirements are represented by the light bulb at the left. The requirement may have originated from a customer enhancement request, an insight from the CEO, a suggestion from an intern, or any number of other sources. How those myriad ideas are validated and prioritised is a problem not addressed by BDD.

The first practice of BDD, [Discovery](http://bddbooks.com), starts when the team collaboratively works together to reach a shared understanding of a requirement. During Discovery we refine, modify, and split requirements into smaller incremental work items. Any traceability or sign-off that occurs pre-Discovery will need to be revisited, because it is only during Discovery that we achieve something approaching a full understanding of the requirement.

## Traceability is dynamic

Over time requirements will change. Any approach we have that tracks the progress of requirements from inception to delivery needs to accommodate their dynamic nature. For this approach to be useful we need to be able to traverse and query the relationships to ensure, for example, that every requirement has a sponsor, or that every test has a successful execution.

[Cucumber](/docs/installation/) provides a subset of this functionality out-of-the-box. Feature files document the requirements and Cucumber automatically verifies them against them against the software that has been delivered. All divergences between requirements and implementation are reported immediately.

The limitation is that BDD and Cucumber concern themselves with only a subset of the full software lifecycle, leaving pre-Discovery and post-Automation traceability as an exercise for each organisation to solve. Additionally, while the Cucumber eco-system is relatively well-served with developer tools that can navigate from feature file to code to test result, there is currently no way to easily expose these relationships in a business-friendly way.

## Sign-off is static

As the requirements change, it becomes necessary to record not just the current relationships, but also previous relationships. Since Cucumber feature files are checked into source code management (SCM) alongside the code that they document, we can use the versioning capabilities of the SCM to record snapshots of the dynamic evolution of our software systems.

A sign-off can be thought of as an approved snapshot that contains all relevant artefacts. We can utilise the ability to create tags or branches within the SCM as a persistent mechanism for recording that a certain version of the software has been approved. Unfortunately, SCMs typically contain only a subset of the necessary artefacts – even if managers and executives were prepared to use them for sign-off purposes.

## Integration or monolith?

Recording relationships as cards on a board is valuable, but difficult to search, traverse, or persist. There is very little tooling that supports this sort of relationship traceability. Some monolithic tools do exist (c.f. [DOORS](https://en.wikipedia.org/wiki/Rational_DOORS)), but they require the wholesale adoption of an integrated toolset.

Over the past decade a set of open standards has been developed, called [Open Services for Lifecycle Collaboration (OSLC)](https://open-services.net/). This offers a vendor-independent approach to solving this problem by defining mechanisms that allow smaller, focussed tools to work together. Uptake has been slow.

Is requirements traceability something that interests you? We're looking to talk with people who have unmet traceability needs to understand what challenges they're most interested in overcoming.  
  
**If you're willing to help us understand your requirements traceability needs**,  
[please fill out this very brief survey to participate](https://www.surveymonkey.com/r/9SFVNSC).

## Conclusion

BDD (and Cucumber) provide traceability within the scope of their competence – from story to test execution. Cucumber already makes this information available to business sponsors and executives through HTML reports and the newly released [Cucumber Reports](https://reports.cucumber.io/). Work is ongoing to make this simpler and more wide-ranging.

Broader traceability that spans the full software lifecycle (outside the SCM) requires integration between multiple tools across the organisation. Expect to see tools appear in this space to ease the tensions between continuous delivery, traceability, and sign-off.

