---
slug: bdd/why-should-automation-be-done-by-the-dev-team
title: Why should automation be done by the dev team?
authors:
  - seb
tags: [BDD]
---

I’ve been writing and talking about test automation and BDD for quite a while now. In February 2021 I gave a short version of a talk called [“Are BDD and test automation the same thing?”](https://www.slideshare.net/sebrose/are-bdd-and-test-automation-the-same-thing-automation-guild-2021) at the [Automation Guild conference](https://guildconferences.com/ag-2021/) to explore their relationship and address the confusion that exists in the industry.

The conference organiser, Joe Colantonio, hosted a Q&A session after the talk, but there wasn’t enough time to answer all of the questions. Handily, he provided me with a list of all the questions asked, along with his estimation of their “sentiment” – either neutral or negative. In this series of posts, I am going to address the five unanswered questions that he marked as having a negative sentiment.

-   Why should automation be done by the dev team?
-   [Isn’t the business-readable documentation just extra overhead?](https://cucumber.io/blog/bdd/isn-t-the-business-readable-documentation-just-ove/)
-   [What’s wrong with changing the scenarios to enable automation?](https://cucumber.io/blog/bdd/what-s-wrong-with-changing-the-scenarios-to-enabl/)
-   [Can all testing be automated?](https://cucumber.io/blog/bdd/can-all-testing-be-automated/)
-   [How can Cucumber help us understand the root causes of failure?](https://cucumber.io/blog/bdd/how-can-cucumber-help-us-understand-the-root-cause/)

## The question

> I do not get, why you say the automation part #5 on the graph, should be done by the dev team and never the QA, because it's part of the design process. For example, if a team uses Serenity-BDD with screenplay, which makes it very easy to implement SBEs, shouldn't dev team focus on prod code instead?

<!-- truncate -->

The question relates to this diagram (which was published in [Discovery](http://bddbooks.com/) and as a [LinkedIn article](https://www.linkedin.com/pulse/bdd-tasks-activities-seb-rose/)).

![](/img/blog/ebf9bb6300693b7ea20afef95510d77aa935c60c3efdd4fcbc77377fd0ff7a05.png)

In my talk I made it clear that I believed that developers should be involved in step **#5 -** **Automate**. The questioner asks _“…_ _shouldn't DEV team focus on prod code …?”_ This is a very common question, rooted in a confusion between BDD and Test Automation.

## Test automation

Test automation is a generic term that can be applied to any activity that results in the automation of tests. Programmer (or unit) tests are one aspect of test automation. So are integration tests and end-to-end (E2E) tests. Load, performance, and penetration tests can also be automated.

Typically, teams that are focused on test automation do that automation **_after_** the code has been written. Development and testing are separate activities, often undertaken by different teams with different goals.

Development goal: implement the feature

Testing goal: check the implementation achieves expected quality

This approach is widespread and valuable but has some drawbacks. If you’d like to dig into those drawbacks there are some links in the [**_Going deeper_**](#_Ref66891642) section below.

## BDD

Behaviour-driven development (BDD) is an approach that grew out of test-driven development (TDD) and agile software development. [The goals of BDD](https://cucumber.io/docs/bdd/) are:

-   Encouraging collaboration across roles to build shared understanding of the problem to be solved
-   Working in rapid, small iterations to increase feedback and the flow of value
-   Producing system documentation that is automatically checked against the system’s behaviour

The diagram at the beginning of this article lays out and _idealised_ behaviour-driven process flow. As you can see, step **#5 – Automate** comes before **#6 – Implement**, which can seem back-to-front from some perspectives. How can we automate the testing of software that doesn’t exist yet?

Take a minute to change perspective and things don’t seem quite so crazy. The Automate step isn’t about testing at all. Each scenario describes one behaviour of the system which will need be implemented in code. When we automate that scenario, we begin to **_imagine the code we wish we had_**. This is a detailed design activity – and as such needs the involvement of someone with development skills.

This approach is, in this respect, identical to TDD – except that TDD is generally a developer-only activity. BDD is collaborative, bringing together the 3 Amigos (business, developer, tester) to collaborate throughout. The additional benefits that BDD brings are a shared understanding of the business domain and business-readable documentation.

**#5 – Automate** transforms a scenario in the business-readable documentation into a failing automated test. This guides the development team as they design and implement the code that will deliver the specified functionality. Once the behaviour has been implemented, the automation ensures the continued correctness of the system’s behaviour, and the documentation is considered **_living_** documentation. In contrast, documentation that lives in textual documents that are external to the system itself, can be thought of as **_dead_** documentation, because it usually reflects how the system _**used to behave**_.

BDD does not replace traditional testing and test automation, but it does reduce a team’s reliance on them to some degree. Nor does BDD replace a team’s need for people with testing skills. They are needed more than ever – to help the team reach a shared understanding, to share with developers their specialised domain knowledge, and to ensure customer satisfaction using specific skills such as exploratory, load, or usability testing.

## Confusion

The confusion between test automation and BDD may have its roots in its predecessor, TDD. It has always been problematic that a design and development technique should have the word “test” so prominent in its name. Especially in an industry where development and test have been so siloed for so long.

The confusion has been exacerbated by the understandable desire to utilise testers that don’t have development skills to write automated tests. This desire has been encouraged by the existence of natural language automation formats using the language of Given/When/Then:

-   Given/When/Then are the core keywords of Gherkin
-   Gherkin is the structured syntax understood by automation tools such as Cucumber
-   Cucumber is a widely downloaded, open-source tool, available on numerous platforms
-   Cucumber was created to support BDD

These facts allow people to deduce an “obvious” but incorrect conclusion:

-   I conform to Gherkin when I write my tests
-   I use Cucumber to automate my Gherkin
-   Cucumber was created to support BDD
-   Therefore, I am "doing BDD"

The correct conclusion should be:

-   Therefore, I am automating tests using Given/When/Then

The correct logic flows in the opposite direction:

-   To benefit from a shared understanding, the team needs to collaborate on the detailed specifications
-   To assure the value of that understanding, it must be captured using business-readable terms
-   Gherkin’s use of natural language and Given/When/Then makes it an ideal choice
-   Cucumber’s ability to understand Gherkin makes it the ideal automation tool
-   Therefore, Cucumber and Gherkin are supporting the team to work in a behaviour-driven way

## Conclusion

If the goal is to automate a test, then you may not need developer skills (I think you still need developer skills, but that is another article).

If the goal is to reduce misunderstandings (and hence defects, rework, and costs), then you should look beyond test-after automation to BDD. In which case functional automation is an integral part of the design and implementation process and requires the development team to be leading participants.

## Going deeper

I’ve presented a session called “Contrasting test automation and BDD” on this topic at a number of conferences and webinars over the past year. For more extensive coverage, please [watch the video](https://www.dropbox.com/s/pxsj5tyllxkz67a/Test%20automation%20%26%20BDD%20-%20Vivit%20Unicom%202020.mp4?dl=0) and take a look at the [slides](https://www.slideshare.net/sebrose/test-automation-and-bdd-vivit-unicom-2020).

