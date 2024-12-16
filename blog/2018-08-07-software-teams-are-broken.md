---
slug: bdd/software-teams-are-broken
title: Software teams are broken – learn the fix with shifting test left
authors:
  - name: Akshita Puram
tags: []
---

_This is a guest post by Akshita Puram, Product Marketing Manager at SmartBear_

Demands for releasing software deployments frequently, managing infinite combinations of devices, and creating standardization to increase velocity, has put pressure on software teams. Solutions for test automation, continuous integration, and DevOps have gained traction to address the constant plea for higher quality and faster development. Momentum for approaches such as [“shift left”](https://smartbear.com/resources/webinars/shift-left-the-right-way/) and [“Behavior-Driven Development”](https://smartbear.com/learn/automated-testing/introduction-to-behavior-driven-development/) (BDD) are also growing in software teams. However, it is unclear how many organizations are shifting their testing activities to occur earlier in the lifecycle, leaving many QA professionals suspicious of this trend.

<!-- truncate -->

## Are software teams really shifting left?

There are many active changes in organizations that have shown that shifting left is impacting software development and testing teams. Quality is being thought about and measured against at every stage of the software development lifecycle (SDLC), bridging the communication gap and breaking down boundaries between development, QA and product teams.

[Behavior-Driven Development](https://smartbear.com/product/testleft/features/behavior-driven-development/) has accelerated the shift left movement, kicking off the software development lifecycle with test-ready requirements so developers can more readily create test-ready code. To accomplish this, BDD has driven product teams to transform the way they think about user requirements from a functional perspective to a user perspective. Teams are no longer listing requirements as the “ability to X” and instead, prioritizing the user experience from the start. By adopting BDD practices, teams are able to write their user requirements following a three-step approach that ensures requirements are defined in a user-centric manner. The first step is Discovery – where the business logic is fleshed out amongst all relevant business and technical stakeholders. The second step is Formulation – where business logic is documented in human readable statements, such as using popular syntaxes such as Gherkin. This creates a documented, shared understanding of requirements in a Given, When, and Then format to outline what the behavior of the software should be in a way that all team members with any level of experience will be able to understand. For example, a user may want an application to find a list of potential movie suggestions given specific parameters.

**Given** I have launched the Movie Selection application

**When** I logged in using the name “JaneDoe” and password “SmartBear”

**And** I create a new search with parameters: , , , ,

**Then** I should see the new search result '' in the list of movies

The Formulation step allows teams to catch bugs and feature mistakes in the requirements phase, before any code or tests are written – this can significantly increase quality and reduce the need for costly, late-stage re-work. This brings us to the third and final step, which is Automation – where teams can leverage popular frameworks such as Cucumber, SpecFlow, JBehave, etc, to automate the scenarios documented in the second step, and transform those scenarios into test cases using a [testing tool.](https://smartbear.com/product/testleft/overview/)

Shifting testing left is also occurring in many other forms. With smaller sprint cycles, teams are coding and testing in the same sprint and with test automation reaching new heights, teams are able to enable true continuous integration and delivery practices.

## Shift left or be left

There is an active shift left movement taking place that no software team is immune to if they want to ensure that they can keep pace with increasing demands for speed, quality, and low costs. Change can be daunting, but to help with its adoption, I like to reference a personal mnemonic, **M-PWR**, from my days conducting research on digital transformation. **M-PWR** embodies the key common elements that each organization needs to transform for a successful change management in today’s digital age: Mindset, Process, Workforce, and Resources.

### M: shifting toward a test-ready mindset

Shifting test left requires an update to how you think about your organizational structure and the current skill sets of your team. By shifting toward a test-ready mindset, it starts the software planning process with the end (testing) in mind so that there is a shared understanding of the team’s objectives and goals. This is often the hardest part of any organization shifting left as it incorporates emerging, intangible changes to a team’s culture. However, aligning incentives and metrics for quality to every phase of the development lifecycle can help teams transition toward a test-ready, quality-driven mindset.

### P: one process, one language

For testing to start shifting left, testers should be able to successfully work with designers, developers, and operations teams to build a resilient, scalable system. Creating documentation for development and testing processes from user requirements to comments within code to test cases that is in simple business terminology is the first step to creating a process that can catalyze shifting left. By creating one common language that anyone at all levels of experience can understand will set up an organization for success that is founded on a principle of collaborative understanding.

### W: breaking workforce boundaries

Shifting left can only be achieved through collaboration from the product, development, QA, and operations functions, as it requires team members to be working in other areas. Regardless of departmental boundaries, everyone has a stake in achieving quality at speed. Once there is a collaborative understanding, requirements and solutions will naturally evolve from different stakeholders to create alignment. Having alignment across the SDLC will then enable agility to rise to enable short, iterative development cycles that often end in a feature and fewer bugs being shipped to production much more quickly.

### R: automated and management resources

Overall, new technologies are also increasing pressure for higher quality standards by being able to do more with less. As organizations embrace digital transformation, it is a critical time to know which tools can improve quality at every stage and help software development and testing teams realize rapid time-to-value. With BDD, feature stories can be automated, turning simple user requirements to test cases in order to verify functionality. With test management, teams can achieve efficiencies from test reusability; and with test design automation, intense information processing allows for test recommendation and optimization engines to minimize business risk.

## Change management is not always easy

Whether it is the “M” in M-PWR or another component, collaboration is the underlying theme behind all shift left initiatives. Without an appetite and consideration for collaborative learning and understanding, boundaries between departments, geographies, and perspectives will continue to stand tall against shifting left. Some aspects will be easier to adopt versus others depending on your organization. Keeping M-PWR in mind, even small adaptations to the way testing is approached will make an impact in becoming a modern, software team – and being able to ship higher quality software, faster.

- - -

[Akshita Deora Puram](https://www.linkedin.com/in/akshitadp/) is a subject matter expert and thought leader in digital transformation and software testing. She manages the software testing portfolio at [SmartBear](https://smartbear.com/), which includes award winning tools such as TestComplete, TestLeft, CrossBrowserTesting, and Hiptest. Akshita shares stories and lessons from her time at Salesforce.com, as a strategic consultant and as a Visiting Scientist at MIT, leading research on digital strategy. Her industry experience spans top retailers in financial services and biotechnology. Akshita has an MBA from MIT Sloan and her prior work includes [Maximizing Value from Open Source Testing Frameworks](https://thenewstack.io/maximizing-value-from-open-source-testing-frameworks/), [6 Ways to Measure the ROI of Automated Testing](https://smartbear.com/SmartBear/media/ebooks/6-Ways-to-Measure-the-ROI-of-Automated-Testing_Final.pdf), [Organizing for Digital: Why Digital Dexterity Matters](https://www.capgemini.com/consulting/wp-content/uploads/sites/30/2017/07/digital_orgns_cover_08-12.pdf), [Rethinking the Digital User Experience as a Collaborative Exchange.](https://www.capgemini.com/consulting/wp-content/uploads/sites/30/2017/07/mit-cx-research-report-2017.pdf)