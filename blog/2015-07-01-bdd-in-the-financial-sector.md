---
slug: bdd/bdd-in-the-financial-sector
title: BDD in the Finance Sector
authors:
  - aslak
tags: []
---

_This article was first published for the Excelian Spark Magazine._

## Introduction

Developing custom software to support business processes can be a costly affair. Developers often make mistakes because they misunderstand the business requirements. This results in defects that usually go unnoticed until the software has been implemented, which leads to expensive and time-consuming rework, and ultimately causes the software to be delivered late and over budget.

When the software is finally delivered, often the world has moved on, and the software is already out of date.

Behaviour-Driven Development (BDD) is a _collaborative_ approach to software development that bridges the communication gap between business and IT. BDD helps teams communicate requirements with more precision, discover defects early and produce software that remains maintainable over time. The BDD approach enhances agile methodologies such as Scrum or Kanban.

<!-- truncate -->

Gilles Philippart of Société Générale Corporate Investment Banking (SGCIB) credits BDD with making their transformation to agile a success:

> BDD is at the heart of our development practices. Not only are our developers involved but also testers, business analysts, etc. It is also a key element in our agile transformation process and is what made it possible for us to truly do continuous delivery.

Kushang Gajjar works as a Software Engineer overseeing quality at PayPal. His team have been using BDD since 2014, and are already enjoying the benefits:

> We gained a lot of confidence in what we ship. Bugs and regressions are much less frequent than before and this saves us a lot of time and money. We are getting faster and faster to deliver.

Teams that practice BDD focus on preventing defects rather than _finding_ them. This leads to less rework and quicker time to market.  
The two main practices in the BDD approach are _discovery workshops_, which bridge the communication gap between business and IT, and _executable specifications_, which keep maintenance costs low over time.

## Discovery workshops

Discovery workshops are short and frequent meetings where business and IT meet to gain a common understanding of how the software should behave. On Scrum teams, they typically happen just before sprint planning, or even throughout the week as preparation for the next sprint.

Business stakeholders and IT representatives (developers and testers) meet to have conversations about _concrete_ examples that illustrate the business rules and acceptance criteria of the next software feature or user story to be developed. These examples involve real people, real data, and real interactions with the system. For example:

> Mike’s trade was accidentally cleared as Kim’s, and back-office is  
> notified about the inconsistency.

Conversations about concrete examples act as catalysts which trigger questions to expose ambiguities and misunderstandings between people with different perspectives. Some of those questions can get answered immediately, or they can be written down and analysed further after the workshop.

Businesses often use inefficient approaches to communicate requirements. The following workflow is very common, even for businesses using processes like Scrum:

1.  Business hands off ambiguous or vague requirement documents to developers.
2.  Developers then write software where misunderstandings or assumptions manifest as defects.
3.  Developers hand off defective software to testers who spend a lot of time finding the defects.
4.  Developers seek clarification from the business and iterate the process again.

Discovery workshops allows business stakeholders to verify that the developers have understood what they are supposed to build before they build it. This allows business stakeholders gain better insight into the magnitude of what they are asking for; If a requirement is big and complex, there will be many questions and many examples. Teams can then split requirements into smaller chunks of work, making it easier to deliver increments at a steady and predictable pace.

Testers also play an instrumental role in discovery workshops. By getting involved before the software is written, they can focus their effort on helping developers prevent defects rather than finding them weeks or months later.

## Executable specifications

The concrete examples that are created collaboratively in discovery workshops can be used to automatically verify that the software behaves consistently with these examples.

This happens by expressing those examples as executable software specifications in plain language that everyone on the team can understand. For example:

```gherkin
Feature: Trade reconciliation
  Scenario: Trade logged against the wrong account  
     Given a trade logged on Mike's account  
     But the clearing house recorded it as Kim's trade
     When the clearing house EOD report is reconciled against fills  
     Then the trade should be flagged as inconsistent  
```

These specifications (called _scenarios_) are then executed regularly by a tool like Cucumber - a free, open source product that can run executable specifications against the software being built. Other similar tools include FIT, Fitnesse, JBehave, Concordion, Robot Framework and Twist.

Cucumber is a mature product that is used by several hundred thousand developers and testers around the world. The Cucumber tool is backed by the Cucumber Ltd company who provide support, training and consulting.

Cucumber produces reports that indicate what parts of the specification are implemented correctly, and what parts are incomplete or defective. Cucumber works with all the major software platforms including Java, .NET (SpecFlow), JavaScript, PHP (Behat), Python (Behave) and Ruby. This means your investment in executable specifications is safe - the specifications can even be transferred to run against a new implementation platform.

Teams run these specifications throughout development to get immediate feedback about how much is yet to be done, and whether the software meets the user’s requirements.

These executable specifications also work as automated regression tests which reduces, and in some cases _eliminates_, costly and time-consuming manual testing.

One large US Investment bank runs around 3000 automated Cucumber scenarios several times a day, validating 30 applications and components. They have over 500 people from both business and IT involved in BDD and Cucumber executable specifications.  
SGCIB runs 400 scenarios in 20-30 minutes, and their team consists of 6 BAs, 60-70 developers and a single QA person.

Cucumber scenarios aren’t just executable specifications and automated regression tests. They are also _living_ documentation of the software that is always up to date.

This is particularly relevant in the finance sector, where there are strict regulations for auditing and compliance.

![Single source of truth](/img/blog/0a02f0bfd1a8dfebb1de2838828723e419cc6d2882d4bd3a15ede6923a4e7619.png)

Keeping specifications, regression tests and documentation in a single place reduces the overhead of keeping multiple documents in sync - the Cucumber scenarios work as a shared source of truth for business and IT.

## Conclusion

It has taken the BDD methodology, literature and tools over a decade to mature to a level where more conservative industries such as the finance sector consider them both valuable and safe. The finance sector started adopting BDD on a larger scale around 2013. This is reflected in the growing availability of training. The number of companies and contractors offering BDD training in London seems to have doubled in the past couple of years.

Test automation tools and methodologies have come a long way since Ward Cunningham, the inventor of the wiki, invented FIT in 2002. The emergence of executable specifications has now changed the landscape, enabling faster delivery of higher quality software.

This can only happen if business stakeholders collaborate closely with IT, and QA becomes a more proactive (and less reactive) activity. The challenge in the future will be for businesses to recognise that organisational changes are required to reap the benefits of BDD.