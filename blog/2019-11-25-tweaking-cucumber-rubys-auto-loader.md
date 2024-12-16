---
slug: open-source/tweaking-cucumber-rubys-auto-loader
title: Tweaking Cucumber Ruby's Auto-Loader for Version 4
authors:
  - luke
tags:
  - Ruby
image: /img/blog/4e3a01d4169aecf539e3ea50e9b40d209975deb277e57cda405c1f9bad71d2a2.jpg
---

![](/img/blog/4e3a01d4169aecf539e3ea50e9b40d209975deb277e57cda405c1f9bad71d2a2.jpg)

_**TL;DR:** Since v1, Cucumber-Ruby has used Ruby's [`load`](https://ruby-doc.org/core-2.6.4/Kernel.html#method-i-load) to auto-load support and step definition files. This can result in surprising behaviour where files you've already loaded are asked to be loaded a second time by Cucumber. As of v4, users will get the option to specify whether Cucumber should use `require` or `load` by setting the top-level configuration option `Cucumber.use_legacy_autoloader`. If unset or set to false, then Cucumber uses the `require` keyword. If set to true, then Cucumber uses the `load` keyword, which reloads the files. This is a breaking change; hence releasing it in v4._

<!-- truncate -->

Before we continue looking to the future, how about we take a trip down memory lane? Cucumber is a BDD tool that's over 10 years old. By and large (starting from the Ruby origins), it wanted to give users the ability to write tests in behavioural language.

![growing grass with clock](/img/blog/51480a74783f47a7f901b22d2559b68bfd7b061384de332d13d63655aad28545.gif)

We're familiar with the standard Gherkin keywords: `Given`, `When` and `Then` (also `And` and `But`), but what _really_ happens behind the scenes when these keywords are used? Well, in essence, quite a lot, and most of that is definitely beyond the scope of this article! With that said, one crucial concept that occurs is Cucumber will autoload all support code.

## Autoload

Now the auto-load mechanism used by cucumber-ruby is ancient, almost unchanged in the lifetime of the codebase. If you search the beginning of Cucumber's history, [version 0.7](https://github.com/cucumber/cucumber-ruby/blob/v0.7.0/lib/cucumber/rb_support/rb_language.rb), you'll find the code uses the `require` keyword. The code changed to using the load keyword in [version 0.9.1](https://github.com/cucumber/cucumber-ruby/blob/v0.9.1/lib/cucumber/rb_support/rb_language.rb) with [this commit](https://github.com/cucumber/cucumber-ruby/commit/e764295622144b4cab449e3e68615ab70c7491e7) and has been in pretty much the same guise since - and to think, that was released in May 2011!

Now we've understood that the current mechanism is indeed ancient, let's look into some everyday use cases of cucumber, and how this new feature may be able to improve their testing.

A) Mandy works at a company that has multiple websites, perhaps across multiple domains & languages. She wants to run some browser automation in a BDD framework using a tool like Selenium.

B) Jasmine works at a financial institution, wants to run some fast REST calls against one of their APIs. She's using a BDD framework so that she can deliver their test results to stakeholders.

C) Malik works for a large company with hundreds of testers & business analysts is using Cucumber to manage a whole monolith of tests. They have some tests which don't have any support code, as they run these manually. In addition to these they also have a mixture of other tests (Unit, Feature, API and smoke tests).

When any of these three people runs a Cucumber test in Docker, Jenkins, locally or a CI environment, the `features/support/env.rb` file is the first file loaded (if it exists), with the remaining files being auto-loaded afterwards. However, the _way_ in which Cucumber loads it for them is by using the `load` method in Ruby's standard library.

This method has advantages and disadvantages. The key advantage it has is that it allows you to refresh the files that are loaded. What this means is that if you're testing a file which might potentially change, then you can reload the files without worry.

### Now to the crux of the issue... procedural code.

Often in Ruby (in Rails too), we can have config files or initializers used to set up a base state or create some dummy data. These often don't look like regular classes or Object Oriented constructs. You've probably seen similar things if you've worked with an RSpec or Rails project - `spec_helper.rb` and `rails_helper.rb` respectively.

The problem with these files is that when Cucumber autoloads these files, they run some procedural code, maybe to connect to a database or remote API and set it up with some seed data, or to fire up a browser via Selenium. However, once loaded, we may not want these files to be reloaded, as it will create extra overhead or even mess up our test data.

