---
slug: bdd/story-readiness-board
title: Visualise your Product Backlog with The Story Readiness Board
authors:
  - matt
tags: [Agile]
---

There are lots of names for the conversations we have to prepare user stories for development. Some people hold _Three Amigos_ or _Specification Workshops_, some hold _Planning Poker_ or _Backlog Grooming_ sessions. Whatever you call this work, essentially you're trying to answer two questions:

-   _What do we want to make?_
-   _How will we make it?_

These two questions form a dynamic: when a clearly-defined requirement turns out to be complex to build, developers and product owners can usually negotiate to find a simpler _what_ that has a more straightforward _how_. Similarly, product owners may not be able to clearly define _what_ they want until they've had a chance to have it examined by the people who will think about _how_ to build it.

I recently watched a team having what they called a _Sprint Planning_ meeting. For this team, that meeting was their opportunity to have this conversation. As they laid out the stories for discussion--each on 5"x3" index cards--I came up with a suggestion.

<!-- truncate -->

Imagine two axes on the whiteboard:

![What to build vs How to build it](/img/blog/d8d554735be27fbcc0a4ead6153f94fbf17e13421568fc26ea15d823bd777765.png)

Now, put the stories that the business understand well to the top, and the stories that the developers have a clear idea how to build and test to the right. Note that this is not about estimating complexity or business value. This is simply about acknowledging how well we understand the problem and how to solve it.

Over time, stories will start out in the bottom-left corner, and gradually move up to the top-right as they become well understood and ready for development.

In the example above, Story B is well understood by the business, but the developers are still not sure how to build it. A [spike](http://www.extremeprogramming.org/rules/spike.html) would be a good idea for a story like this. Story C suffers from the opposite problem. The developers know how they'll implement it, but the product people can't decide on the details of what they want. [Three Amigos](http://www.velocitypartners.net/blog/2014/02/11/the-3-amigos-in-agile-teams/) or Specification workshops are a good solution here.

Doing this, we can see that it's a team effort to prepare stories - not just something for the business analyst to do in isolation. We can also see that it may take time to get a story ready. We can't tackle a batch of stories in a single meeting and expect them all to be ready by the end of that meeting. We might encounter questions that will need data, decisions or expertise from outside the room to solve.

Starting development on stories that are not well understood is a very common problem in teams that I visit. Perhaps by visualising the readiness of their stories like this, they can avoid it.