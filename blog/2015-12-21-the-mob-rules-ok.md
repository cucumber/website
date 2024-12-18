---
slug: bdd/the-mob-rules-ok
title: The mob rules, ok?
authors:
  - name: Steve Tooke
tags: []
image: /img/blog/b3353410eecaafbb4d16b8a797c1bb47c77e369901ccb98fd3386e847a354477.jpg
---

![](/img/blog/b3353410eecaafbb4d16b8a797c1bb47c77e369901ccb98fd3386e847a354477.jpg)

_This article was [originally published here](http://tooky.co.uk/the-mob-rules-ok/)._

During the last 6 weeks or so, I've had the pleasure to be working on [Cucumber Pro](/pro) with the team at [Cucumber Limited](/). One of the key thing making this such a good experience has been the way we've been working: Mob Programming.

<!-- truncate -->

## What is mob programming?

> All the brilliant people working on the same thing, at the same time, in the  
> same space, and on the same computer — [@woodyzuill](https://twitter.com/woodyzuill)

Mob Programming is a term coined by Woody Zuill. It describes a practice that he and his team "discovered" while he was coaching at Hunter Industries. It's a way of working where the whole team gather around a single computer and work on a single problem together. The team take turns to "drive" the computer, while the other members of the team help to think through the problem and find solutions.

## A remote mob

The Cucumber Pro team works remotely. We are geographically distributed (although we are usually in similar timezones). Obviously this makes sharing a computer more of a challenge, but we've found a couple of solutions that are working well for us.

The first thing is that the person driving always works on their computer. This allows everyone to use the tools they are most comfortable with and saves them from them having to deal with lag or other connection problems on input.

To share the driver's computer with the rest of the team we have mostly used [Screenhero](https://screenhero.com/). Screenhero allows us to share a single computer with several other participants (I think we've had up to 5 or 6). Unlike other screensharing technology it also gives each user a mouse pointer. This is _especially_ useful when trying to point out where that misspelt variable is hiding. Screenhero also allows the navigators to type, which helps from time to time.

While Screenhero does provide a voice channel, we generally prefer to use [Google Hangouts](https://hangouts.google.com/) for voice and video. Partly because the sound is better, but really because being able to see each other is great!

We haven't found a really good solution for a shared whiteboard yet. Most of the drawing we've done has been on paper and shared with photographs. We've also experimented with an [iPEVO camera](http://www.ipevo.com/prods/Point-2-View-USB-Camera). This lets you share a drawing live as it happens. We've used it point to paper on the desktop, and with a whiteboard. This is a bit more of an interactive experience, but it still only allows one person to draw.

## Mornings only

We decided that the Cucumber Pro mob would only convene in the mornings. This gives us 3.5 focussed hours where we all work together. These morning mob sessions are where we take design decisions. We discuss the work that's to be done. Talk through the business, and find examples that we can use to illustrate them in our Cucumber features. Its also in these sessions that we write most of the code.

Afternoons are more free-form. For a start everyone in the team has other responsibilities. So this leaves space for this work. Dealing with email, running a business, open-source, etc.

But... it also leaves space for people to think, to read, to experiment, to fix little niggles, to automate tiresome tasks. This space is _invaluable_. We liberally use TODOs while we are mobbing. We use them in the same way we might note something we want to address later on an index card. Fixing TODOs in the afternoon has been quite common. Sometimes this is just tidying up and getting work out of the way, so the mob can focus on bigger tasks. Sometimes this is a spike to try out some idea before presenting it back to the mob.

## Pull requests

We use [Github's](https://github.com) [pull requests](https://help.github.com/articles/using-pull-requests/) in a couple of different ways. Firstly, any work that people undertake outside of the mob (in the afternoon), is almost always done on a pull-request. This allows us to use GitHub as the communication channel about the code, and it means that work that is done individually is seen by someone else before its merged.

We have also been using pull requests for work-in-progress. Not everyone on the Cucumber Pro team is available everyday. There's often someone away delivering training or consulting, or at a conference. Again pull requests let us use Github's great tooling for seeing changes to the code over time, and having asynchronous discussions with those who weren't able to join the mob.

## Daily retrospective

We end every mob session with a short retrospective. We ask ourselves two questions:

-   What have we learnt?
-   What puzzles us?

We use this as a chance to reflect on the work we have done, and how things went. We try to recognise things that have gone well so we can do more of them, and recognise problems early so that we can head them off.

We also spend a few minutes thinking about the next steps, where the mob's focus should go next.

We write all of this up in a file at the root of the project and commit it to the repository. This is helpful for the team members that weren't in the mob session. It helps to share what we've learnt and our questions with them. It also marks where the mob finished that day.

We're currently adding each retrospective at the top of a single file, and maintaining a history. I'm confident that it will be useful to reflect back on how our thoughts and feelings about the project change over time.

## Joy

Mob programming is a great way to build a team. I feel that we get a real sense that we're working together towards a common goal. We solve problems together. We learn together and we teach each other. By reflecting on each session, we learn more about how each of us likes to work, and how we can all help each other.

The remote working lets us all be comfortable in our surroundings. We've had [Matt](https://twitter.com/mattwynne) join for a few hours while he's been in [Australia](/events/cukeup-australia-2015). The last couple of days [Aslak](https://twitter.com/aslak_hellesoy) has been in the mob, with his new baby nestled in a sling — there is something really calming about hearing contented baby gurgles while your working.

Remote collaboration is quite an intense way to work. I've done quite a lot of remote pair programming and it can be quite draining. Keeping the afternoons free really helps to combat this.

Working in the mob everyday is fantastic. I look forward to them because they're fun, and I feel like we're growing as a team every day — but the afternoon space is just as important.