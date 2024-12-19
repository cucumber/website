---
slug: open-source/tackling-structural-racism-and-sexism-in-open-so
title: Tackling structural racism and sexism in open source
authors:
  - matt
tags:
  - Anti-Racism
  - Feminism
  - Open Source
  - Racism
  - Sexism
---

One of the goals the Cucumber team have set ourselves this year is to increase the number of recent, regular contributors who are non-white or non-male from 0 to 2. This post describes **why** we want to do this, **what** we’ve learned so far about the systemic barriers that keep the community of people who contribute to open source so [utterly imbalanced](https://www.wired.com/2017/06/diversity-open-source-even-worse-tech-overall/), and outlines **how** we’ve started tackling the problem in our own project.

<!-- truncate -->

## Why does this matter?

In 2017, [GitHub ran a survey of 5,500 of its users](https://opensourcesurvey.org/2017/#insights). The data shows that people of colour and women are disproportionately not contributing to open source:

_Only **three percent** identified as female and one percent as non-binary. According to [Bureau of Labor Statistics](https://www.bls.gov/cps/cpsaat11.htm), about **22.6 percent** of professional computer programmers are female._

_About 16 percent of respondents said they belonged to ethnic or national groups that are in the minority in the country they live in. Black, Asian, and Latino programmers account for a total of about 34 percent of programmers in the US, according to the bureau._

_(Source: [Wired.com](https://www.wired.com/2017/06/diversity-open-source-even-worse-tech-overall/))_

![charts showing gender and racial balance in tech and open source](/img/blog/8a3972687dc096f53626f6293f64a7480b6b6751dab00d0911bd7c9b76159be5.png)

That’s a massive number of people who are missing from our open-source communities.

In purely objective terms, this presents a huge opportunity for open source projects that are willing to put in the work to make their projects more welcoming. There’s an untapped pool of talent here, and projects that seek and respond to feedback from under-represented minorities will benefit from having more people making more contributions.

I also think there’s a moral argument. [Reni Eddo-Lodge describes structural racism](https://www.theguardian.com/world/2017/may/30/why-im-no-longer-talking-to-white-people-about-race) as:

_Structural racism is dozens, or hundreds, or thousands of people with the same biases joining together to make up one organisation, and acting accordingly. Structural racism is an impenetrably white workplace culture set by those people, where anyone who falls outside the culture must conform or face failure. “Structural” is often the only way to describe what goes unnoticed – the silently raised eyebrows, the implicit biases, snap judgments made on assumptions of competency._

On that basis, it’s fair to say that open-source software has a problem with structural racism and, if you swap “white” for “male” in that quote, [structural sexism](https://peerj.com/preprints/1733/?td=sd) too. The reason we have so few women and people of colour in open source is because of things that we white men are doing, deliberately or not, that makes this an unwelcoming environment for those people.

Structural racism isn’t the responsibility of people of colour to fix. As the people who have enjoyed the privilege of being white and male all our lives, we’re the ones with the power to change the structure. It’s up to us to make it work for everyone, not just ourselves.

## Open Source is intimidating

After this [initial tweet](https://twitter.com/mattwynne/status/1401937810420953090), I embarked on a listening exercise, going to diversity meetups and having virtual coffees with people to hear about their experiences contributing to open source, about what had put them off. I took some notes in [this Miro board](https://t.co/WODCeiVhPO?amp=1).

A common theme was the feeling of intimidation. The research showing that [women's contributions are more likely to be scrutinised than men's](https://peerj.com/articles/cs-111/). The knowledge from experience that the expectations for minorities are higher. The risk that my livelihood might even be in jeopardy if I am criticized in public.

I learned about gatekeeping, the way that even well-meaning white folks will instinctively make all kinds of passive-aggressive moves to keep people who aren't like them out of their spaces, so they don't have to feel uncomfortable.

Then there is the feeling like an imposter, that everyone else is so much more experienced that you, so competent. I remember this feeling too from when I took my baby steps in open source many years ago. I can only imagine how much this is amplified by being from a less privileged background, with years of bitter experience [dealing with microagressions](https://www.olopua.com/?q=content/racism). Finding the right community where you fit in and will be welcomed is super important.

There's not knowing where to start: Cloning an open-source codebase and wandering around it can be like turning up in a new city. Hopefully there are at least some signposts, but you're going to be lucky to find a decent map, let alone a tour guide.

Very often (and I know this has been the case for Cucumber) so called "[good first issues](https://kentcdodds.com/blog/first-timers-only)" are anything but "good". They still require a lot of context to be able to figure out and hack on. Even if the maintainers would be happy to answer questions if people asked, that might not be obvious.

The value of time also came up. A kid in college whose parents are wealthy can afford to spend their evenings contributing to open source for free. Someone less privileged might be busy flipping burgers to cover their tuition fees.

## The impasse

All in all, I realised we're at an impasse: As open-source maintainers, we're never going to get feedback about how to be more welcoming, because the very nature of the problem is that people are too intimidated to show up, let alone give us that feedback.

From the inside of a project, with the [curse of knowledge](https://hbr.org/2006/12/the-curse-of-knowledge) it's hard to know what needs to be explained or documented, what context is missing from a ticket.

I know that these feelings of intimidation or imposter syndrome are not limited to people from minority backgrounds. Opening up this feedback loop and starting to resolve these issues is going to benefit everyone.

So where do we start?

## New contributors ensemble

It’s early days for this initiative. Our fledgeling strategy is to focus on the experience of new contributors, to open channels for feedback as well as providing coaching and mentoring for anyone who is curious about taking their first steps in open source.

One of the things we’re trying that feels right is the **new contributors ensemble**.

A group of willing volunteers who are keen to take their first steps in open source, and don’t look like me, are meeting on Fridays for an ensemble/mob programming session. We’ll be working together to fix one of Cucumber-JS’s [good first issues](https://github.com/cucumber/cucumber-js/contribute), streaming live on [https://www.twitch.tv/cucumberbdd](https://www.twitch.tv/cucumberbdd) from [16:30 UTC](https://www.timeanddate.com/worldclock/fixedtime.html?msg=Cucumber+new+contributor+ensemble&iso=20210806T1630&p1=1440&ah=1&am=30).

Like a usability test, this is a great way for me to see, in real-time, what gets in the way of a newcomer becoming a contributor. We had one a couple of weeks ago which everyone thoroughly enjoyed, but I forgot to hit the record button so you'll have to take my word for it! I'll try and be better set up this time.

We’d like to make this a regular event, with lots of people showing up to learn and teach each other about contributing to open source projects, not necessarily Cucumber!

Watch the stream to pick up some tips for yourself about how to get started in open source or, if you’re interested in taking part, get in touch. The easiest way for us would be if you join the [Cucumber Community Slack](/community#slack) and find us in the [#new-contributors](https://cucumberbdd.slack.com/archives/C028E2TBDJQ) channel, but you can also [ping me on Twitter](https://twitter.com/mattwynne/), my DMs are open.

If you have any other ideas or experiences to share about this topic, I'd love to hear from you.