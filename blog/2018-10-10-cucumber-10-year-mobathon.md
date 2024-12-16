---
slug: news/cucumber-10-year-mobathon
title: Celebrating Cucumber's 10th birthday with a 9.5 hour mob programming session
authors:
  - matt
tags:
  - Events
  - Mob Programming
image: /img/blog/59b4737ba96cb18d77c53096807c8f5d1fd353d32c36d8d2bf98ad7aa45709f8.jpg
---

![](/img/blog/59b4737ba96cb18d77c53096807c8f5d1fd353d32c36d8d2bf98ad7aa45709f8.jpg)

This weekend marked the 10th anniversary of [Cucumber's first release](https://rubygems.org/gems/cucumber/versions/0.1.6), and we decided to celebrate with an open invitation to our community to join a mob programming session.

<!-- truncate -->

## The stats

We started at 4pm GMT and finished around 1:30am GTM. We were joined by 11 people over the course of the evening:

-   Aslak Hellesøy (London, UK)
-   Matt Wynne (Lochgoilhead, Scotland)
-   Eric Kessler (Ohio, USA)
-   Marit van Dijk (Amstelveen, Netherlands)
-   Björn Rasmusson (Linköping, Sweden)
-   Ed Snodgrass (Iowa, USA)
-   Jayson Smith (Arizona, USA)
-   Thomas Sundberg (Stockholm, Sweden (from Bucharest tonight))
-   Sal Freudenberg (Somerset, UK)
-   Amitai Schleier (Nanuet, Rockland County, NY USA)
-   Woody Zuill (Copenhagen, Denmark)

We made around 30 commits across the various Cucumber repos, and made a [pre-release of cucumber-ruby 4.0.0](https://rubygems.org/gems/cucumber/versions/4.0.0.rc.1).

I wrote some Go code for the first time, and we all learned a lot about the new architecture that's coming to Cucumber over the next few months.

## The lessons

### What worked

Mobbing works! None of us were present for the entire session, yet there was a continuous stream of problem-solving going on for the entire _nine and a half hours_. People dropped off to cook meals, put kids to bed, then came back. Because we were spread across timezones, this was even more useful - when it was kids' bedtime in the Netherlands, it was mid-afternoon in Arizona.

Having a goal for the session helped a great deal, and we quickly reached agreement about what to focus on. Aslak had done his homework ahead of time and we had a nice small problem to get our teeth into. We used a shared [Google Doc](https://docs.google.com/document/d/1G6p4xiRnPYNRZoyLHYEAIWqG0A1_uDFnUHV9JAOPVds/edit#heading=h.4sungl3s8yn9) to sketch out a shared plan, including a diagram of the new architecture we'd be working with.

We had plenty of experts on hand - Aslak and Björn for example were invaluable in sharing their deep knowledge of the codebase and the direction it's headed in.

> The anniversary mobathon was an absolutely fantastic time and I would love to do it more! Driving the code changes while having the guidance of folks already familiar with the code enabled me to do things for the first time (like release various Cucumber Ruby gems) that I wouldn't have been able to on my own. What a wonderful experience in so many ways! -- [Jayson Smith](https://github.com/jaysonesmith)

Driving was a great experience for me. I'm rusty with my OSS contributions, and I've never written any Go before. It was fun trying it out with so many experts around to guide me, and in such a friendly supportive and fun atmosphere.

### Puzzles

I think we could have done a better job of making sure there was an easy environment that made it more possible for everyone to participate and take their turn on the code. For another time I'd like to experiment with a remote coding environment like [Eclipse Che](https://www.eclipse.org/che/) or something. If you have any suggestions for that I'd love to hear them in the comments.

I wonder how much the implicit power dynamic of being around such experienced people as Aslak and I made it too intimidating for some people to take the keyboard. Although I felt relaxed and supported fumbing around writing my first Go code, was that the same for everyone there?

We didn't make much of an effort to publicise this event beforehand. I originally had notions of trying to make a [world record attempt](http://www.guinnessworldrecords.com/) but I just got too busy to try and sort it out.

I still have a crazy idea that, with enough people, you could run a mob 24 hours a day. Would you be able to get enough people spread across enough timezones? I'd love to give it a try.

Would you like to be part of the next one?