## The fix

![colbert saying give it to me now](/img/blog/04fe3ce8e13d6f250c42098e3724b0b96331ae73e9a0e31447647a290ab34631.gif)

Now, after a small tweak released as part of Cucumber [version 4](https://github.com/cucumber/cucumber-ruby/blob/v4.0.0/lib/cucumber/glue/registry_and_more.rb) (by yours truly), a configuration switch is available. To put it simply, you can tell Cucumber to only ever load files once, and then never again, or you can tell it to keep reloading them if asked.

### So why do this? Was it broken beforehand?

In a word, no, it wasn't broken. Because like a lot of good work in Open Source, the original logic was changed for v1 to enable files to reload. [The commit messages and tests for that change](https://github.com/cucumber/cucumber-ruby/commit/e764295622144b4cab449e3e68615ab70c7491e7) were indicative to why the changes were made in the first place: to allow procedural code in files to be modified and then re-evaluated. However, like a lot of good things over time, trends and packages evolve.

Since 2011, packages such as [Selenium Webdriver](https://github.com/SeleniumHQ/selenium/tree/master/rb) and [Capybara](https://github.com/teamcapybara/capybara/tree/master) have become almost synonymous with browser based testing. The whole concept of browser based testing has evolved exponentially, with in-house options, containerised options, or even dedicated web-based providers all offering varied options for testing solutions.

### So let's bring it back to our original example people: Mandy, Jasmine, and Malik.

Mandy wants to do a lot of browser-based testing. She may create some Page Objects using the Page Object Model. Now, the Auto-Loader for Cucumber becomes a bit of a distraction, as the order in which some of the objects are loaded matters to the setup.

So Mandy goes ahead and creates a set of fixed `require` and `require_relative` calls to ensure that they load their files in the right order. However, once she has done all of that inside her `env.rb` file, Cucumber then thinks, "I've loaded `env.rb`, now I need to load all of the other files now." So it goes ahead and loads them all **again**. This isn't a big issue, as the loading and creating of Page Objects is likely to be an extremely light-weight task, but there could be some code that introduces longer delays, and other code that just _doesn't need_ to reload. As such, I would say that Mandy would benefit from telling Cucumber to only load the code once, and if asked again, don't reload the code again.

An additional benefit for Mandy with this switch is they have a little more control over how their code is auto-loaded in the first place. This means they're unlikely to see any warnings if they have any constants or values pre-determined as they won't get redefined, and Ruby won't fill their screen with warnings.

With Jasmine, whether or not this flag is used depends purely on how she is interacting with APIs. If the APIs are seeding a database at the beginning of the test run, then they almost certainly would not want this data to be re-seeded. Reloading this data could cause a number of issues, not limited to:

-   The seed failing if there is verification that the data is identical
-   Higher quantities of data could cause a test expecting five users to fail due to 10 users having been created (inadvertently).
-   Their test environment could get overloaded because let's face it, it's 2019, and resources are always stretched thin. Their Devops/Sysadmins may be coming to them complaining that they're using up too many resources to do their API tests, and could they perhaps scale down a bit.

For Jasmine, though, the most significant thing of note is perhaps they don't realise this is happening. Maybe their tests don't suffer for it, or they haven't hit a situation where this is happening to them. Maybe they are just used to it and have, "Coded around it." Either way, offering a choice here is very useful to Jasmine, especially with a richly diverse set of API tests.

Finally, Malik. Now, in all honesty, he probably won't notice any difference here or need this ability. Given his team have so many different types of tests, it's probable that there is little to no setup or configuration settings that their Cucumber tests perform. As such, depending on which tests run, and at what stage of completion their code is, depends on whether or not this configuration setting will be of use to them. To echo the points above for Jasmine, having the opportunity surely can't harm things, right?

It is worth noting that for Malik, they could be the person who actually would prefer the pre-version 4 behavior: where they want the files to be reloaded each time. Perhaps they may be creating living documentation or running some tests which mutate and then get re-run for all of his different clients or customers.

Like all good things, Cucumber is evolving to deal with the changing landscape of testing, automation, and continuous deployment. This small change is another incremental step that allows people to have greater control over how their tests run once they click the "Go" button.