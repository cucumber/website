---
slug: bdd/introduction-to-formulation
title: "Webinar: Introduction to Formulation"
authors:
  - seb
tags: [BDD]
---

A couple of weeks ago, Gáspár Nagy and I [presented a webinar](https://smartbear.com/resources/webinars/intro-to-formulation-documenting-bdd-scenarios/) on the BDD practice of formulation. There were so many questions that we were unable to answer them all in the allotted time, so we’re taking this opportunity to publish our answers as a blog.

We’ve merged similar questions together, so what you see below is a summary of the outstanding questions.

<!-- truncate -->

## Where can I learn more?

We have published two BDD books (Discovery & Formulation) that are available from Leanpub (multiple ebook formats) and Amazon (print & Kindle). Visit [http://bddbooks.com](http://bddbooks.com) for full details.

I have previously blogged an excerpt from the Formulation book, describing the BRIEF acronym. [https://cucumber.io/blog/bdd/keep-your-scenarios-brief/](/blog/bdd/keep-your-scenarios-brief/)

The Cucumber open source community maintains documentation online. A good place to start is [https://cucumber.io/docs/bdd](/docs/bdd)

SmartBear provides free training videos that focus on using Cucumber (and Specflow) for C#, Java, JavaScript, and Ruby developers. [https://school.cucumber.io](https://school.cucumber.io) 

If you want to play around with Cucumber or Specflow, but don’t want to install the software on your machine, then head over to [Cyber-Dojo](https://www.cyber-dojo.org/creator/home), where you can experiment with whichever version of Cucumber that interests.

## I have a question about the scenario you presented…

In the webinar we formulated a scenario from sample software system being developed for a public library. You can [watch the webinar online](https://smartbear.com/resources/webinars/intro-to-formulation-documenting-bdd-scenarios), but here’s the final scenario for reference:

```gherkin
Feature:
  Rule: Members pay reservation $1 per item
    Scenario: Library member reserves a book
      Given Andrew is a library member
      When he reserves one book
      Given he should be charged $1
```

There were a couple of questions specifically about the structure of this scenario.

## “Are Given, When and Then the only keywords that introduce steps in a scenario?”

- **Given**  is used to set the context of a scenario
- **When** is used to describe the action that should cause the behaviour being illustrated to take place
- **Then**  is used to describe the expected outcome.

Gherkin provides two other keywords that can be used to introduce steps: **And** and **But.** If you use one of these conjunctions, the implication is that the step is in the scope of the preceding **Given** / **When** / **Then**. So, if a **Given** is followed by an **And**, it means that the **And** step is intended to contribute to the context of the scenario.

## “Can we pass the total quantity to be reserved?”

Passing parameters is specifically an automation question, and the answer is “YES!”. You can find more details on parameter passing in the [Cucumber Expression documentation](/docs/cucumber/cucumber-expressions/).

## Why doesn’t your scenario contain more detail?

The ‘E’ in our BRIEF acronym stands for **_essential_**. Every piece of information in a scenario should be essential to understanding the system’s behaviour with respect to the Rule being illustrated and the Scenario being described. The running system will require plenty of other details to actually run, but the scenario should contain only information that is essential to understanding the specific behaviour being illustrated.

Details that aren’t essential for one scenario will be essential for others. It’s hard to see when we’re only looking at a single scenario in isolation, but becomes clearer if you imagine what a complete set of scenarios will look like.

That still leaves the question of how you can illustrate a behaviour in the middle of a customer journey without including **Given** steps that cover all the actions that a user would have to go through to get the system into the necessary state. The answer is to find a way of describing the journey to that state in a single **_intention revealing_** way.This is what the statement, the statement “**Given** Andrew is a library member” does in the sample scenario. It could be expanded with all the steps that Andrew had to go through to join the library, but that would be confusing. Instead, we’ve found a way that describes the intent of all those inessential steps that we’ve omitted.

An additional benefit of this approach to omitting incidental detail is that it gives our developers freedom to choose how to automate the scenario. They could automate this step by manipulating the system’s UI and going through the full sign up process. Or they could search the member database to find a suitable user to use in the scenario. Or the automation could directly insert a new library member into the database at the beginning of the scenario and delete it at the end. The choice is not important from a behavioural viewpoint – all of them would illustrate that reserving a book will cost Andrew $1.00 – but it does mean that we can build an automation suite that conforms to the [test automation pyramid](/blog/bdd/eviscerating-the-test-automation-pyramid/), robustly giving us fast feedback and confidence in our application.

## Shouldn’t scenarios cover a full user journey?

The scenarios that we.ve been looking at so far focus on illustrating a single behaviour. This is what we call an **_illustrative_** scenario. There’s also a need for scenarios that cover complete user interactions, which are called **_journey_** scenarios. We didn’t speak about these in the webinar, but they are covered in our [Formulation book](http://bddbooks.com/).

## How can I use Gherkin to describe asynchronous behaviours?

Asynchrony is always hard to reason about. Nonetheless, Gherkin scenarios that follow the BRIEF principles are perfectly suitable for illustrating single aspects of asynchronous behaviours. There’s no need to always document each step of the interactions in every scenario. As described in the previous answer, try to describe the context using a single, **_intention revealing_** statement.

## Shouldn’t steps be _atomic_?

It’s really important that each scenario should be isolated from every other scenario. This means that scenarios should be able to run in any order and still get the same result. All flavours of Cucumber go to great lengths to help enforce this, but automation engineers need to be aware of this necessity, because there are numerous ways that they can inadvertently break this important rule.

On the other hand, it’s frequently necessary for data to flow between steps within a scenario. Again, all flavours Cucumber provide mechanisms to facilitate this sharing of information – although these mechanisms vary between programming languages. You can find more details in the [open source documentation](/docs/cucumber/step-definitions/#state-management).

## Is this a “good” scenario?

**Given** the url is input in the browser  
**When** the user presses “enter”  
**Then** the Login page opens  
  
Without knowing what rule this scenario is supposed to illustrate, it’s hard to be certain whether it has been written in an appropriate way. On first inspection however, I suspect that it goes against the recommendation for scenarios to be **_intention revealing_**. The scenario as written seems to be very mechanical, talking about browsers, keypresses (“enter”), and pages.

What is the user trying to do? What behaviour are we trying to illustrate?

Even if you can convince yourself that this isn’t a problem, this scenario doesn’t include appropriate **_real data_**. What URL is the user navigating to?

So, its more than likely that this will not be a useful scenario that helps to define valuable behaviour from a business perspective.

## Isn’t BDD just an expensive way of writing automated tests?

As we mentioned during the webinar, we believe that there is little value to be gained from using Cucumber (and Gherkin) to write automated test scripts. You can use them in this way, but the resulting scripts are often brittle, deliver little documentation value to the team as a whole, and thus are costly to maintain.

BDD is a collaborative approach to developing software that leverages the different perspectives of team members to fully understand the requirements underpinning a story before any code or tests are written. This shared understanding is captured using **_business readable_** terminology that will then act as an unambiguous specification of the system’s expected behaviour.

Additionally, once automated, a failing scenario will guide the developers to write just enough code to get the scenario to pass (and by inference, exactly the behaviour that was specified). Once passing, the scenarios are described as **_living documentation_**, which can be relied upon to be correct, because they are validated against the actual system every time it is built.

It is within the context of these multiple benefits that the additional investment of writing Gherkin scenarios contributes a significant return on investment (ROI). If you’re simply using Cucumber/Gherkin to turn a manual test script into an automated test script, then your ROI will be minimal.

## I’m already busy. How can I fit BDD in on top of everything else?

Adopting BDD requires up front investment for long term savings. Stories should be refined (using example mapping) before they are pulled into a sprint. That’s because, before you have a detailed, shared understanding of what the story **really** entails, it’s impossible to know how large it actually is.

Using the automated scenarios to guide the development means that developers know exactly what they need to deliver, so unnecessary rework is minimised. The growing suite of automated scenarios act become a valuable regression suite, allowing faster releases and reduced customer defects. The trustworthy _living documentation_ that this produces means that, when the team is asked to modify or enhance the product, they don’t need to waste time reverse engineering the system’s capabilities.

Adopting BDD takes time, planning, and organisational support. It requires a change of working practices to succeed. But the payoff is massive – in development costs, software quality, employee morale, and customer satisfaction.

## Can BDD be used for APIs?

In a word, “Yes”. There are different considerations to API design and documentation – the customer is much more likely to be another developer rather than a business person – but the principles of discovery, formulation, and automation still apply.

You can see an example of API design and implementation using BDD, Cucumber, and SwaggerHub in this conference session from  Connect 2020.

## Can I use Selenium when developing using a BDD approach?

BDD and Cucumber don’t force you to use specific automation tools or libraries, so you can certainly use Selnium. However, remember the advice of the [test automation pyramid](/blog/bdd/eviscerating-the-test-automation-pyramid/). To paraphrase – build your test strategy on a foundation of small, fast, reliable automated tests. Using Selenium tends to produce end to end tests, at the top of the pyramid – and we want as few of these as we can get away with, because they are typically big, slow, and flaky.

Just because we write the scenarios using **_business readable_** language doesn’t mean that the automation can’t be implemented lower down the pyramid. I [blogged about this](http://claysnow.co.uk/the-testing-iceberg/) some time ago.

## Should I use Cucumber or TestNG?

If you’re wanting to write automated tests, then a testing tool is what you need. In that case TestNG (or similar) is exactly what you need.

If you want to adopt BDD as a way of increasing collaboration, increasing quality, and reducing misunderstandings, then you need a collaboration tool that enables your business colleagues to participate directly. This is the use case that Cucumber and Gherkin have been designed for. Teams have used Cucumber simply as a test tool, but we do not recommend this, because we see little return on investment from using in this way.