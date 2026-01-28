---
slug: open-source/cucumber-in-2025-year-in-review
title: "Cucumber in 2025: What We Shipped"
authors:
  - matt
tags:
  - Open Source
  - Year in Review
---

A year ago, Cucumber [returned to community ownership](https://cucumber.io/blog/open-source/cucumber-is-back-in-community-ownership) after a decade under corporate stewardship. So how have things been going?

Short answer: Cucumber is alive and well. We shipped features, handled infrastructure, stayed financially transparent, and nobody burned out. Here's the detail.

<!-- truncate -->

## What we shipped

**[Cucumber-JVM](https://github.com/cucumber/cucumber-jvm)**, led by Rien Korstanje, added [rerun file support](https://github.com/cucumber/cucumber-jvm/pull/3057) to the JUnit Platform Engine — one of our most requested features. We [deprecated the old JUnit 4 runner](https://github.com/cucumber/cucumber-jvm/pull/3016) in favour of the JUnit Platform Engine. If you haven't migrated yet, now's the time. We also added [Scenario.getLanguage()](https://github.com/cucumber/cucumber-jvm/pull/3124), a small but useful feature that enables locale-aware parameter transformers.

**[Cucumber-JS](https://github.com/cucumber/cucumber-js)**, led by David Goss, shipped [execution sharding](https://github.com/cucumber/cucumber-js/pull/2600) for parallel CI pipelines (contributed by the community) and [TypeScript config file support](https://github.com/cucumber/cucumber-js/pull/2709). David is rewriting the parallel runtime to unblock about three different features that don't play nicely with it today, and working on user-authored plugins support.

**[cucumber-node](https://github.com/cucumber/cucumber-node)** is a new project that's taking shape. Early adopters should have a good enough time with it already. More on this in the Spring.

**[Cucumber-Ruby](https://github.com/cucumber/cucumber-ruby)**, led by Luke Hill, continued steady work throughout the year.

## Formatters and reporting

The [HTML formatter](https://github.com/cucumber/html-formatter) got a redesign this year, across all platforms. We've been dogfooding the [messages protocol](https://github.com/cucumber/messages) for our first-party formatters, building up documentation and tooling as we go. That work will be available to users soon.

The Cucumber JSON report format had become an informal de facto standard over the years, but it diverged significantly across implementations. The JSON format is now in maintenance mode — the output will continue to be supported, but won't change. The long-term replacement is [Cucumber Messages](https://github.com/cucumber/messages/).

To help document these divergent dialects, we created [cucumber-json-schema](https://github.com/cucumber/cucumber-json-schema) with JSON schemas for the different implementation-specific variants. The Cucumber-JVM dialect is now fully tested and usable.

We also relaunched [Cucumber Reports](https://reports.cucumber.io/). David moved the service to AWS Lambda, saving about $30/month.

## Governance

We created a [governance repository](https://github.com/cucumber/governance/) and started defining how we make decisions. As a self-organized group of volunteers, we need clear processes so everyone knows how to contribute and who's responsible for what.

We offered commit privileges to regular contributors. [musicinmybrain](https://github.com/musicinmybrain) and [Code-Grump](https://github.com/Code-Grump) both joined as committers this year.

## Infrastructure

I migrated email to Fastmail, consolidated around `@cucumber.io` addresses, and we audited which domains we actually need to keep paying for.

Luke migrated our Java releases to [Sonatype Central](https://central.sonatype.com/search?q=cucumber) and set up Trusted Publishing for NPM. Less manual work, fewer credentials floating around. He also split up our Ruby release keys so we're not all sharing one master key. That took longer than expected, but it's the kind of security work that matters when millions of tests depend on your software.

## Collaboration

Gáspár Nagy and the [Reqnroll](https://github.com/reqnroll/Reqnroll) team contributed their reporting and HTML formatter components back upstream. We've been working with them to align our message formats. Christophe Coevoet from [Behat](https://github.com/Behat/Behat) and maintainers from [pytest-bdd](https://github.com/pytest-dev/pytest-bdd) have also been involved in discussions.

Christoph Läubrich, who's maintained [Cucumber-Eclipse](https://github.com/cucumber/cucumber-eclipse) for five years, worked with us to set up sustainable funding for that project through Open Collective.

## Newsletter

I rekindled the newsletter with [buttondown.email](https://buttondown.email/cucumber). We have 62,000 subscribers who haven't heard from us in years. If you're reading this in your inbox, welcome back.

## What we didn't do

We didn't finish the Markdown-in-Gherkin work that David started. We didn't apply for funding from GitHub's open source program, though we started the governance work that would make that possible.

We're all volunteers with day jobs. Some things didn't get done.

## The money

We run our finances transparently through [Open Collective](https://opencollective.com/cucumber/). Here's what 2025 looked like:

**Income: $11,782**
- SmartBear: $6,000 (who continue to support us after the transition)
- GitHub Sponsors: $4,048
- [EthicalAds](https://www.ethicalads.io/): $640
- Individual donors: $1,094

**Expenses: $12,373**
- Rien Korstanje: $6,853 (development work across the project, including Cucumber-JVM)
- Matt Wynne: $2,050 (project leadership and infrastructure)
- David Goss: $1,720 (hosting, website development and Cucumber-JS)
- Luke Hill: $1,235 (Ruby implementation work)
- Christoph Läubrich: $516 (Eclipse plugin maintenance)

We spent $591 more than we raised. The diversification is working — we're not dependent on any single source — but the budget is thin. Everything you see in this post was done on $12K and people's evenings and weekends.

If your company uses Cucumber, that $12K is keeping your test infrastructure maintained. Three companies sponsoring $200/month would double our budget and let us pay contributors properly for the work they're already doing. [Sponsor us through Open Collective.](https://opencollective.com/cucumber)

## Get involved

We meet every Thursday at 16:00 UTC (15:00 UTC from late March to late October) on [Discord](https://discord.gg/8YXBH8j74w). Meetings are 30 minutes. Anyone can join.

We need people who can:
- Maintain implementations in languages we don't cover well (e.g. [Python](https://github.com/cucumber/cucumber-python), [Go](https://github.com/cucumber/godog))
- Help with the [website](https://github.com/cucumber/website) and [documentation](https://github.com/cucumber/docs)
- Work on shared libraries ([Gherkin](https://github.com/cucumber/gherkin), [Messages](https://github.com/cucumber/messages), [Expressions](https://github.com/cucumber/cucumber-expressions))
- Answer questions on [GitHub Discussions](https://github.com/orgs/cucumber/discussions) and [Discord](https://discord.gg/8YXBH8j74w)

## Thanks

Rien, Luke, David, Björn, and Seb Rose showed up week after week and did the work. Gáspár and the Reqnroll team contributed upstream. SmartBear handed over the domains and infrastructure cleanly. Individual donors and sponsors kept the lights on.

If you've contributed code, answered questions, or sent us money — thank you.
