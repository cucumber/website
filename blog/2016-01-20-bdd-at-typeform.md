---
slug: bdd/bdd-at-typeform
title: BDD at Typeform
authors:
  - name: Theo England
tags: [BDD]
---

_There's no point in hiding it, we think Typeform make awesome surveys. At Cucumber we use their forms for all our customer feedback. It's always a bonus when you work with a team that are building a product that you love._

_Late last Summer [Matt Wynne](https://twitter.com/mattwynne) headed to Barcelona to help the Typeform team practice Behaviour-Driven Development effectively and implement some core techniques to bridge the communication gap between tech and business teams._

_Matt caught up with Aida Manna and Gloria Hornero from the Typeform team and asked how other teams can take pointers from their approach. Here's the conversation._

<!-- truncate -->

**Matt Wynne**: Hello! Can you both tell me a bit about yourselves and what your roles are at Typeform?

**Aida Manna**: Hi! Well, as most testers, I started in this world by chance when I was doing an internship and I realised that it was what I wanted to do. After finishing my degree I found a "real job" and I started working as a QA in the medical sector. It was not easy at all, you cannot imagine how hard is it to test medical devices!

I think that at some point I needed a change, I wanted to work in a place where testing could be done differently. I wanted to create something from the beginning and develop all my ideas. That's more or less how I ended up in Typeform, they were looking for a curious person with automation knowledge to grow a QA department. For me it was the challenge I was looking for, so of course, I accepted the job.

It’s been a bit more than a year since then and I am happy to say that we are now an awesome team. I’m focused on processes and improving the automation suite full-time, but everyone else in the QA team works integrated in a Scrum team.

**Gloria Hornero:** Just like Aida, I also started in the quality world by chance. In my case, I was searching for an IT position when I was offered a QA position in a consultancy firm.

I consider myself really lucky because I had the opportunity to start working in a Scrum team with developers. Quality and automation tests were really important, and so was communication and the team culture.

Here at Typeform I work in a Scrum team of nine developers and two QAs, including myself. Aside from the QA role I also have a Scrum Master role. As QA I am involved in the development life cycle of new features from the beginning. I work closely with the Product Owner assisting with the feature requirements, as well as writing the user stories to reduce bugs. When the development of the new feature begins, I start automating tests. This means that once the development is finished we can run the tests and perform some manual testing in order to see that everything is in place.

> We improved the processes, resulting in more communication  
> between QA, development and business. Thanks to these improvements, we were able to find bugs in earlier which allowed us to deploy frequently. - Gloria, Typeform

**Matt:** And how does that fit into the bigger picture? What does software delivery look like at Typeform HQ overall?

**Aida:** Everyone in the team works inside Scrum teams and takes ownership of the whole development process of a feature. This includes gathering requirements, testing, deploying to production and launching of new features. As QAs this gives us a lot of control as we decide when a feature is ready for users.

We are highly focused on automated testing, we don’t like spending time writing extensive testing plans or writing scripts for manual testing purposes. Instead, we work on having good acceptance criteria and we automate using Cucumber so that we have live documentation. We also do a lot of exploratory testing, which in our opinion, is the most valuable kind of testing.

**Matt:** Prior to you both joining, had Typeform begun adopting Behaviour-Driven Development and agile methods? (You both joined < 12 months ago, right?)

**Aida:** Well, more or less. When I joined Typeform there was an automated regression test developed using Cucumber + Watir with Ruby, which was run in Jenkins. The previous QA worked hard in defining good acceptance criteria for the stories and his idea was to use those as a base for automation. The problem was that he didn't have enough time.

**Gloria:** I joined a month after Aida and I could see she had done an outstanding job. During the recruitment process she explained what the current situation was and what improvements she deemed important to apply. The previous QAs didn't work alongside the developers; in fact, the QA department had a different board and process! Luckily, by the time I arrived, Aida had already fixed that. She was working alongside the development team and testing tasks were included in the development process.

![Matt with the Typeform team, Aida Manna (Left) and Gloria Hornero (Right)](/img/blog/606973ee534a47c74884eb7d0ec435e9b6fbbfc2574b080503703e283e2d2995.png)

**Matt:** What do you think is driving that change? What did the team experience that convinced them this was a good idea?

**Gloria:** I think that the change is driven by the desire to do things the right way, in order to avoid bugs and unneeded technical debt.

First, we improved the processes, resulting in more communication between QA, development and business. This meant that all of us were on the same page and we agreed from the beginning on what the requirements were.  
Thanks to these improvements, we were able to find bugs in earlier which allowed us to deploy frequently.  
These changes made us happier and prouder of our work, which serves as proof that we're following the right path.

At that point we felt we were ready to take ownership of the test automation framework. The first step was to understand what was already done, in order to be able to expand it. However, we detected some weak points we wanted to fix, so we started working on that before adding more tests.

The scenarios were defined using an imperative style, which made them very long. We worked hard in rewriting them using a declarative style and a proper domain language. This allowed us to use our tests as live documentation, which means everyone can check them when we have doubts about product behaviour.

But we didn't stop there, we are constantly improving our framework. Currently all our tests are run every night, so that when we arrive to work in the morning, we know if it’s possible to deploy or if any bugs need to be fixed first. In my opinion, this is what drove the real change and made others feel we were more agile.

**Matt:** What have you both personally learned as you’ve gone through this transition?

**Gloria:** I’ve learned that in the development cycle, and especially in agile, the most important piece is people. Even if your methodologies are perfect, if your team members are not happy and do not work as a team, the result will not be good. My advice is that, when you want to improve the process, you first have to look at the team and try to understand them. You need to do the changes based on them, rather than changing flows and processes independently and then wait for the team to embrace them.

**Aida:** I agree that motivation is what brings the best from us. That is why I love working at Typeform, I feel really motivated and I want to constantly improve. But we need to realise it is not only about what we’ve done wrong and what’s left to change, but also about celebrating all we have achieved so far and realising that good enough is also good.

**Matt:** What are you still struggling with at the moment?

**Gloria:** If I had to choose a pain point, I would say that the running time of the automation suite is starting to increase too much. But we're very agile and are constantly improving the way we work. This makes us evolve as a team and allows us to face new challenges.

**Aida:** Yes, we definitely need faster and more reliable feedback when running our tests. In order to achieve that, we have changed our testing strategy: instead of only doing UI testing, we have now started to do backend testing. For new features it is pretty easy, since our platform is now being built with testing in mind.

**Matt:** Product plug. We love Typeform. We use it for all our customer surveys now. Can you give us any clues what features you’re working on at the moment?

**Aida:** Our biggest challenge is to provide the best user experience possible. I’m not allowed to say much, but we’re working on lots of different ideas.

**Gloria:** One of the features we’ve been working on lately is collaborative form creation and new field types.

**Matt:** You're looking to hire too right? Who wouldn’t want a job in Barcelona working with you?! Where can people find out more?

**Aida:** Yes, we are constantly looking for QAs and other profiles. We have the positions posted on Linkedin, Stackoverflow, Workable… and of course on our [hiring Typeform](https://jobs.typeform.com/to/e7NNgU).

**Gloria:** We also have a [video](https://www.youtube.com/watch?v=_I5TlsPVAq8) that showcases our company culture.

**Matt:** We're lucky in London to have a thriving meetup community. Does Barcelona have a similar after-hours tech scene?

**Aida:** Yes, there are a lot of meetup groups in Barcelona. At Typeform we love hosting meetups to promote this kind of knowledge sharing. In fact, we created the @bugbustersbcn meetup some time ago and we meet frequently to talk about testing and Agile.

**Gloria:** We love to share knowledge and learn from our colleagues’ experiences. This sharing experience is what we are trying to bring to our meetups. We are working in order to make @bugbustersbcn a friendly point of contact where everybody can give a little bit of knowledge and get some more in return.

Thanks for talking to us Aida and Gloria!