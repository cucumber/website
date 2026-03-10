---
slug: open-source/cucumber-in-2025-year-in-review
title: "Cucumber in 2025, year in review"
authors:
  - mpkorstanje
tags:
  - Open Source
  - Year in Review
---

A year ago, Cucumber [returned to community ownership](https://cucumber.io/blog/open-source/cucumber-is-back-in-community-ownership).
I'd like to take a moment to reflect on what we have been up to.

<!-- truncate -->

## Notable new features

Cucumber is a collection of different implementations. Each moves at the speed
of its contributors and maintainers. So we start by highlight some changes from
the individual projects.

### Cucumber JVM

In 2025, we've had 20 releases for Cucumber-JVM. These were mostly bug fixes
and dependency updates. But I'd like to highlight a few notable changes. 

* We had [a contribution](https://github.com/cucumber/cucumber-jvm/pull/3124)
  from Stefan Gasterstädt to make it possible to create locale sensitive
  parameter transformers. This looked quite complicated at the start, but the
  actual implementation turned out to be incredibly elegant.

* Julien Kronegg contributed several<sup>
  [1](https://github.com/cucumber/gherkin/pull/372),
  [2](https://github.com/cucumber/cucumber-jvm/pull/2971),
  [3](https://github.com/cucumber/cucumber-jvm/pull/2703),
  [4](https://github.com/cucumber/gherkin/pull/445)</sup> performance
  improvements.

* The Cucumber JUnit Platform Engine now [supports rerun files](https://github.com/cucumber/cucumber-jvm/pull/3057).
  While the solution comes with a bunch of jankiness, it should smooth out the
  upgrade path from JUnit 4 to Junit 5+.

* With JUnit 4 entering maintenance mode [cucumber-junit](https://github.com/cucumber/cucumber-jvm/tree/main/cucumber-junit)
  has been deprecated in favor of [cucumber-junit-platform-engine](https://github.com/cucumber/cucumber-jvm/tree/main/cucumber-junit-platform-engine).

### Cucumber JS

In 2025, we've made 8 releases for Cucumber-JS. These were mostly bug fixes,
and small features. Other than that, lots of architectural Tetris to unblock
things. Some notable changes:

* Alexandru Gologan contributed [support for execution sharding](https://github.com/cucumber/cucumber-js/pull/2600).
* Configuration files [can be written in TypeScript](https://github.com/cucumber/cucumber-js/pull/2709).

We're also working on a [`cucumber-node`](https://github.com/cucumber/cucumber-node)
built around the [Node.js test runner](https://nodejs.org/api/test.html). It's
still in the pre-1.0.0 phase, so APIs and behaviour might change. The stable
canonical implementation of Cucumber for JavaScript continues to be
[@cucumber/cucumber](https://github.com/cucumber/cucumber-js) for now.

<!-- TODO: What about user author plugins -->

### Cucumber Ruby

In 2025 Cucumber-Ruby turned Seventeen! Which means it is now [old enough to drive](https://github.com/cucumber/cucumber-ruby/commits/f3292f4023a707099d02602b2bd6c4ca3cec6820)
in some parts of the world. It also saw 5 releases including v10 which adds
support for Ruby 3.5+.

## Cucumber Reports

Our https://reports.cucumber.io/ service is back up and running after the 
transition from SmartBear. David Goss, who leads the Cucumber-JS project, 
has been hard at work transitioning the infrastructure and getting the costs
manageable.

## Cucumber Messages

[Cucumber Messages](https://github.com/cucumber/messages) is a schema to
describe test results and other information from Cucumber in a new-line
delimited JSON format. The first commit was done in 2018, and we are now at the
point that we can dogfood our own implementation and build up the documentation
and tooling through that.

For users the first results can be seen in the
[pretty formatter](https://github.com/cucumber/pretty-formatter)
and [HTML formatter](https://github.com/cucumber/html-formatter) which now
create reports with more fidelity.

## Cucumber JSON Report in maintenance-mode

With the internal adoption of messages now in progress we have now also
officially put the Cucumber JSON report in maintenance mode. The format is still
supported but will not receive any changes. We don't expect this will any
significant impact, in practice the format had already been ossified.

Putting the format in maintenance mode meant that we had to pin down the
exact format of the report in the form of the [cucumber-json-schema](https://github.com/cucumber/cucumber-json-schema).
Unfortunately there been a significant drift between implementations and each
flavor will need its own schema. So this is very much a work in progress, but
for Cucumber-JVM at least that work is now completed. 

## Collaboration

- governance?

## Security

## Newsletter

We're finally reviving our mailing list. If you're reading this in your email
client, that means we've got it all working again.

If not, you can subscribe [here](https://cucumber.io/community).

## Finances

..

- https://cucumber.io/sponsors

## Downloads

- https://docs.google.com/spreadsheets/d/1n_TqnHwxl4N-tb7RXqe-Em41nOa0adISd2ECbTXvDY4/edit?gid=1953938148#gid=1953938148

## Get involved

We like to think Cucumber is a warm and friendly community where you can make 
friends and learn, building software that thousands of people rely on every day.

You can find us on [Discord](https://discord.gg/8YXBH8j74w), 
[Github Discussions](https://github.com/orgs/cucumber/discussions) or feed the 
robots on [Stack Overflow](https://stackoverflow.com/questions/tagged/cucumber).

We have a regular meeting on [Thursdays](https://cucumber.github.io/community-calendar/calendar.ics) at 4pm London time.

## Thanks

Thanks for being part of this community. It's an amazing privilege to be part
of such a vibrant, popular open source project.
