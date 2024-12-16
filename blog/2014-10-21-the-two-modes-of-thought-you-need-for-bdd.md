---
slug: bdd/the-two-modes-of-thought-you-need-for-bdd
title: Divergent and convergent thinking in BDD
authors:
  - matt
tags: [BDD]
---

According to [E. F. Schumacher](http://www.goodreads.com/book/show/313765.A_Guide_for_the_Perplexed), there are only two kinds of problems in the world:

-   Divergent problems
-   Convergent problems

Choosing a new car is a convergent problem. You only need one new car. There are lots of options, and the solution is to whittle down those options until you've found one that meets your needs. Once you're there, problem solved.

If you've never bough a car before, you'll need to research all the different options available. You might also want to consider alternative modes of transport - why do you even need a car? Could you make do with a bicycle or public transport? This is an example of divergent thinking.

<!-- truncate -->

Notice how I need both types of thinking at the appropriate stage: First I generate options with divergent thinking, then I narrow them down with convergent thinking. If I apply the divergent mindset to the problem for too long, I would become overwhelmed by choices, and might never actually solve my problem. If I approached the problem with a convergent mindset from the beginning, I might miss out on considering valuable alternatives.

On final day of CukeUp NYC this year, [Paul Rayner](http://www.virtual-genius.com/) ran an excellent morning workshop that focussed on using BDD to explore and discover hidden requirements. In the afternoon, [George Dinwiddie](http://blog.gdinwiddie.com/) and I ran a session on distilling the essence of scenarios.

What struck me was how these two sessions perfectly encompassed these two modes of thought, and how both are necessary to do BDD.

## Exploration by example

First, with your divergent mindset, you collaboratively explore the problem domain with concrete examples. You're trying to discover as much as you can about your assumptions and lack of knowledge: your ignorance. Being very concrete is vital at this stage: who the user is, what they're doing at the time, even how old they are, or whether they're in a hurry. These kinds of details can all help you to visualise the scenario, and that in turn helps you to see other scenarios.

At this stage, Liz's [context and outcome questions](http://lizkeogh.com/2011/09/22/conversational-patterns-in-bdd/) can also help to discover new scenarios:

> Is there any other context which, when this event happens, will produce a different outcome?

We can also find missing details in the existing scenarios:

> Given this context, when this event happens, is there another outcome that's important? Something we missed, perhaps?

At this stage, I'll most likely be working with pieces of paper or a whiteboard, trying to keep the process very lightweight and let the ideas flow.

## Converge on a specification

Once you have one or more very concrete examples, and you've decided you want to implement the behaviour they describe, you switch into the convergent mindset. Now your task is to find the most concise way to describe this behaviour without losing its essence. Why? Being concise is important for long-term value. A scenario with too much detail can be hard to change and brittle, but also confusing for the reader. Details that once helped you to imagine yourself in the user's shoes now become distracting clutter.

It's time to look for rules that underly the examples you've been discussing, and to find the best choice of words to describe your understanding of the problem domain.

It's also time to choose whether each example needs to remain documented in Gherkin, or whether it would be better moved down the pyramid to a unit test.

## Both modes matter

I need both modes of thought to do BDD: divergent thinking to explore the problem and discover scenarios, then convergent thinking to turn those examples into an executable specification.