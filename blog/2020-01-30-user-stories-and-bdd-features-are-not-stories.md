---
slug: bdd/user-stories-and-bdd-features-are-not-stories
title: "User stories and BDD (part #4) - features are not stories"
authors:
  - seb
tags: [BDD]
---

Previously…

1. [Origins and evolution of the user story](/blog/bdd/user-stories-are-not-the-same-as-features/?utm_source=userstories4&utm_medium=blogpost&utm_campaign=User-stories-4-BP)
2. [Discovery](/blog/bdd/user-stories-and-bdd-part-2-discovery)-discovery/?utm_source=userstories4&utm_medium=blogpost&utm_campaign=User-stories-4-BP)
3. [Small or far away?](/blog/bdd/user-stories-and-bdd-part-3/?utm_source=userstories4&utm_medium=blogpost&utm_campaign=User-stories-4-BP)

This is the fourth in a series of articles digging into user stories, what they're used for, and how they interact with a BDD approach to software development. This post is the last in this series, but certainly not the last time I'll be talking about user stories. However, since it brings the current narrative arc to a close, [it is perhaps the end of the beginning](https://www.youtube.com/watch?v=pdRH5wzCQQw).

<!-- truncate -->

## Lifecycle of a story - revisited

**User Stories** start off as [placeholders for a conversation](/blog/bdd/user-stories-are-not-the-same-as-features/?utm_source=userstories4&utm_medium=blogpost&utm_campaign=User-stories-4-BP). They’re ideas, often large, not fully formed. They could be valuable, but they’re not ready for development just yet. 

As we refine them (through [Discovery](/blog/bdd/user-stories-and-bdd-part-2-discovery/?utm_source=userstories4&utm_medium=blogpost&utm_campaign=User-stories-4-BP)) they become better understood. **Collaboration** ensures that they make sense to the whole team. The business requirements that limit their scope are negotiated and agreed.

Now it’s possible to see what’s involved in delivering the story, we can split them into smaller chunks. Smaller chunks mean [faster feedback, smoother flow, and less waste](/blog/bdd/user-stories-and-bdd-part-3/?utm_source=userstories4&utm_medium=blogpost&utm_campaign=User-stories-4-BP). They’re no longer placeholders. Now they’re **detailed small increments**, each one carrying a small payload of valuable functionality.

![](/img/blog/59bcd44a2f88e9742689a39081eead4ebcb92395f3f50775f3970acb35193a08.png)

As the stories get plucked off the backlog, they deliver enhancements and brand new features. Not in a big bang, but incrementally and iteratively. Many stories contribute to each feature. Some stories contribute to many features. No feature is ever finished -- it’s just done for now.

## No further value

Just because something has been useful doesn’t mean that it will continue to be useful. On the contrary, once you have used something its value usually diminishes. Consider a tube of toothpaste or a pack of stickies.

![](/img/blog/83e8a84f88d1e898ee4037be984be7e0334dafbf0514c27f3d1f37e3df016ae6.png)

**The story never was a requirement**. It starts as a placeholder and is then transformed, first into a narrative and then into several detailed small increments of functionality. That process is important, because it enables the team to learn about the problem and the solution. It’s important, because it allows us to **discover the requirements**. However, it is the feature files (and ancillary documentation) that capture the requirements, not the stories.

Have you ever tried to make sense of a team’s system by reading the completed stories from their issue tracker? It’s impossible.

Stories only make sense when seen as a sequence of events, playing out over time. Like one of those flip book animations that you made at school. Useful documentation, on the other hand, describes how the system behaves now -- not the history of how it evolved to behave like it does.

[![](/img/blog/451f30c674f84f14eecb898aa554be18d089d8b96519fa819cca4f8d76c03716.gif)](https://www.metmuseum.org/blogs/metkids/2018/animations)

Back in the mists of time, when stories were written on index cards, XP teams used to indulge in a confetti party at the end of each iteration. The story cards in the ‘done’ column were torn into small pieces and thrown into the air, to rain down as the team danced around, celebrating their success. Most teams have moved on to electronic story tracking systems, which saves paper, but makes the disposal of stories problematic and much less fun.

Stories, once delivered, have no further value. Certainly not as documentation of the system’s behaviour. 

## Souvenirs

So if we don’t want to capture stories in our **living documentation**, what do we want in there?

Well, there are many useful things you can capture in a feature file. Written prose that explains the context and need for a feature is still useful for people reading the documentation for the first time. You can add links out to other sources of information like UX wireframes or user research data. But probably the most important thing to document alongside your scenarios are the **rules**.

If you cast your mind back to our [earlier discussion of example mapping](/blog/bdd/user-stories-and-bdd-part-2-discovery/?utm_source=userstories4&utm_medium=blogpost&utm_campaign=User-stories-4-BP), you’ll remember that requirements are also known as [acceptance criteria](https://lizkeogh.com/2011/06/20/acceptance-criteria-vs-scenarios/) or rules. 

Current versions of Gherkin do not provide a defined way to capture rules. Our advice is to document them in the feature description (the block of text between the feature name and the first scenario):

```gherkin
Feature: Hear shout
  
  Shouts have a range of approximately 1000m
  
  Scenario: In range shout is heard
    ...

  Scenario: Out of range shout is not heard
    ...
```

The bottom line is:

-   Stories helped us decide what we want (and how to deliver it).
-   Features document what we’ve got. 

By all means keep the story index cards in your drawer as a souvenir (although I guarantee you’ll never look at them). Please don’t pollute your feature files with them.

## Traceability

There are processes and organisations that value historical stories. The word I hear most often in this regard is “**traceability**”, so I’d like to write a few words about the challenges. 

In regulated industries (health, defence, finance) there is a need to demonstrate a rigorous end-to-end development process, from inception to delivery. Since stories are a visible, tangible artefact, often stored in electronic data management systems, they are easy to include in the web of traceability.

The trouble is that stories are neither definitive nor independent. Their lifecycle makes them no more suitable for traceability purposes than conversations around a watercooler or notes scribbled on your tablet. If you use stories for traceability, one of these days [you’re sure of a big surprise.](https://link.springer.com/article/10.1007/s00766-018-0306-1)

Following a link from a story through to the commit(s) that delivered the code and test scripts might give you confidence that the necessary work has been done. And since feature files will be part of those commits, **the resulting behaviour is also documented**. However, since subsequent stories may have been delivered, this means that you cannot infer anything about the current behaviour of the system by traversing links from a story through to commits. 

Tools are currently being [developed](/tools/cucumber-for-jira/?utm_source=userstories4&utm_medium=blogpost&utm_campaign=User-stories-4-BP) that will make it simpler to trace from a specific version of a scenario through to the stories that caused it to be written, which will help with some compliance needs. Nonetheless, it is important to remember that **stories are neither requirements nor deliverables**. They are **transient artefacts** that facilitate delivery, not persistent artefacts that document behaviour.