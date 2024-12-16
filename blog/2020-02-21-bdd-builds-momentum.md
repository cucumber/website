---
slug: bdd/bdd-builds-momentum
title: BDD builds momentum
authors:
  - seb
tags: [BDD]
---

Last week Elisabeth Hendrickson published a blog post called [Momentum > Urgency](http://testobsessed.com/2020/02/momentum-urgency/). Please go read it if you haven’t already. In the post she shared a list of observations that she had made when teams achieved a sense of momentum:

-   _Everyone on the team has a shared understanding of the big picture and what “good” looks like so they don’t burn cycles on unnecessary or non-useful work._
-   _The team breaks the work into small pieces (a couple days of work at most) that still represent incremental business value (even if not user-facing features)._
-   _The team embraces the technical practices necessary to ensure that the code they deliver does what they intended it to do._
-   _There’s an engaged and responsive product manager\* who is considered part of the team, and who does hands-on acceptance of the work._
-   _When the work is “accepted,” it’s done. The entire team can stop thinking about it._
-   _The work, and the status of the work, is visible to everyone._
-   _The team as a whole has a strong sense of partnership and trust, so the visibility never becomes a mechanism for micromanagement._

Reading the list, I realised that these were very similar to observations that we have made of teams that practiced BDD successfully.

<!-- truncate -->

[![](/img/blog/f0cc3c65859ca842c2d58cd31bd5fa40ee7f5594b4a71dd1dcbd151eb02affce.png)](/docs/bdd/)

## Everyone on the team has a shared understanding of the big picture and what “good” looks like so they don’t burn cycles on unnecessary or non-useful work

Teams that work in a behaviour-driven way will always adopt the core practice of [Discovery](http://bddbooks.com). No matter what technique they use for discovery (3 amigos, example mapping, requirements workshop), representatives of each discipline will collaborate in conversations to deliberately confront their collective ignorance about the next problem to be solved. This enables everyone to ask questions about the piece of work, learn how it fits into the evolution of the product, understand what it means for the team and the customer.

During discovery, the team will actively expose ambiguities and assumptions, working towards a deep, shared understanding. This is where the team develops their knowledge of the problem domain.

## The team breaks the work into small pieces (a couple days of work at most) that still represent incremental business value (even if not user-facing features)

It’s also during discovery that the team begins to explore the scope of a story. More often than not, we discover that the story is more complicated than it had seemed when we first looked at it. Using specific examples, we’re able to [decompose large stories](https://cucumber.io/blog/bdd/user-stories-and-bdd-part-3/) into smaller increments.

Because they’re regularly collaborating on discovery work to build shared understanding, they have an awareness of  the wider business context, allowing them to collaboratively prioritise each small increment. This regularly allows most of the business value to be delivered in a fraction of the time that it would have taken to deliver the whole story.

I’ve [previously written](https://www.slideshare.net/sebrose/user-stories-from-good-intentions-to-bad-advice-lean-agile-scotland-2019) about how the accepted definition of value is too narrow. Reaching a detailed understanding of everything that is bundled up in a user story gives the team the opportunity to really identify where there is value -- both user-facing and less obvious, foundational work that generates feedback and helps the team learn.

## The team embraces the technical practices necessary to ensure that the code they deliver does what they intended it to do

BDD is an outside-in approach to developing software. By specifying the expected behaviour and then automating that specification (and using that to guide development), the team can be confident that the software delivers the intended behaviour.

![](/img/blog/bda64ab7ca7e4e8709efa92e437e17946b32eb48bc611927e3014b9c120617e8.png)

This diagram shows how BDD incorporates TDD. They both ensure well documented, correct code, but TDD is focused on documentation at a level of detail that’s appropriate for developers.

## There’s an engaged and responsive product manager who is considered part of the team, and who does hands-on acceptance of the work

Software development is a collaborative activity. BDD makes it clear that business representatives (product management) must be active participants in the process. They need to collaborate during discovery and provide timely, actionable feedback during _formulation_.[![](/img/blog/7d39cb976cb8a2442dd6eb4ae9ecb72ef21441a0d08a4abb9a6d1d7052c3b357.png)](https://www.linkedin.com/pulse/bdd-tasks-activities-seb-rose/)

It’s impossible for a team to maintain momentum unless you can establish this kind of a working relationship. We often see teams where the desire for the benefits of BDD becomes a wake-up call to drive a change towards this kind of improved collaboration.

## When the work is “accepted,” it’s done. The entire team can stop thinking about it

Once the team has automated the specification and delivered the implementation, it’s ready to be accepted by the business. BDD makes this process less onerous, since the business has been closely involved in crafting the specification which is now _running green_.

There’s nothing specific to BDD that addresses how to establish final acceptance, but what we typically see in practice is that, when teams have made a deliberate effort to collaboratively specify each small increment of work before starting it, they are able to trust that it’s done as soon as their scenarios are passing. That doesn’t mean that things can’t change, or that things don’t still sometimes get missed, but when they do that will be a new piece of work, rather than a blame-game of “is this a bug or a new story?”

## The work, and the status of the work, is visible to everyone

Automation tools that support BDD complement other ALM tools to make the status of work more visible. Cucumber produces HTML reports that show what functionality is working, what’s in progress, and what’s currently broken. These reports can be read and understood by all stakeholders.

## The team as a whole has a strong sense of partnership and trust, so the visibility never becomes a mechanism for micromanagement

We’ve heard first-hand from teams that adopt BDD that it’s created higher levels of empathy between the different roles on a team. Working together to share knowledge, embrace and confront their collective ignorance, and find consensus on the smallest, most valuable piece of work to do next builds a strong bond across the disciplines.

## Building momentum

Continuous value delivery. Sustainable pace. Responsiveness to change. These are just some of the benefits we hope to gain from working in an agile way.

In [her post](http://testobsessed.com/2020/02/momentum-urgency/), Elisabeth captured a brilliant insight by focusing on the observed behaviours of teams that have built the momentum to deliver these benefits. I hope that I've shown how the practices of BDD are well aligned with those observations and can therefore contribute to your teams building their own momentum.

