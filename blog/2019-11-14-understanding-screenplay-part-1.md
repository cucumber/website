---
slug: bdd/understanding-screenplay-part-1
title: "Understanding Screenplay (part #1)"
authors:
  - matt
tags:
  - Automation
  - BDD
  - Screenplay
image: /img/blog/ba888f19f6490ba028eed477d2e04f8fe389eb5426fea6928abe92086eb093ff.jpg
---

![](/img/blog/ba888f19f6490ba028eed477d2e04f8fe389eb5426fea6928abe92086eb093ff.jpg)

Once you've decided to invest in test automation, sooner or later you'll begin to realise that you need to care about the maintainability of that test automation code just as much as you do about the implementation code itself.

For acceptance tests this problem is particularly acute: driving the application from its outside edges involves connecting to APIs, databases, web UIs etc., and this code can quickly get out of hand. Having tried several different approaches myself over the years, I've come to believe that [the Screenplay pattern](https://serenity-js.org/design/screenplay-pattern.html) is the best technique we have today.

But it doesn't get the attention it deserves.

<!-- truncate -->

If you've never heard of Screenplay, or have heard of it but never tried it, this series of posts is for you. They will be technical posts, with a good deal of code in them. The code will be in JavaScript, but I hope you'll be able to follow it if you're familiar with coding in any other language too.

In this first post I want to start by addressing a couple of popular misconceptions about the pattern, and give you a quick view of the fundamentals, to help frame the rest of the series.

## Myth #1: Screenplay is for testing screens

Many people I've talked to about Screenplay have heard the word "screen", or read the [blog posts contrasting it with the page object pattern,](https://www.infoq.com/articles/Beyond-Page-Objects-Test-Automation-Serenity-Screenplay/) and assumed it must be only for UI testing. That's not the case.

The [folks behind the screenplay pattern](https://twitter.com/AntonyMarcano/status/1182430414457233415) love a [metaphor](https://www.mitchlacey.com/intro-to-agile/extreme-programming/metaphor).

The metaphor here is not about screens from the user interface of your app, no! The metaphor is that each of your scenarios is like a little stage-play, with actors performing actions.

![](/img/blog/81c01a9df5b8a8d5503d974074f6f9271e899bd52eb1b4b93194f04bf98eb7b8.gif)

In fact, as we'll see through this series, the whole idea is to get away from thinking about interaction details, and focus on _behaviour_ and _intent._

In retrospect, maybe something like _Playwright_ might have made a better name for this pattern to avoid any confusion caused by conflated interpretations of the word "screen". Anyway, it's too late for that now.

So let's be totally clear. The Screenplay pattern does not have anything to say about whether you test through your UI or not. In fact, Screenplay can help free you up from this hideous bind, and give you more choices about where to connect to your app, _and_ keep your code better organised.

## Myth #2: Screenplay is over-complicated

I'll admit that this was my reaction at first. Even though I had a strong feeling there was something useful in this pattern, I found all the early examples I read to be quite hard to fathom, with a lot of new concepts to understand. It all made me feel a bit stupid.

Having got my head around it now, I can tell you for sure that there's a super-simple core idea here. Essentially, Screenplay is just the [command pattern](https://sourcemaking.com/design_patterns/command) applied in the specific context of organising test automation code.

In fact, I bet that if you've worked on a test automation suite of any reasonable size, you'll know exactly what over-complicated feels like. Massive classes heaving with too many methods. Awkward hierarchies of objects to try and avoid duplication. A maze of different files.

This pattern is a way out of that.

If I've done my job right, then by the end of this series you'll see that it's really not that complicated at all.

## The fundamentals of Screenplay

The fundamental element of the Screenplay pattern is an _Interaction._ Instead of having the code that interacts with our app littered around in helper methods or page objects, we separate and encapsulate each tiny granule of work as an individual object, each with the same interface: a single method that allows us to run that action against our app.

For example, you might have an Interaction like `InsertInto` which knows how to insert a record into an SQL database table. Or you might have an Interaction like `WriteTo` that can write to a text file on disk. Or an Interaction like `FillIn` which can put text into a field in a browser. Or an Interaction like `PostJson` that sends a payload to an API endpoint.

Then, we express the behaviour we want in our tests by creating lists of these Interaction objects that we want to execute, like:

```javascript
attemptTo(
  new InsertInto({
    table: "Accounts",
    data: { name: "Dave", password: "secret", company: "ACME" }
  }),
  new FillIn({
    field: "Username",
    with: "Dave"
  }),
  new FillIn({
    field: "Password",
    with: "secret"
  }),
  new ClickOn({ button: "Login" })
)
```

We can create factory DSLs to make this code read better:

```javascript
attemptTo(
  InsertInto.table("Accounts").data({ name: "Dave", password: "secret", company: "ACME" }),
  FillIn.field("Username").with("Dave"),
  FillIn.field("Password").with("secret"),
  ClickOn.button("Login" )
)
```

The sweet thing about breaking down our automation into these tiny pieces is that it allows us to compose these little Interactions into bigger chunks (called _Tasks)_ that make sense in our particular problem domain:

```javascript
attemptTo(
  CreateAccount.for("Dave").withPassword("secret"),
  Login.as("Dave").withPassword("secret")
)
```

The basic shift in thinking that you'll need to grasp in order to understand the Screenplay pattern is this: all of your automation behaviour is going to be organised into little elemental pieces instead of being in methods on helper classes.

Screenplay doesn't have to be something you can only introduce into your next greenfield project. We've successfully introduced Screenplay side-by-side with existing automation code, gradually refactoring towards it.

Over the course of this series of posts, we'll refactor take a typical Cucumber codebase and refactor it towards this pattern, extracting and develop our own little Screenplay library as we go. In doing this, you'll get a firm handle on how to apply the pattern yourself.

## In the _Understanding Screenplay_ series:

- [Part 1: Myths & Fundamentals](/blog/bdd/understanding-screenplay-part-1)
- [Part 2: Help! Maybe my helpers aren't so helpful after all?](/blog/bdd/understanding-screenplay-part-2)
- [Part 3: Refactoring to Screenplay](/blog/bdd/understanding-screenplay-part-3)
- [Part 4: Composing Tasks from Interactions](/blog/bdd/understanding-screenplay-part-4)

 