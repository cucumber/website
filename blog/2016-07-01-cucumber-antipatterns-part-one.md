---
slug: bdd/cucumber-antipatterns-part-one
title: "Cucumber anti-patterns (part #1)"
authors:
  - name: Theo England
tags: []
---

This post outlines our favourite Cucumber anti-patterns. There are many ways to use tools poorly and, as the core team behind Cucumber, we've picked up our fair share of bumps and bruises. Hopefully by passing on our own experiences, we can help you steer clear of the most common pitfalls.

Along the way we'll also clarify why these patterns can be so damaging and suggest alternatives we've seen work while [training and coaching teams](/training) around the world.

This is a two-part blog post based on a conversation between Steve Tooke, Aslak Hellesøy and Matt Wynne on [The Cucumber Podcast](https://itunes.apple.com/gb/podcast/cucumber-podcast-rss/id1078896635). You can skip ahead to [part two here](/blog/2016/08/31/cucumber-anti-patterns-part-two).

<!-- truncate -->

First up...

## Writing the scenario _after_ you've written the code

Let's step back a bit before we start. Why should you write your scenarios before any code is written? The blunt answer is: Cucumber is not a testing tool.

Yes OK, it _is_ a testing tool, but first and foremost it is a tool to test your understanding of the problem domain. Only once this test passes, which means everybody agrees on what you’ve said in your Gherkin scenario, can you start implementing.

Writing the scenarios before the code encourages people with different perspectives to be involved in defining the behaviour of the software. A product owner or a business stakeholder will read it with one perspective, a developer with another one, and a tester with a third. It makes it easier for people to figure out whether they disagree about something or whether there's uncertainty.

Having that very concrete description of the example before you even start developing helps you figure out if everybody has the same understanding.

![](/img/blog/72eaf538afa2c1bc9f07fa9f639586548aceb48cbd4595d221844fcc91274df1.jpg)

## BA/Product Owner creating scenarios in isolation

If your business analyst or product owner writes all the Gherkin on their own, perhaps in a JIRA ticket, you will be missing out on the whole team’s input.

What you end up with is Gherkin that doesn't represent everybody's common understanding, and you miss the opportunity to thrash out and expose all of those differences.

Scenarios written by non-technical team members very often can't be automated without being changed. And once that happens, they stop being the thing that the product owner believed in.

They might have sat and wrote out those words but now the Gherkin says something different, and pretty soon it just becomes a thing that belongs to the testers or the devs because the product owner's like, "Well that's not what I said, so this is something else."

## Incidental details

Rambling long scenarios with lots of incidental details can ruin a good story. Often times the scenarios are written as a test, rather than documentation, which can lead to fluffy scenarios.

An example of this might be:

```gherkin
Given I sign up as "Matt"
And my password is "password"
And my password confirmation is "password"
And I have deposited "$60" in my account
And I have deposited "$40" in my account
When I check my bank balance
Then my bank balance is "$100"
```

The purpose of the scenario is to check the bank balance, and it isn't really relevant what the password is. But people fall into the trap of thinking they need to fill something in on the password form, and the way they wrote the scenario was thinking about it like, "I'm scripting a test. This is what I would type in if I was doing a manual test, so I've got to put that in my Cucumber scenario”.

The lesson here is to focus on the behaviour of the story and steer clear of incidental details which don’t contribute anything.

## Testing several rules at the same time

A related anti-pattern is testing more than one outcome. Testing multiple things can blur the essence of your scenario and lead to uncertainty and misunderstandings.

Here the litmus test is to take a scenario, show it to someone who isn't familiar with the domain and ask if they can explain its functionality. If the scenario doesn’t describe the behaviour of the system, you can’t use this as documentation and therefore can’t collaborate effectively on its outcomes.

Going back to the bank/password example, what exactly are we trying to test here? You would have to guess right. Are we testing passwords or are we testing the bank balance? Or we're testing both?

## Scenario with either a bad name or no name at all

Often a good place to sum up the essence of a scenario is in the scenario title. But if you miss it off or if you've copied and pasted a scenario from the one below, it can obscure the meaning of the scenario.

Try to avoid boring and non-specific titles such as “Sign Up, Log In, Visit Balance Screen, and Review Balance”.  
For our own development work on [Cucumber Pro](/pro), we like to use the Friends episode naming convention for thinking about the name of the scenario, where you go, "This is the one where the balance is positive," or, "This is the one where the balance is over my overdraft". And in the Given, When, Then, that's when you go on into exactly how you're going to check for that behaviour.

There’s some useful tips about this in [Matt’s Example Mapping post.](/blog/2015/12/08/example-mapping-introduction)

## Adding pointless scenario descriptions

![](/img/blog/6e1c32e6b6f341f9c4989cfc2989933283f8717a874305c3c98447d4c21c520b.jpg)

Descriptions such as “As a user, I want to check my balance, so that I know what my balance is” doesn’t give you any extra information about the user.

Instead, focus on the business rules.

For example, one rule could be after you've made a withdrawal, the withdrawal should show up in your list of transactions, and then you could have an example to illustrate that.

It’s best to think of the feature file as a living document so when you talk about the story or the feature, you know that there are some business rules, you've come up with some examples, but you've also identified that there's some uncertainty.

It can be really good to write those down in the front matter as well, and check that in version control. So, "This is our current understanding of this feature; we know this stuff, we've got these acceptance tests, but we also know that we don't know this other stuff”.

## Next time

Folks out there, if you're doing these anti-patterns, don't worry! We've all done them, you live and learn. Share your anti-patterns stories in the comments below.

[Read part two of this blog post](/blog/2016/08/31/cucumber-anti-patterns-part-two).