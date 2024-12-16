---
slug: bdd/improving-throughput-and-collaboration
title: A case study for BDD in improving throughput and collaboration
authors:
  - name: Theo England
tags: [BDD]
image: /img/blog/da1dfcac234edac0d7fcf35ae0300580fd74725b4a24472c4f99761c2369afe3.jpg
---

![](/img/blog/da1dfcac234edac0d7fcf35ae0300580fd74725b4a24472c4f99761c2369afe3.jpg)

_This was originally published on the [Adventures with Agile blog](https://www.adventureswithagile.com/2015/08/27/a-case-study-for-bdd-in-improving-throughput-and-collaboration/) by Simon Powers._

At a well known global investment bank, I was asked to review several product teams and to find out why the teams could not complete stories at the end of each sprint and why there was so many defects coming into the sprint.

<!-- truncate -->

The current measurable time spent on defects averaged at 35% of all developer time and rising each month. The defects were coming from UAT and Production and were typically urgent or semi-urgent and needed fixing during the sprint.

We reviewed the quality and found very low or non-existent unit and acceptance testing.

I trained the teams in how to do Behaviour-Driven Development and we got the investment time we needed for the teams to build the infrastructure to support automated testing and deployment.

The first 3 months we learnt the science of testing and spent significant time building frameworks and libraries to enable us to test complex data structures in the code.

When the team started, they estimated individual tests taking up 5 days of time for a 2 day story. By the end of the first 3 months, tests were being written in a few lines of code in minutes for the same type of story, but no noticeable reduction in defect rate had been noticed.

In the 3-6 month period, we focused on the art of testing and included product owners. POs wrote better acceptance tests that could be directly translated to code tests using the Gherkin language. This reduced the amount of rework within a sprint because now POs were involved with the tests and we were more frequently building the right thing.

At the end of the 3-6 month period, we had achieved nearly zero defects on brand new greenfield code but not much on the legacy code. Our time had been invested in getting POs up to speed and learning how to write good tests.

In the 6-9 months period we saw a huge reduction in defects from the legacy code as well, and by the end of the 9 months the defect rate was 4%.

This effectively saved the entire application suite and increased confidence in the development teams.

Due to the lack of unexpected issues arising from the defects, the teams were much better able to complete the feature stories on time and increase predictability too.

The side effect of all this learning and increase in quality was that a community of practice arose across the teams around testing and quality and this led to better communication across the teams on this and other matters.  
Another effect was that infrastructure teams were much more involved and better understood automated testing and were able to change their model of server resource allocation. This would be used for other teams and departments.

Manual testing teams were used much less as confidence in the test suite improved and this had effectively merged test into development without any formal structure change.

The product group (all the teams) were included in the bank’s internal magazine as "Agile teams of the month" and screenshots of the build server with green ticks on the tests were included.

Agility is wholly dependent on automated testing as it gives you the real option to change direction and refactor in response to changing business needs.

I hope this case study can serve as encouragement to those considering investing in BDD.

#### About the author

Simon Powers is an Agile Coach specialising in large scale transformations and agile adoption. He has a background in very large enterprise architecture which has led on to organisational design and agile process refinement. Simon is the founder of Adventures with Agile.