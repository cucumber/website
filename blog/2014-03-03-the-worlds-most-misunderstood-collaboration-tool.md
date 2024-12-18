---
slug: collaboration/the-worlds-most-misunderstood-collaboration-tool
title: The world's most misunderstood collaboration tool
authors:
  - aslak
tags: [BDD]
---

Cucumber reached a million downloads in the first three years and 5 million downloads 3 years later. I'm happy to have created such a popular tool, but saddened to see how it's misused and misunderstood.

If you think Cucumber is a testing tool, please read on, because you are wrong.

Cucumber was born out of the frustration with ambiguous requirements and misunderstandings between the people who order the software and those who deliver it.

<!-- truncate -->

In 2003 I became part of a small clique of people from the XP community who were exploring better ways to do TDD. Dan North named this BDD. The idea was to combine automated acceptance tests, functional requirements and software documentation into one format that would be understandable by non-technical people as well as testing tools.

There was a lot of trial and error and in 2008 I created Cucumber to distill what I had learned into a nice little package. My vision was to provide a language, a process and a tool that would provide a single source of truth of software behaviour. The audience would be both non-technical and technical project members.

![Single source of truth](/img/blog/0a02f0bfd1a8dfebb1de2838828723e419cc6d2882d4bd3a15ede6923a4e7619.png)

Unfortunately you can't just download Cucumber, start writing Cucumber Features and expect a nirvana of truth and enlightenment to happen on its own. There is a **process** to follow that involves many roles on the software team.

This process is called BDD. It's what came out of that clique I mentioned. BDD is not a tool you can download. Gojko Adzic gave BDD a new and better name: **Specification by Example**.

This process primarily consists of two activities (very simplified):

## Specification workshops (three amigos)

The people in charge of defining the requirements (business analysts) sit down with programmers and testers and discuss a feature to be implemented. (These roles are often called the three amigos). The three amigos come up with examples of how the software should behave, and write them down as Cucumber Scenarios.

## Outside-in development (programmers)

Programmers run those Cucumber Scenarios with Cucumber, which tells them what needs to be implemented - what’s missing. They code a little bit, run Cucumber again and continue until the feature works as described.

The technique is called Outside-In because programmers typically start with the functionality that is closest to the user (the user interface, which is on the outside of the system) and gradually work towards the guts of the system (business logic, persistence, messaging and so on) as they discover more of what needs to be implemented.

This discovery is guided by failing tests, just like with [TDD](http://en.wikipedia.org/wiki/Test-driven_development). The main difference is that Cucumber operates on a higher abstraction level, closer to the domain and farther away from classes and methods.

## Early adopters

Most of the early adopters of Cucumber in 2008-2009 understood that Cucumber was intrinsically linked to this process. They would often wear all hats of the three amigos: Business analyst, programmer and tester. -Or they would be working in a team where everyone was more or less on board with the idea of BDD.

## The Rails community derails

The second big batch of adopters was Rails developers (2009-2011). Automated testing was part of their culture, partly due to the testing tools embedded in Rails. Many of them saw Cucumber as a **better** automated testing tool, but most of them completely missed out on the underlying practices such as Specification Workshops with the three amigos and Outside In Development.

What many didn't realise was that Cucumber was now taken out of its intended context: Collaboration.

When Cucumber is adopted solely as a tool to write automated tests without any input from business analysts they tend to become [imperative](http://benmabey.com/2008/05/19/imperative-vs-declarative-scenarios-in-user-stories.html) and lose their documentation value.

This also makes them slow and brittle.

I’m partly to blame for this since I equipped Cucumber with [training wheels](http://aslakhellesoy.com/post/11055981222/the-training-wheels-came-off). Mea culpa.

There is a certain amount of ceremony involved with Cucumber. There is both Gherkin and Step Definitions to maintain. This can be justified if it improves collaboration and reduces misunderstandings, but if the tool is used in a vacuum those benefits will obviously never happen.

This improper usage of Cucumber caused many Rails teams to [reject Cucumber](https://news.ycombinator.com/item?id=6411787). It's an interesting thread. The vast majority doesn't realise that Cucumber is a collaboration tool.

## Testing community

When Matt Wynne and I published a [book about Cucumber](http://pragprog.com/book/hwcuc/the-cucumber-book) in 2011 it ended up on the radar of larger organisations that employ **dedicated** testers. These are people who are used to manual testing, enterprise tools such as HP Quality Center / ALM and to some degree other open source automation tools like Selenium.

This crowd has pretty much fallen into the same trap as the Rails developers - they use Cucumber uniquely as a testing tool. No collaboration. No outside-in.

They write Cucumber scenarios **after** the software instead of the other way around. Doing BDD well leads to decoupled software, which again makes it easy to reduce the duration of tests. You don't get any of these benefits when you treat Cucumber as an afterthought.

## Doing it right

Andrew Premdas, one of the first adopters of Cucumber, says it well:

> Your cucumber features should drive your implementation, not reflect it.

Think about that for a minute. This has a lot of implications. First of all, it means Cucumber features should be written **before** the code implementing the feature.

This takes us back to the Venn diagram in the beginning of this post. Cucumber features start their life as software requirements. The most important contributors to requirements aren’t programmers or testers - it’s business analysts. During this activity the programmers’ and testers’ primary responsibility is to ask questions and make sure they understand everything.

## Tests fall out of BDD

When you do BDD/Specification by Example and Outside-in, regression tests fall out at the other end. They are a by-product of those activities. Testing isn't the activity itself.

Cucumber is first a formost a collaboration tool that aims to bring a common understanding to software teams - across roles.

For many teams it isn’t lack of understanding of BDD or Specification by Example that is the biggest barrier. It’s simply inappropriate tooling.

Programmers and testers are comfortable with development tools. Most business analysts are not. Cucumber is a development tool, and therefore many business analysts won’t touch it with a ten feet pole.

This is part of the reason why I co-founded Cucumber Ltd and our flagship product, [Cucumber Pro](/pro). Our goal is to provide a collaboration tool for Cucumber that is as easy to use as a word processor or social networking website.

We also offer [training](/training) for teams who want to learn how to apply BDD and Specification by Example.

I am very excited about the future of Cucumber. I hope more teams will start to use it the way it was intended to be used.