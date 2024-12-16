---
slug: bdd/what-is-good-code
title: What is "good code"?
authors:
  - matt
tags: []
---

I don't know if anyone's counting, but the human race must be creating [millions of lines of code](https://en.m.wikipedia.org/wiki/Software_engineering_demographics) every day. It seems to me it would be useful to think about how we judge the value of that code.

I'll run through some of the [common answers](https://thoughtbot.com/blog/what-is-good-code) [out there](https://developerzen.com/how-do-you-define-good-code-c8a383c207a4) to this question and offer a couple of my own. I've presented them in a rough priority order, starting with the most fundamental, but ending with perhaps the most important.

<!-- truncate -->

## Good code works

As a bare minimum, code needs to do what it's expected to do, at least most of the time. If something goes wrong, it needs to communicate with clear error messages for maintainers so they can deal with the problem.

But is this enough? Should we expect more from our code than basic correctness?

I think so.

## Good code looks nice

It's an axiom in our industry that code is [read many more times than it's written.](https://www.python.org/dev/peps/pep-0008/#a-foolish-consistency-is-the-hobgoblin-of-little-minds) Formatting code neatly, and even thinking about the simplicity, elegance or beauty of a solution are surely important attributes for making code good.

But is this isolated context enough to help us decide whether code is good? Is it possible to have code that is "too pretty" for the problem being solved?

I think so.

## Good code is malleable

As well as being read more often than it's written, code generally needs to be changed lots of times after it's first written. That's why we call it _soft_ware.

This is where practices like TDD and the refactoring it facilitates come in. It's where we get design patterns, SOLID principles and so on. Attributes like simplicity, elegance and beauty can be applied to the overall design of interacting objects or micro-services, as well as the code within them.

Flexible code buys us options for the future. If we anticipate that the needs of our users will grow and change, it's worth paying for these options so we can respond to those changes quickly.

But is this isolated context enough to help us decide whether code is good? Is it possible to over-engineer solutions that are "too flexible" for the problem being solved?

I think so.

## Good code does something valuable for people

Now we're getting somewhere.

All of that beauty and elegance is nothing but an indulgence if the code isn't doing anything useful for people. This is where practices like BDD, eXtreme Programming, Continuous Delivery and Lean Startup help us to iterate rapidly with real users, learning about what they value and how they see the world, and building models in our code to match.

Knowing our users, and the business context we're operating in, helps us decide how elegant or flexible our code needs to be. Sure, it can be fun and rewarding to practice refactoring on a pet project with no users, but as professionals we need to be aware whether we're building a garden shed or a skyscraper, and apply the appropriate amount of rigour and discipline to our work.

In fact, given how fast things are changing, we should expect that our code will always be a bit messy; never quite good enough.

But even if we're keeping our users happy, is this enough to help us decide that our code is good? Is it possible to build code that is malleable and valuable but is still "bad"?

I think so.

## Good code has an ethical impact

In her stirring [keynote at CukenFest 2018](https://www.youtube.com/watch?v=x7gyMvU7RKs), Ulrika Malmgren reminded us of our responsibility as software professionals to consider the impact of the code we're writing on society at large.

We're in a privileged position in our industry, with well-paid jobs and plenty of demand for our skills. We have choices about where we work.

Our software is [subverting election results](https://www.youtube.com/watch?v=iX8GxLP1FHo), creating [addiction](https://www.theguardian.com/us-news/2019/may/03/youtube-addiction-mental-health), [invading people's privacy](https://www.bloomberg.com/features/2018-palantir-peter-thiel/) and [making racist decisions](https://www.newscientist.com/article/2166207-discriminating-algorithms-5-times-ai-showed-prejudice/). We might not all agree on our politics or ethical boundaries, but we can't ignore the fact that much of our code _is_ political.

It's shaping our societies.

I never bought the moral argument for clean code, but I do believe there's a moral argument for _good_ code. You can refactor and craft and clean your code all you like but, depending on the ultimate impact of that code, you might be doing more harm than good.