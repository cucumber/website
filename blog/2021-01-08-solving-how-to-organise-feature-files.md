---
slug: bdd/solving-how-to-organise-feature-files
title: 'Solving: "How to organise feature files?"'
authors:
  - seb
tags: [Gherkin]
---

Over the holidays you voted for [different ways to organise feature files](https://specflow.org/blog/how-to-organise-feature-files-givenwhenthenwithstyle/). This article shows the results of the survey, an analysis of the votes, and some general ideas on how to organise your living documentation.

[Gojko Adzic](https://gojko.net/) has been running a series of challenges called [#GivenWhenThenWithStyle](https://twitter.com/search?q=%23GivenWhenThenWithStyle&src=typed_query&f=live). This is my solution to challenge #16. You should definitely check out the [rest of the challenges and their solutions](https://specflow.org/blog/the-given-when-then-with-style-challenge/).  
  
[Gáspár Nagy and I have written in more detail about writing and organising feature files in our new book, _Formulation_](http://bddbooks.com).

## The winner is…

<!-- truncate -->

From the survey, _splitting by functional area and grouping by capability_ was the runaway winner.

![](/img/blog/9f84f20c6c62030558dcfed7cd33dc9c854b47016b49ba2214d7f46175fce0ee.png)  

Regarding the “other”, Ken Pugh again posted a [detailed response](https://www.blog.acceptancetestdrivendevelopment.com/organizing-your-feature-files/) in which he suggests organising feature files in a functional hierarchy. I’ll dig into this in more detail later in this post.

Dhanunjay was one of three participants that chose the _feature file per story_ solution, for ease of maintenance. Another participant chose _split by system component_ because it gave “better visibility of test coverage”. I have very strong reservations about both of these rationales, which I explain below.

Matt Wynne was one of the participants that selected the winning option, with this succinct reason:

> Because every one of the other options leaks solution domain; this is the only one that's pure problem domain.

This reason was echoed by other participants André, Marcel Kwakernaak, and Geert-Jan Thomas who all recognised the importance of feature files as business-facing documentation. I particularly like this comment, left by an anonymous participant:

> The software that is developed is for business purpose, therefore ability to master business capability is prime over technical aspect. I like the idea of being able to quickly pin down system-components in question that generate issues, so a supporting structure that conveys which system-component is to "blame" is very welcome - typically I do this with tags and evaluate the test-reports based on tags…

More on tags later.

## Specification or testing?

In my experience, the Given/When/Then format has two major drivers in industry:

-   Specification of system behaviour
-   Test automation

It was originally used as a way to specify the behaviour of systems. To automatically verify that the software being developed met those specifications, the Given/When/Then examples needed to be written in a format that automation tools could understand. This led to the creation of the Gherkin language, which defined a structured way to capture Given/When/Then specifications as scenarios in feature files. Gherkin enabled the creation of automation tools (such as JBehave, Cucumber, SpecFlow) that could read the specifications and execute automation code in response.

With the increased demand for test automation, Gherkin’s similarity to natural language was recognised as a way to enable test automation tasks to be performed by people that did not have software development skills.

The winning option for this challenge implicitly assumes that Gherkin is being used to specify system behaviour. The responses expect feature files to be used as documentation, throughout the lifetime of the product. This has always been the intention of _Behaviour-driven development (BDD)_ and _Specification by example (SbE)_.

The remainder of this solution will assume that you intend to use Gherkin to document system behaviour.

## Features are documentation

Gherkin documentation is split into feature files, but there’s no standard definition of what a **_feature_** is. The Collins dictionary [defines a feature](https://www.collinsdictionary.com/dictionary/english/feature) as “an interesting or important part or characteristic,” and I don’t intend to try to be more specific.

To illustrate feature file organisation I’ll use diagrams below that relate to an imaginary online pizza ordering application (taken from our book, [Formulation](https://leanpub.com/bddbooks-formulation/)_)._

### Navigating the documentation

There's nothing worse than trying to find a specific piece of information in poorly organized documentation, so feature files should be organised in a logical way. A typical way to structure documentation is to use chapters, sections, sub-sections and so on.  
  
Each scenario documents an example of the system's behaviour. Scenarios live in feature files, which in turn live in source control, which is typically organised hierarchically. The feature files collectively document the behaviour of the system, but are only useful when people can easily navigate to the part that they are interested in. A hierarchical tree of folders provides a simple way to structure our documentation that is identical to traditional documentation.

![](/img/blog/b797d8f4ac4059d333db9e735885bd8c6bcd08d2ff51684bbf06455a4e277e80.png)

_Figure 1 - Traditional documentation_

Consider a system that allows customers to order pizzas online. A partial view of the documentation might look like this:

![](/img/blog/dc46e19b67257e785359e0f0e3e606a3ce29f661d633a17abadd1db89eafb791.png)

_Figure 2 – Online ordering_

### Zoom-in/out

A hierarchical structure also allows us to organise documentation by level of detail. The deeper the folder, the more fine-grained the behaviour described. Here's how the Customers hierarchy might actually look.

![](/img/blog/0ad2c9aa48e556abdbd4188cf19657ba3c9ee102d9e2c53e45eb11dfe910e9f1.png)

_Figure 3 - Customers documentation_

Even in a simple system, there are many levels of detail. Some readers will be looking for the big picture - they should not need to travel far from the root of the documentation. Others will be interested in specific details - they should be able to navigate to the relevant section easily.

This is similar to how we use online maps. We can get a good idea of where New York is relative to Washington without needing much detail. If we actually want to drive from one to the other, we will need to zoom in and get details about which route to take.

### Specifying shared behaviours

You may have noticed a _send\_email.feature_ inside _email confirmation_. There may well be other features that send emails and we wouldn’t want to create a copy of that feature file wherever that functionality is used.

When we find a feature that is used by several parts of our system, we should ensure that a single feature file describes the behaviour. Then, if it needs to change, we only have to change the documentation in one place.

![](/img/blog/16b7e56bda8f1a21d370694fc68ab882dcb2c0747dfc50dc6f50684b05b2d753.png)

_Figure 4 – Extracting shared email functionality_

It's easy to move shared features into a separate part of the tree, but at the moment, there's no special way to link from one feature file to another in Gherkin. For now, I recommend that you document the dependencies of a feature in the feature file description. The best information to include is the name and relative file path of the:

```gherkin
Feature: Send unique link
  This feature is dependent on:
  - Send Email - ../../../communication/email/send_email.feature
```

### Targeted documentation

There is another important aspect of documentation - different consumers require different information. To keep the documentation readable, we need to ensure that sales executives don't get forced to read API documentation, while integrators may not be interested in all the details of our application.

Depending on your situation, you may choose to create separate hierarchies for specific stakeholders or interleave the targeted documentation throughout.

![](/img/blog/29240c1e1a79871855db0f01c1f65972466d8c24775582549e26516896520f16.png)

_Figure 5 - Separate hierarchy_

![](/img/blog/2d3e5146ea1a97dd2d9a79a1743304e4c08b1d3e5df402d045e165e3cedb62b6.png)

_Figure 6 - Interleaved_

There are situations where it is impractical to represent cross-cutting interests hierarchically. In these cases what you need is something like an index that allows you to find all the relevant pieces of documentation. Gherkin has a [feature called tags](https://cucumber.io/docs/cucumber/api/#tags) that can be used for this purpose.

## Stories aren’t features

It is common to see teams create a new feature file for each user story that they implement. I’ve [written extensively](https://cucumber.io/blog/bdd/user-stories-are-not-the-same-as-features/) about why this is a bad idea.

TL;DR – User stories are intended to be used to deliver small increments of functionality. If you create a feature file for each story, then you will expend unnecessary effort maintaining existing feature files. Additionally, feature files created this way will not be useful documentation, because each will only describe a thin slice of functionality.

## Conclusion

Of the options provided in this challenge, the winner is the best choice. Personally, I would have chosen _Other_, because there is more to organising your documentation than simply _splitting by functional area_.