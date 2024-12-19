---
slug: bdd/understanding-screenplay-part-3
title: "Understanding Screenplay (part #3)"
authors:
  - matt
tags:
  - Automation
  - BDD
  - Screenplay
image: /img/blog/ba888f19f6490ba028eed477d2e04f8fe389eb5426fea6928abe92086eb093ff.jpg
---

![](/img/blog/ba888f19f6490ba028eed477d2e04f8fe389eb5426fea6928abe92086eb093ff.jpg)

In the [previous post](/blog/bdd/understanding-screenplay-part-2) in this series, we explored the need for a new kind of pattern for organising our test automation code.

Now we’re going to work with this little codebase to refactor it towards the Screenplay pattern. By taking the existing code and shifting it, step-by-step, towards the pattern, my hope is that you’ll see how you could do this to your own code, should the fancy take you.

<!-- truncate -->

If you want to follow along, you can start from [this commit](https://github.com/cucumber-school/screenplay-example/tree/03c4b950503a4fd0dbdcb4496de747c981912f78) in the example code.

## Where do we start?

When refactoring to Screenplay, I’ve found it’s best to start with the smallest elements of behaviour first. The leaf-nodes, if you will. So we need to look for a helper method that just does one thing.

Let’s pick the [`createAccount` helper method](https://github.com/cucumber-school/screenplay-example/blob/03c4b950503a4fd0dbdcb4496de747c981912f78/features/support/world.js#L9) in the `DomainDriver`:

```javascript
createAccount({ name }) {
  this.app.accounts[name] = new Account({ name })
}
```

We call this method twice from our steps. First, we use it for creating accounts:

```javascript
Given('{word} has created an account', function (name) {
  this.createAccount({ name })
})
```

Then, later, we use it as part of signing up:

```javascript
Given('{word} has signed up', function (name) {
  this.createAccount({ name })
  this.activateAccount({ name })
})
```

We’ll work with the first instance to turn this into a Screenplay _interaction_. We’ll come back to the second one later.

Let’s inline the first instance so that…   

```javascript
Given('{word} has created an account', function (name) {
  this.createAccount({ name })
})
```

becomes…   

```javascript
Given('{word} has created an account', function (name) {
  this.app.accounts[name] = new Account({ name })
})
```

Now we have the code back up in the step definition, we can re-shape it into a Screenplay style.

## Extract interaction

We’ll put the code that does this work into an [arrow function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) which will become our first _Interaction_. The interaction takes all the dependencies and information it will need to do its work. In this case, it needs a reference to the `app` it will use to fetch the accounts, and the `name` of the actor.

To complete this first refactoring, we call the interaction function, passing the name from the step definition and a reference to the `app`.

```javascript
Given('{word} has created an account', function (name) {
  const interaction = ({ name, app }) => app.accounts[name] = new Account({ name })
  interaction({ name, app: this.app })
})
```

Now the code does the same as it did before. We can run `npm test` at this point to check all our scenarios are still passing.

## Actors perform interactions using abilities

Back in the [first part of this series](/blog/bdd/understanding-screenplay-part-1), we talked about the metaphor for Screenplay being actors on a stage.

In the metaphor, the actor is said to have _abilities_: the things it needs to be able to perform the actions it’s given. In practice, these are the dependencies that the interaction functions will expect to be passed, like a `browser` or a `database` connection. We’ll take these as we construct the `Actor`.

We’ll add a method that attempts to perform an interaction, by simply passing these abilities to the interaction and calling it:

```javascript
class Actor {
  constructor(abilities) {
    this.abilities = abilities
  }

  attemptsTo(interaction) {
    interaction(this.abilities)
  }
}
```

Perfect. Now, the actor has everything it needs to be able to attempt to perform an action.

Here’s how we use the shiny new `Actor` in our step definition:

```javascript
Given('{word} has created an account', function (name) {
  const interaction = ({ name, app }) => app.accounts[name] = new Account({ name })
  const actor = new Actor({ name, app: this.app })
  actor.attemptsTo(interaction)
})
```

To construct the actor, we’re creating a bare JavaScript object representing the actor’s abilities to pass to the constructor; in this case their `name` and whatever attributes are on `this`.

Then we call `attemptsTo` on the actor, passing it our interaction.

Again, we can run `npm test` at this point to check all our scenarios are still passing.

## Using a custom parameter type

Since the Screenplay pattern centres around these Actors, we don’t want to have to keep constructing them in our step definitions. Fortunately, Cucumber gives us [custom parameter types](https://github.com/cucumber/cucumber-expressions#parameter-types) that allows us to transform the text `Sue`, `Tanya` or `Bob` into an instance of `Actor` that represents them.

Here’s how we do that:

```javascript
const { defineParameterType } = require('cucumber')

defineParameterType({
  name: 'actor',
  regexp: /(Sue|Tanya|Bob)/,
  transformer: function(name) {
    return new Actor({ name, app: this.app })
  }
})
```

Now we can ask for an instance of `Actor` in our step definition, by using the new custom parameter type:

```javascript
Given('{actor} has created an account', function (actor) {
  const interaction = ({ name, app }) => app.accounts[name] = new Account({ name })
  actor.attemptsTo(interaction)
})
```

Our code is getting neater, but we’re not done yet.

## Naming our interaction

An idiom that Screenplay’s [original authors](https://twitter.com/AntonyMarcano/status/1182430414457233415) used was to adopt a [fluent interface](https://www.martinfowler.com/bliki/FluentInterface.html) for creating interactions. Let’s rename our interaction in this style, calling it `CreateAccount.forThemselves`. We do this by creating a plain JavaScript object, `CreateAccount`, with a property `forThemselves` that returns the interaction function expression:

```javascript
const CreateAccount = {
  forThemselves:
    ({ name, app }) => app.accounts[name] = new Account({ name })
}
```

Now we can use that in our step definition:

```javascript
Given('{actor} has created an account', function (actor) {
  actor.attemptsTo(CreateAccount.forThemselves)
})
```

In fact, [since we’re no longer using `this`](https://github.com/cucumber/cucumber-js/issues/467#issuecomment-172933376), we can now use an arrow function for our step definition:

```javascript
Given('{actor} has created an account',
  actor => actor.attemptsTo(CreateAccount.forThemselves)
)
```

## Wrapping up

Hopefully you can see things starting to fall into place. We’re delegating the work in our step definitions off to _actors_ and _interactions_. The _actors_ have _abilities_ that enable them to perform the interactions, but they’re completely decoupled from those interactions themselves. Each _interaction_ is a separate JavaScript function that takes the _abilities_ and does something to the system.

This decoupling enables this pattern to scale really well. We can add new interactions easily, without creating extra dependencies or bloated helper classes.

All of this leaves us with step defintions that are much more readable than before, with a clear mapping from the plain English in our Gherkin steps to the code that carries out the step.

The real beauty of the actor-interactions model is that interactions are _composable_: we can build up more interesting actions out of fine-grained interactions, like putting lego pieces together. That’s what we’ll look at [next](/blog/bdd/understanding-screenplay-part-4).

## In the _Understanding Screenplay_ series:

- [Part 1: Myths & Fundamentals](/blog/bdd/understanding-screenplay-part-1)
- [Part 2: Help! Maybe my helpers aren't so helpful after all?](/blog/bdd/understanding-screenplay-part-2)
- [Part 3: Refactoring to Screenplay](/blog/bdd/understanding-screenplay-part-3)
- [Part 4: Composing Tasks from Interactions](/blog/bdd/understanding-screenplay-part-4)

 