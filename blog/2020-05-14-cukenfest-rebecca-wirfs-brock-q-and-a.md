---
slug: events/cukenfest-rebecca-wirfs-brock-q-and-a
title: "CukenFest: Q&A with Rebecca Wirfs-Brock"
authors:
  - name: Theo England
tags:
  - Agile
  - BDD
---

In the build-up to Cukenfest, we spoke to **Rebecca Wirfs-Brock** who will give the closing address. We asked Rebecca a few questions about her upcoming keynote and how she came to discover these ideas and become one of the world's most prominent figures in this space.

<!-- truncate -->

## What can attendees expect to learn from your talk? 

I’m going to introduce them to what we, who want to change the world for the better, (as designers, software developers, product owners, or elsewhere in life), can do to be more aware of heuristics and more intentional about how we go about solving the current immediate problem we have at hand. There are always alternative and competing heuristics. Design isn’t easy. And there isn’t one "right" way to solve any problem. And not surprisingly, even what we say we do may differ from what we actually do. Is that so bad? Maybe. Maybe not. But becoming more aware of our heuristics and values in a given design context can lead us to real growth and insights.

## Your work focuses a lot on the mental shortcuts (heuristics) we use in software design. Why is it important for people to be aware of these? 

Actually, my recent work has focused on how to become more intentional and aware of our options as we approach solving problems. According to [Billy Vaughn Koen](https://en.wikipedia.org/wiki/Billy_Koen) (the author who inspired my exploration into design heuristic), a heuristic is ‘anything that provides a plausible aid or direction in the solution of a problem but is in the final analysis unjustified, incapable of justification, and potentially fallible.” Heuristics aren’t just mental shortcuts, they’re just handy techniques or approaches that we’ve learned through experience, absorbed through working with others, or from things we’ve read, seen, and heard.

There are three different types of heuristics: heuristics we use to attempt to solve the problem at hand, heuristics that determine our belief and attitudes, and heuristics that guide us to what to try next. Software design patterns are a form of heuristic, but there are other forms. Patterns are a convenient form for expressing design solution heuristics because they usually explain the context in which that particular solution has been found useful.

The important thing to know about heuristics is that we have internalized many, many heuristics. We adapt heuristics to our current situation and context. And we fill in many gaps with our own personal heuristics. So while I may be remote mob programming or writing tests and doing TDD, the heuristics I use may be different than your heuristics as we do the same tasks. That’s why I’ve been excited about getting people to be more aware of their own heuristics and inventing and experimenting with techniques for people to capture and communicate their heuristics with others.

## What sparked your interest in Responsibility-Driven Design, and what about it continues to interest you?
  
Long ago, when I first was introduced to early object-oriented programs and programmers who were using Smalltalk, I observed that people who really seemed to “get it” thought differently about design. Instead of focusing on data and how to move it around, they invented objects that cooperated, each with their distinct responsibilities, to implement a design. This way of thinking was quite startling to me. I had just come from writing in assembly language and object design thinking seemed to make so many things easier—instead of having to worry about every little detail of a program’s execution, if you trusted an object, you could just ask it to do its job and not have to care about how it did it. Separation of responsibilities allowed me to create comprehensible designs. And it gave me a mental freedom to not have to keep so many details in my head. And if you designed that way, you truly could build systems that could be changed, evolved, and reworked more easily than with other design approaches. I still think in terms of responsibilities, even for functions in functional programming languages, as well as services and components. This way of thinking scales both to larger and smaller-grained elements of a design. So that’s what still exciting about it.

## What common pitfalls do you see in Responsibility-Driven Design, and how can they be avoided?
  
Well…one thing is that people confuse the Single Responsibility Principle, from Bob Martin’s SOLID principles, with Responsibility-Driven Design in a strange way. They think for an object to be well-designed, it should have either a single method or that you should make a new class or object whenever there is a change to an existing object’s requirements. To get around this pitfall, I suggest you ignore the Single Responsibility Principle as it is confusing. Instead, thing of a responsibility as bigger than a single method or function. Maybe a better way to think about it is its purpose. Why does this object exist and what role does it play in the design? Role stereotypes, another thing I invented can be useful here also to characterize what an object is or does and to assess whether its responsibility is coherent. 

Another pitfall I see is that people think the important thing about Responsibility-Driven Design  (and object technology) is inheritance. No, that is not the case. In fact, creating well-design objects and favoring composition over inheritance is a more powerful way to build flexible systems. Especially when you created interfaces that define responsibilities that can be implemented differently.