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

_Caveat emptor_: Cucumber is a collection of different implementations. Each
moves at the speed of its contributors and maintainers.

## Notable new features

https://discord.com/channels/1260995505018765393/1264635611994652744/1451201167001518141

https://discord.com/channels/1260995505018765393/1264635611994652744/1451241874491965461

Our https://reports.cucumber.io/ service is back up and running after the 
transition from SmartBear. David Goss, who leads the Cucumber-JS project, 
has been hard at work transitioning the infrastructure and getting the costs
managable.

## Cucumber Messages

[Cucumber Messages](https://github.com/cucumber/messages) is a schema to
describe test results and other information from Cucumber in a new line
delimited JSON format. The first commit was done in 2018, and we are now at the
point that we can dogfood our own implementation and build up the documentation
and tooling through that.

For users the first results can be seen in the
[pretty formatter](https://github.com/cucumber/pretty-formatter)
and [HTML formatter](https://github.com/cucumber/html-formatter) which now
create reports with more fidelity.

### Cucumber JSON Report in maintenance-mode

With the internal adoption of messages now in progress we have now also
officially put the Cucumber JSON report in maintenance mode. The format is still
supported but will not receive any changes. We don't expect this will any
significant impact, in practice the format had already been ossified.

Putting the format in maintenance mode meant that we had finally pin down the
exact format of the report in the form of the [cucumber-json-schema](https://github.com/cucumber/cucumber-json-schema).
Unfortunately there been a significant drift between implementations and each
flavor will need its own schema. So this is very much a work in progress, but for
Cucumber-JVM that work is now completed. 

### Cucumber-Ruby turns Seventeen!

Cucumber-Ruby, the which is now [old enough to drive](https://github.com/cucumber/cucumber-ruby/commits/f3292f4023a707099d02602b2bd6c4ca3cec6820) in some parts of the world, added support for Ruby 3.5+, and we began the work of moving it
towards our more modern message-based patterns, to enable joining the effort 
to produce cross-platform polyglot formatters.

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

Thanks for being part of this community. It's an amazing privelege to be part of such a vibrant, popular open source project.
