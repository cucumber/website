---
slug: bdd/understanding-screenplay-part-4
title: "Understanding Screenplay (part #4)"
authors:
  - matt
tags:
  - Automation
  - BDD
  - Screenplay
image: /img/blog/ba888f19f6490ba028eed477d2e04f8fe389eb5426fea6928abe92086eb093ff.jpg
---

![](/img/blog/ba888f19f6490ba028eed477d2e04f8fe389eb5426fea6928abe92086eb093ff.jpg)

[Previously](/blog/bdd/understanding-screenplay-part-3 "Understanding Screenplay Part 3"), we extracted our a simple implementation of the screenplay pattern from some existing Cucumber automation code, turning this:

```javascript
Given('{word} has created an account', function (name) {
    this.createAccount({ name })
})
```

…into this:

```javascript
Given('{actor} has created an account',
    actor => actor.attemptsTo(CreateAccount.forThemselves)
)
```

We’re going to continue this refactoring, looking at how we can compose granular interactions into _tasks_ that model higher-level concepts in our problem domain.

<!-- truncate -->

## Multiple interactions

The other place where we were using the `createAccount` method is in this step definition:

```javascript
Given('{word} has signed up', function (name) {
    this.createAccount({ name })
    this.activateAccount({ name })
})
```

In this case, creating an account is part of a bigger goal, or _task_: to sign up. First we create the account, then we activate it. Together, these two steps achieve that task.

We can use the same steps as last time to create a new interaction, `Activate.theirAccount`:

```javascript
const Activate = {
    theirAccount:
        ({ name, app }) => {
            app.getAccount(name).activate()
            app.authenticate({ name })
    }
}
```

We can change the step definition above to use the two new interactions:

```javascript
Given('{actor} has signed up', function (actor) {
    actor.attemptsTo(CreateAccount.forThemselves)
    actor.attemptsTo(Activate.theirAccount)
})
```

This is OK, but it contains some duplication that makes it less readable than it could be. What if we could do this instead?

```javascript
Given('{actor} has signed up',
    actor => actor.attemptsTo(
        CreateAccount.forThemselves,
        Activate.theirAccount
    )
)
```

Good news, we can! We just need to tweak our `Actor` to accept an array of interations:

```javascript
class Actor {
    constructor(abilities) {
        this.abilities = abilities
    }

    attemptsTo(...interactions) {
        for(const interaction of interactions)
            interaction(this.abilities)
    }
}
```

Now we can pass one or more interactions to our Actor and it will attempt each of them in turn.

## Composing a task

Let’s look at how we could model the _task_ of signing up in the Screenflow style.

In Screenplay, tasks are distinct from interactions because they do not interact directly with the system under test: intead, they attempt interactions, or other tasks.

In order for our actor to be able to perform tasks, we need to give it one new, special ability:

```javascript
class Actor {
    constructor(abilities) {
        this.abilities = {
            ...abilities,
            attemptsTo: this.attemptsTo.bind(this)
        }
    }

    attemptsTo(...actions) {
        for(const action of actions)
            action(this.abilities)
    }
}
```

We’ve added the Actor’s `attemptsTo` method to the set of abilities that will be passed to the tasks or interations being attempted. To reflect the fact that the parameters in the `attemptsTo` method could be tasks or interactions, we’re renamed them to the more general `actions`.

This enables us to build a new `SignUp` task:

```javascript
const signUp =
    ({ attemptsTo }) => attemptsTo(
        CreateAccount.forThemselves,
        Activate.theirAccount
    )
```

You might notice we haven’t used a capital letter to name this task. There’s nothing special about this, we just decided not to namespace this function in an object yet because we can’t imagine having any other variants of it. Perhaps someday we’ll want to be able to `SignUp.usingInvalidCredentials` but we can always refactor when the time comes.

Now we can use the task in our step definition:

```javascript
Given('{actor} has signed up',
    actor => actor.attemptsTo(signUp)
)
```

Nice. Again, we can see a clear mapping from the plain English in our scenario to the code we’re running in our automation layer.

The `signUp` task has a dependency on the two interactions, but it sits as an independent function, intead of adding more bloat to a helper class. As our codebase grows, we’ll see lots of these tiny little interaction functions growing, with tasks growing around them. Because it’s made of smaller, decoupled pieces, our automation code will be easier to change.

The separation between tasks and interactions gives us the potential to choose different sets of interactions to use with your tasks, depending on whether you want to interact with your app via the UI, or at a lower level. We’ll look at that in a later post.

## In the _Understanding Screenplay_ series:

- [Part 1: Myths & Fundamentals](/blog/bdd/understanding-screenplay-part-1)
- [Part 2: Help! Maybe my helpers aren't so helpful after all?](/blog/bdd/understanding-screenplay-part-2)
- [Part 3: Refactoring to Screenplay](/blog/bdd/understanding-screenplay-part-3)
- [Part 4: Composing Tasks from Interactions](/blog/bdd/understanding-screenplay-part-4)