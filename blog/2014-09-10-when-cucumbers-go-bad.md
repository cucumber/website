---
slug: bdd/when-cucumbers-go-bad
title: When Cucumbers Go Bad
authors:
  - matt
tags: []
---

Cucumber is a simple tool. It takes phrases written in plain language, finds snippets of code that match those phrases, runs them, and tells you whether they threw an error.

How you organise the code that Cucumber finds, is up to you.

What you get that code to do, is up to you.

If your Cucumber suite is slow, or hard to maintain, that's because the code you've asked Cucumber to run is too slow, or too complex.

<!-- truncate -->

If your plain language sentences are boring or awkward to read, that's the complexity in your underlying code creeping out.

You can get past this. In my talk at CukeUp this year, I described how most teams who adopt BDD hit a stage of disillusionment, where they question whether their Cucumber tests are giving them enough value.

It's natural to blame a tool for the discomfort you experience when you use it. Instead, I suggest you use that discomfort to help you see those deeper issues. These issues can be difficult to address, but tackling them will give you a great deal of benefit.

We wrote about this at length in the chapter "When Cucumbers Go Bad" in [The Cucumber Book](https://pragprog.com/book/hwcuc/the-cucumber-book), but here are a few quick tips:

## Acceptance tests don't have to be end-to-end tests

Just because you're using Cucumber, doesn't mean you have to run an end-to-end test. Cucumber is for documenting behaviour that non-technical people care about. If you know that behaviour is implemented in a single class in your application, then why fire up a browser? You can hit that class directly.

Connecting your tests as close as possible to where the behaviour is implemented is something you'll never regret.

This is where it becomes important to pick the same flavour of Cucumber as your application code is written in. If you're using Cucumber-Ruby to test a PHP app, you're shit out of luck. Cucumber comes in flavours for almost every programming language under the sun - [Java](https://github.com/cucumber/cucumber-jvm), [Ruby](https://github.com/cucumber/cucumber), [JavaScript](https://github.com/cucumber/cucumber-js), [C++](https://github.com/cucumber/cucumber-cpp), [PHP](https://github.com/behat/behat), [C#](https://github.com/techtalk/SpecFlow/), [ActionScript](https://github.com/flashquartermaster/Cuke4AS3) and [Lua](https://github.com/cucumber/cucumber-lua) to name but a few.

Why write acceptance tests that hit your classes? Why not just write unit tests? Good question! That brings me to my next point...

## Too many scenarios? Maybe you have a trust issue

Writing Cucumber scenarios together is a great way to build a team's share understanding of the problem domain. When you have a scenario written, and everyone agrees you want that behaviour, it's time to ask an important question:

> What's the best way to test this scenario?

If the technical perspective says that you can test this behaviour with a fast unit test, yet the business folks want it to remain as a Cucumber scenario, you have three options:

1.  Suck it up, and write another end-to-end test
2.  Wire up an acceptance test that connects directly to your domain model (see above)
3.  Convince the business folks to trust you, and write it as a unit test

Option 3 is what really excellent teams do.

Do your team want to be really excellent?