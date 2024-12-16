---
slug: events/cukenfest-london-asks-jamie-and-wookie
title: "CukenFest: Q&A with Jamie Knight and Mike Southgate"
authors:
  - name: Theo England
tags:
  - Events
  - Interviews
---

In the build up to our annual Behaviour-Driven Development conference, [CukenFest London](http://cukenfest.cucumber.io) (April 4th-5th 2019), we've taken some time to chat to a few of our speakers about progressive software delivery techniques, BDD, and what people should expect to learn after attending their session.

Our guests this time are [Jamie Knight](https://twitter.com/jamieknight?lang=en) & Lion and [Mike Southgate](https://twitter.com/misterwookie) (aka, Wookie). Jamie and Wookie will deliver one of our keynote talks at CukenFest focusing on how they built a financial detection tool harnessing the power of BDD and autistic thinking. They have a great story to tell and we're excited for you to hear it.

<!-- truncate -->

Jamie and Wookie will present "Fighting crime and protecting vulnerable people using Gherkin, autism, and a half-built kit car." on April 4th at [CukenFest London](http://cukenfest.cucumber.io).

## How long have you both been working in software? What inspired you to get involved?
  
**Jamie Knight**: It’s been a little over 20 years since I started coding as kid. I started out coding visualisations for Winamp (!) but quickly found the web. The first 10 years where spent freelancing and the last ~10 have been spent working for the BBC in a range of roles from web developer to research engineer.

I’d been messing around with data processing projects for a number of years before we started ERMI - a tool for detecting financial crime - so I had some ideas for how we could achieve Mike’s ideas without needing to build a massive platform.

**Mike Southgate**: Only since I started working on Ermi. Before that, I once made a light bulb flash on an Arduino and brutalised some HTML...

![](/img/blog/eddf7699aed32a205de8bc9f99c6091c8300ba233c3a7e2216c4e8dc45aba75a.png)

Mike Southgate (AKA, Wookie)

The inspiration to get involved with ERMI came from trying to spend a fortunate on external tools whilst working at financial services firms. To process a really simple payment might require 8 systems, and each one can cost £100k+, we figured there must be a better way.

## How did you both meet and start working together?

**Jamie**: We shared a client many many years ago. I did the nerdy stuff and Mike was doing legal / supplier stuff. We worked together on other projects before this project on things like engine rebuilds / kit cars / tiling kitchens / building decking.  

**Mike**: Yeah, we became friends over a roast dinner explaining nuclear reactors to the client, I think.

## When building ERMI, how did you harness the strengths of autistic thinking?
  
**Jamie**: From the outset ermi had to be sustainable from a development, maintenance and quality perspective. Being autistic, I don’t have much energy. Ermi is focused on getting the most user value out of the energy I have and that has driven the design of the tool.  This has pushed us towards stateless systems, containerisation and a focus on repeatability. We have avoided time-sinks like custom user interfaces and web services. We have found clients prefer getting a file anyway. They don’t want yet _another_ thing to log into.  
While driven by our need to focus our limited energy, it’s made lots of other things easier. Scaling, security, deployment all benefit from a simple approach.  

**Mike**: It's probably fair to say that the solution that Jamie came up with is the epitome of autistic thinking. The current process that was there was stupid, how can we make it a bit better? By cutting out all of the unnecessary "features" we've managed to make a lightweight tool that achieves the same sort of result. Its either autistic thinking or "bloody mental"

## What positive outcomes do you see when practising BDD?

**Jamie**: From an engineering perspective the BDD approach has given us the ability to move quickly and have confidence when we make changes. We have kept the ERMI codebase very lean because we have been able to refactor often. The feature files and Cucumber JS step files tend to outlive implementation details.  
The BDD approach also gives us clean separation of requirements from the method of implementation. We use the same BDD feature files to apply the same end-to-end tests to multiple levels of the tool. The tests can run against a local branch, a built container, or our entire platform. Whatever form ERMI takes in the future we will be able to use the BDD feature files to validate it.

![](/img/blog/aea2c62c8a3d13d25c21bd41926423ce9e2881d3bc1fe73f4038a49b5e433c57.jpg)

Jamie Knight and Lion

**Mike**: From the end user perspective, being able to very clearly define what behaviours I want from the tool have made things easier. I don't have a back and forth with Jamie over what a rule needs to do, its clearly defined and readable by both of us.

Because of the way we use Gherkin to define the rules, they are also readable by our end clients , which saves a lot of time in explaining them. Some of our clients currently have chunks of our original Gherkin in their policies and procedures, as they are so easily readable.

## What do you think are the biggest challenges that organisations face in software development?

**Jamie**: I can't speak much for the wider industry, but for us our biggest challenge is deciding what we build and what we pass on. We have taken some pretty tough decisions and left money on the table more than once in order to preserve our focus on being lightweight, affordable and flexible.

**Mike**: Speaking purely from the perspective of banks at the moment, the move towards Open Banking an inter connectivity of  different services, as well as EU mandated rules around items such as security and accessibility, I think the biggest challenge is going to be making sure your code is good enough to be exposed to the outside world. Making something work internally is one thing, making it work internally with all of your legacy systems, and be able to be accessed by third parties with no security risks is a much bigger task.

Thanks for speaking to us, you two!