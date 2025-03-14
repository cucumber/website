---
description: Frequently-asked questions
---

# FAQs

## Getting started and help

### How do I get started with Cucumber?

To get started from scratch, try the [10-minute tutorial](./guides/10-minute-tutorial.mdx).

You can read these docs to learn more about [Gherkin](./gherkin/reference.md), [Cucumber](./cucumber/api.mdx) and [BDD](./bdd/index.md).

### Where can I get more in-depth information?

If you'd like to go more in-depth, try one of the following:

- [Books](/learn)
- [Cucumber School (online training)](https://school.cucumber.io)

### Where can I get help?

For questions, you can [get in touch](/community) with the community.

## Installing and running Cucumber

### How do I install Cucumber?

How to install Cucumber, depends on which programming language you are using.

You can find information on how to install your flavour of Cucumber on the [installation](/docs/installation) page.

### Which version of Cucumber should I use?

In general, it is recommended to use the most recently released version of Cucumber for your programming language.
Each release will fix known bugs and/or add new features.

You can find the most recent version of Cucumber either in the [10-minute tutorial](/docs/guides/10-minute-tutorial), the [installation](/docs/installation) page or on [GitHub](https://github.com/cucumber).

### How should I upgrade to a newer version?

See our [guide to upgrading](./guides/upgrading.md).

### How do I run Cucumber?

For information on how to run Cucumber, see [Running Cucumber](/docs/cucumber/api/#running-cucumber).

### How do I run Cucumber from the CLI?

For information on how to run the Cucumber CLI, see [From the command line](/docs/cucumber/api/#from-the-command-line).

### What are the configuration options for running Cucumber?

For information about configuration options, see [Configuration](/docs/cucumber/configuration/).

## Usage and troubleshooting

### How do I call other steps or scenarios?
Each scenario should be *independent*; you should be able to run them in any order or in parallel without one scenario interfering with another.

Each scenario should *test exactly one thing* so that when it fails, it fails for a clear reason. This means you wouldn't reuse one scenario inside another scenario.

If your scenarios use the same or similar steps, or perform similar actions on your system, you can extract [helper methods](#how-to-use-helper-methods) to do those things.

#### How to use helper methods

Helper methods allow you to re(use) actions in steps and avoid writing multiple step definitions for similar behaviours. You write a helper method for actions like *logging in to your application* and then reuse them as a step or part of other steps.
This helps keep your tests clean, concise and maintainable.

To learn more about using helper methods, check out [Helper methods](/docs/gherkin/step-organization/#helper-methods) and [Grouping step definitions](/docs/gherkin/step-organization/#grouping-step-definitions).

### How detailed should my scenarios be?

Your scenarios should contain *just enough* information to describe the *behaviour* of the system.
They should not describe the implementation of your application, as that might change - causing your tests to fail.
They shouldn't contain too many details, as this will distract from the actual *behaviour*.

Let's illustrate this with an example.
Imagine we have a process where the user will be notified of the result.
At the moment that might be implemented as sending them an email, but that might change in the future (for instance, to a text message).
You can specify the step as follows:

```gherkin
Then the user will be notified
```

This way, if the implementation of how the user is notified changes, you will only have to change the step definition (or the helper method called by that step definition),
rather than the step itself **and** all underlying code.

For more information, have a look at [Writing better Gherkin](/docs/bdd/better-gherkin/) and/or [Writing maintainable automated acceptance tests (pdf).](http://dhemery.com/pdf/writing_maintainable_automated_acceptance_tests.pdf)

### How can I specify my test cases in Excel/CSV?

We advise you *not* to use Excel or csv files to define your test cases; using Excel or csv files is considered an anti-pattern.

One of the goals of Cucumber is to have *executable specifications*. This means your feature files should contain just the right level of information to document the expected behaviour of the system.
If your test cases are kept in separate files, how would you be able to read the documentation?

This also means you shouldn't have too many details in your feature file. If you do, you might consider moving them to your step definitions or [helper methods](#how-to-use-helper-methods).
For instance, if you have a form where you need to populate lots of different fields, you might use the [Builder pattern](https://en.wikipedia.org/wiki/Builder_pattern) to do so.

### How can I make Cucumber conditionally skip steps

Each scenario should test *one thing* and fail for one particular reason. This means there should be no reason to skip steps.

If there does seem to be a reason you'd want to skip steps conditionally, you probably have an anti-pattern.
For instance, you might be trying to test multiple things in one scenario or you might not be in control of the state of your test environment or test data.

The best thing to do here is to fix the root cause.

### How can I make Cucumber run the skipped steps after a failed step

Cucumber skips all steps after a failed step by design. Once a step has failed, the test has failed and there should be no reason to perform the next steps.
If you have a need to run the additional steps, likely your scenario is testing too many different things at once. Consider splitting your scenario into smaller tests.

### How do I take a screenshot after a (failed) step?

See our [browser automation guide](./guides/browser-automation.mdx).

### How do I share state between steps?

The JavaScript and Ruby implementations of Cucumber have the [world object](/docs/cucumber/state/#world-object) for sharing state between steps.

If you are using Cucumber on the JVM, you can use [dependency injection (DI)](/docs/cucumber/state/#dependency-injection) to share state between steps. If your project already uses a dependency framework supported by Cucumber (and/or you are familiar with one of them), it's probably easiest to use that framework. Otherwise, Picocontainer is the most light weight framework you can use.

## Cucumber-JVM

### Cucumber says my steps are undefined, but I have implemented step definitions!

If Cucumber is telling you that your steps are undefined, when you have defined step definitions, this means that Cucumber cannot *find* your step definitions.
You'll need to make sure to specify the path to your step definitions (glue path) correctly.

By default Cucumber-JVM will search in the package (or sub-packages) of the runner class.
You can also tell Cucumber-JVM explicitly which packages (and sub-packages) to search, with:
 ```java
 @CucumberOptions(glue = {"<package>", "<package>", "<etc>"})
 public class RunCucumberTest{}
```
 ```kotlin
 @CucumberOptions(glue = ["<package>", "<package>", "<etc>"])
 class RunCucumberTest
```

### Cucumber expressions vs regex

For more information about Cucumber expressions, see the section on [Cucumber expressions](/docs/cucumber/cucumber-expressions/).

You can still use regular expression (regex) also, but you cannot use Cucumber expressions and regular expressions in the same step definition.

Cucumber expressions were added in Cucumber-JVM version 3.0.0.

Note that a step definition using regex will start with `^` and end with `$`, while a step definition using Cucumber expressions will not.

An example using regex:
```java
    @Given("^today is ([0-9]{4}-[0-9]{2}-[0-9]{2})$")
    public void today_is(Date date) {
        calculator = new DateCalculator(date);
    }
```

An example using Cucumber expressions:
```java
    @When("I add {int} and {int}")
    public void adding(int arg1, int arg2) {
        calc.push(arg1);
        calc.push(arg2);
        calc.push("+");
    }
```

### How do I use lambdas to define step definitions?

To use lambdas to define your step definitions, make sure to use the `cucumber-java8` dependency, instead of the `cucumber-java` dependency.
You can find the required dependencies [here](./installation/java.md).

For an example on how to use them in Java, see this [code example](https://github.com/cucumber/cucumber-jvm/blob/main/examples/calculator-java8-cli/src/test/java/io/cucumber/examples/calculator/RpnCalculatorSteps.java). For Kotlin, see this [code example](https://github.com/cucumber/cucumber-jvm/blob/main/cucumber-kotlin-java8/src/test/kotlin/io/cucumber/kotlin/LambdaStepDefinitions.kt).

### Getting weird characters in the console output

If you are getting some weird additional characters in the output of your steps, like `[32m`, this is a problem with escaping ANSI color codes.

In order to prevent this problem, you can set the option `monochrome` to `true.

If you are using Eclipse, you might try this [plugin](https://marketplace.eclipse.org/content/ansi-escape-console).

### Arity mismatch

An arity mismatch exception (`cucumber.runtime.CucumberException: Arity mismatch`) indicates that the step does not provide the right number of arguments needed for the step definition.

### Duplicate step definition

A DuplicateStepDefinitionException indicates that you have defined the same step twice. First of all, Cucumber doesn't
distinguish between [keywords](./gherkin/reference.md#keywords) used with a particular step when
[matching steps](/docs/cucumber/api/#matching-steps). This means that `Given an order exists` and `Then an order exists`
will both match "an order exists". When providing arguments using Cucumber expressions and/or regular expressions,
multiple steps might match the same expression. Finally, this means that you cannot extend a class which defines step
definitions, as that will lead to duplicates.

### Does Cucumber-JVM support Kotlin?

You can use [Cucumber-JVM](https://github.com/cucumber/cucumber-jvm) to write step definitions in Kotlin. Please have a look at the [Kotlin examples for cucumber-jvm](https://github.com/cucumber/cucumber-jvm/tree/master/cucumber-kotlin-java8). 
At the moment it is not possible to generate step definitions in Kotlin. The reason for this is that there is no Kotlin Backend implemented. If this is something you'd like to work on, there is [a request for one](https://github.com/cucumber/cucumber-jvm/issues/1520). There is also a request for a [native Kotlin implementation of Cucumber](https://github.com/cucumber/cucumber/issues/331).

### Cucumber can't find my step definitions in IntelliJ IDEA

In this instance, you need to configure a new run configuration in IntelliJ IDEA. 
1. Click **Run** > **Edit Configurations** from the menu in IntelliJ IDEA.
2. Click the **+** icon on the top-left and type in _cucumber_. Select **Cucumber Java**.
3. Create the configuration according to the [Run/Debug Configuration Cucumber Java](https://www.jetbrains.com/help/idea/run-debug-configuration-cucumber-java.html) instructions from JetBrains. 
   
If IntelliJ IDEA doesn't recognize the package with step definitions, you can specify it manually by entering the package name in the Glue field, for example _stepdefs_.

For more information, please see [Run Cucumber Tests](https://www.jetbrains.com/help/idea/running-cucumber-tests.html) from JetBrains documentation.

### How do I fix an error where the stacktrace contains `Failed to instantiate public cucumber.runtime.java.JavaBackend` or `NoSuchMethodException`?

Check that the Cucumber version is the same for all Cucumber dependencies and make sure you only have the required dependencies. This means you need to ensure that you get the transitive dependencies that go with the version of Cucumber that you have. 

You can see all your Maven dependencies, including transitive ones by running `mvn dependency:tree`. 

If you're using any other library which also contains a dependency on Cucumber (a transitive dependency), try excluding
that transitive dependency in your pom file to ensure only one version of Cucumber is being referenced. Please refer to
the Maven [instructions for excluding dependencies](https://maven.apache.org/guides/introduction/introduction-to-optional-and-excludes-dependencies.html#dependency-exclusions) for steps on excluding transitive dependencies.
