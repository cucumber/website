---
slug: bdd/example-guided-development
title: "Example-guided development: A useful abstraction for the xDD family?"
authors:
  - matt
tags: [BDD]
---

_Example-guided development_ is a suggested new catch-all term for the family of practices variously known as Test-Driven Development (TDD), Behaviour-Driven Development (BDD), Acceptance-Test-Driven Development (ATDD) and Specification by Example (SbE) that has been causing a bit of excitement in the agile community. This post aims to give you a summary of where this new term comes from and why it could make a useful addition to our industry's vocabulary.

<!-- truncate -->

## Origins of the new term

Late last year, [Daniel Terhorst-North](https://dannorth.net/) shared an insight about a way to describe this family of practices:

> If I had a time capsule I would go back and call it “Example-Guided Design”. TDD is a terrible name for a powerful design technique. BDD is a less terrible name. They both describe the same process, at both the code and feature level.
> 
> — Daniel Terhorst-North (@tastapod) [December 26, 2018](https://twitter.com/tastapod/status/1077965834297987072?ref_src=twsrc%5Etfw)

Daniel recently updated his thinking, moving from the word "Design" to "Development" with a nicely-articulated Twitter thread:

> So [@JoshuaKerievsky](https://twitter.com/JoshuaKerievsky?ref_src=twsrc%5Etfw)’s tweet about my use of “Example-Guided Development” (he says Design but I prefer Development) has caused some discussion. I figured I would try to explain my thinking and link to some of the discussion in a single thread, to attempt to tie it together. [https://t.co/UAdezmiGDX](https://t.co/UAdezmiGDX)
> 
> — Daniel Terhorst-North (@tastapod) [August 4, 2019](https://twitter.com/tastapod/status/1157988872233639941?ref_src=twsrc%5Etfw)

Daniel is someone worth listening to when he shares thoughts like this, and some significant people in the agile community have reacted to it.

## What people are saying

Earlier this year, [Joshua](https://twitter.com/JoshuaKerievsky) Kerievsky [posted a short video](https://twitter.com/JoshuaKerievsky/status/1103667131013488645?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1103667131013488645&ref_url=https%3A%2F%2Fcucumber.io%2Fblog) in support of the idea, with his own suggested iteration towards "Example-First Design".

Martin Fowler noted his concerns with proposing a rename:

> I prefer to not to rename concepts like this. It usually only adds confusion, and buries the contribution of the original people who worked on it.
> 
> — Martin Fowler (@martinfowler) [August 1, 2019](https://twitter.com/martinfowler/status/1156944960782028802?ref_src=twsrc%5Etfw)

Ron Jeffries, coming from a similar place to Martin, outlined his concerns with making this into "a thing" too soon by using capital letters in the name, with [this post](https://ronjeffries.com/articles/019-01ff/against-capitals/).

As I write this, Joshua has chimed in with [a blog post](https://medium.com/@JoshuaKerievsky/example-guided-a-brief-history-f004ca19a96f), getting behind the "Example-guided" terminology.

## Why a new name might help

It's tempting to dismiss all of this discussion as nothing more than a little storm in an agile tea-cup.

Yet I have lost count of the number of times people have asked me in a training class about the difference between TDD and BDD, or the difference between ATDD and BDD. And then there's [Specification by Example](https://twitter.com/jasongorman/status/1158263842973147136).

It's my view that all of these, when described or done by expert practitioners, are [almost indistinguishable from each other](https://www.infoq.com/articles/virtual-panel-bdd/). Yes, if you look closely enough, each of them has its own nuanced emphases and reason for having emerged into our vocabulary, yet the fact that we so-called experts use all these different names for these things is confusing for people with less context: it suggests there is much more difference between them than there really is.

After all, if they mean basically the same thing, surely there would only be one name for them, right?

To caricature some of these popular misconceptions:

-   TDD is just for engineers testing system internals; it's got nothing to do with the customer.
-   You're doing BDD as long as you use Given / When / Then ([Gherkin](https://cucumber.io/docs/gherkin/reference/)) scenarios, even if you're not going test-first.
-   ATDD is just about writing customer-facing acceptance tests.
-   Specification by Example is only an analysis technique; it's got nothing to do with test automation or programming.

All of these are commonly-believed and also, as far as I understand things, bollocks.

This is confusing for the vast majority of people who are writing software and have yet to experience the joy of working this way. We need to care about these people and make things as clear as possible for them.

It's completely understandable we've ended up where we are. It's all part of the messy human evolution of ideas and language, and that's a lovely thing. As Sandi Metz says, [duplication is better than the wrong abstraction](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction), but maybe it's time for a refactoring.

## "Example-guided" as a useful abstraction

Instead of thinking of example-guided development as a dazzling new name to eclipse all of the old ones, what if we think of it as [a useful abstraction](https://twitter.com/rebeccawb/status/1156983429537259520) that helps bring together all of the powerful, useful ideas that these practices have in common, and make them easier to understand for people who are learning?

Here are the three big ideas I think all of the xDD practices have in common:

1.  Expressing your latest understanding of the desired behaviour as automated examples that exercise the system.
2.  Using those automated examples to [guide](https://twitter.com/tastapod/status/1047787002660306944) the development of the system's code, by writing them first and responding to their feedback.
3.  Making a deliberate effort to involve business domain experts in the process.

What these practices have in common is vastly more significant than what sets them apart, and I'm grateful to Daniel for opening up this debate and giving us a chance to have this conversation.

## Going beyond examples

When I shared a draft of this post with [Nat Pryce,](http://www.natpryce.com/) co-author of [the brilliant "GOOS" book](http://www.growing-object-oriented-software.com/), he pointed out that a lot of the TDD he does these days involves using automated tests like [fuzz tests](https://en.wikipedia.org/wiki/Fuzzing), metamorphic tests, statistical sampling, randomised property tests and so on, as well as judiciously-chosen examples.

This kind of automation code (or, if you like, _test)_ is still written beforehand, and used to guide the change to the system, and domain experts are definitely involved in choosing what they do, but that discussion is not necessarily focussed around specific examples. A fuzz test would generate lots of examples, automatically, based on some rules about the system's expected behaviour and fire all of them at the system.

Does "example-guided development" still fit here? Or is it too limiting a name?

## What do you think?

I bloody love examples; I think they're super-powerful and very close to the heart of this wonderful way of making software. I honestly don't care all that much what we call this way of working for myself: I know it when I see it and I have a pretty good idea how to do it.

What I care about is making these ideas as accessible as possible to people, so that more teams can benefit from them. I think that a more intention-revealing name might help, but I'm probably not the right person to judge as I am surely suffering from [the curse of knowledge](https://en.wikipedia.org/wiki/Curse_of_knowledge).

So I plan to play with the name and see how it resonates with people. This blog post is the first step. What's your reaction? [Let me know](https://twitter.com/mattwynne/status/1163762236344733696).