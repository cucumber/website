---
description: "New to Cucumber? Start here!"
---

# Overview

Cucumber is a tool that supports [Behaviour-Driven Development(BDD)](../bdd/index.md).
If you're new to Behaviour-Driven Development read our [BDD introduction](../bdd/index.md)
first.

## What is Cucumber?

Ok, now that you know that BDD is about discovery, collaboration and examples
(and not testing), let's take a look at Cucumber.

Cucumber reads executable specifications written in plain text and validates
that the software does what those specifications say. The specifications
consists of multiple *examples*, or *scenarios*. For example:

```gherkin
Scenario: Breaker guesses a word
  Given the Maker has chosen a word
  When the Breaker makes a guess
  Then the Maker is asked to score
```

Each scenario is a list of *steps* for Cucumber to work through. Cucumber
verifies that the software conforms with the specification and generates a
report indicating ✅ success or ❌ failure for each scenario.

In order for Cucumber to understand the scenarios, they must follow some basic
syntax rules, called [Gherkin](../gherkin/index.mdx).

## What is Gherkin?

Gherkin is a set of grammar rules that makes plain text structured enough for
Cucumber to understand. The scenario above is written in Gherkin.

Gherkin serves multiple purposes:

- Unambiguous executable specification
- Automated testing using Cucumber
- Document how the system *actually* behaves

![Single source of truth](/img/docs/single-source-of-truth.png)

The Cucumber grammar exists in different flavours for many [spoken languages](../gherkin/reference#spoken-languages)
so that your team can use the keywords in your own language.

Gherkin documents are stored in `.feature` text files and are typically
versioned in source control alongside the software.

See the [Gherkin reference](../gherkin/reference.mdx) for more details.

## What are step definitions?

[Step definitions](../cucumber/step-definitions.mdx) connect Gherkin steps to
programming code. A step definition carries out the action that should be
performed by the step. So step definitions hard-wire the specification to the
implementation.

```
┌────────────┐                 ┌──────────────┐                 ┌───────────┐
│   Steps    │                 │     Step     │                 │           │
│ in Gherkin ├──matched with──>│ Definitions  ├───manipulates──>│  System   │
│            │                 │              │                 │           │
└────────────┘                 └──────────────┘                 └───────────┘
```

Step definitions can be written in many programming languages. Here is an example
using JavaScript:

```javascript
When("{maker} starts a game", maker => maker.startGameWithWord({ word: "whale" }))
```
