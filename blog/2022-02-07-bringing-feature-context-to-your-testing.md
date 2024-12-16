---
slug: product/bringing-feature-context-to-your-testing
title: Bringing feature context to your testing best practices
authors:
  - name: Trevor Stuart
    title: Co-founder of Split.io
tags: []
---

At [Split](https://www.split.io/), we believe the primary unit of work for software teams is the feature.

[Feature flags](https://www.split.io/glossary/feature-flags/) are transforming the way we develop software. These sections of code govern the execution of a specific software feature, allowing that feature to be toggled on and off without a new deployment. Every tool we use to develop, test, and measure product changes must adapt.

Because of recent advances, feature flags allow releases to be more stable than ever. More teams are testing in production, as they are now able to roll back feature changes with the flip of a switch. Even with these advances, however, we still need to deploy best practices when testing our production changes, to protect users from a poor experience.

<!-- truncate -->

We need to bring testing to the forefront. By testing the multiple states of a feature flag directly, we can ensure the application will function properly as flags are toggled. In 2017, we [announced an enhancement](https://www.split.io/blog/feature-flags-java-testing/) to our Java client which allows you to programmatically change the treatments returned by the Split client. As a result, you can start a test by setting the specific feature flag and treatments you wish to test.

Today, we’re partnering with SmartBear to enhance those capabilities to work directly with Cucumber.

### How it works

Our focus is to let teams toggle flags as part of their automated acceptance testing process. With [Cucumber-Split](https://github.com/cucumber/split-java), you can toggle feature flags declaratively with tags, then verify the software works as expected.

Imagine we're building firmware for a coffee machine, and can deploy the new firmware over the internet with continuous deployment. The coffee machine is currently able to serve espresso and caffè lattes. The team is working on an experimental new feature to serve flat whites as well, available only to a small set of customers.

We introduce a feature flag to control whether flat whites are available. Only a few customers will have flat white functionality, but we want to test to make sure it works as expected.

Two scenarios verify options in the drink selection menu: one where flat white is not available (the feature flag is off), and another where it is (the feature flag is on).

```gherkin
Feature: Make Coffee

  @split[flat-white:off]
  Scenario: Display available drinks
    Given the machine is not empty
    Then the following drinks should be available:
      | name          | price |
      | espresso      |  1.90 |
      | caffe latte   |  2.30 |

  @split[flat-white:on]
  Scenario: Display available drinks (including the new experimental flat white)
    Given the machine is not empty
    Then the following drinks should be available:
      | name          | price |
      | espresso      |  1.90 |
      | flat white    |  2.10 |
      | caffe latte   |  2.30 |
```

When we run these two scenarios with Cucumber, we gain confidence that the flat white feature flag works as expected, both when it’s on and when it’s off.

To learn more, and read a step-by-step installation guide, follow the detailed instructions in the [Cucumber-Split GitHub repo](https://github.com/cucumber/split-java).

### Beyond testing solutions, the tools we use need to continue to evolve to be feature aware

New, more nuanced solutions allow us to keep work moving with high quality.

- Work management solutions: Need to associate work to be done to the feature flag gating the work.
- Deployment solutions: Need to automate the configuration of feature flags as part of your deployment process.
- Application-monitoring solutions: Need to see feature flag context to better understand transaction level data to answer the simple question: “Do users seeing the new feature have higher page load times?”
- Error-monitoring solutions: Need to see feature flag context to better understand error data to answer the simple question: “Do users seeing the new feature have an increased number of errors?”
- Product-analytics solutions: Require feature flag context to understand the impact of new features on the product experience and the business. “Do users seeing the new feature engage at higher rates?”

### Looking forward

As feature flags increase in adoption, our tools need to adapt and accommodate our evolving development practices.

The [feature delivery lifecycle](https://www.split.io/product/feature-delivery-lifecycle/) is like a flywheel for being intentional, moving fast in a safe way, and being keenly aware of the impact your work has on end users. Trunk-based development and the demands of the mobile-app ecosystem mean teams rely on feature flags to maintain speed, safety, and agility.

Make sure you stay feature flag aware.

