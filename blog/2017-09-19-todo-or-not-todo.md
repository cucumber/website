---
slug: bdd/todo-or-not-todo
title: TODO or not TODO
authors:
  - name: Steve Tooke
tags: []
---

Like a lot of teams we've gone back and forth on leaving [`TODO` comments](http://wiki.c2.com/?TodoComments) in the code. Are they [useful](http://wiki.c2.com/?TodoCommentsConsideredUseful) or [harmful](http://wiki.c2.com/?TodoCommentsConsideredHarmful). On the one hand we appreciated being able to quickly mark something as needing attention without giving it focus now and distracting us from what we were currently trying to do. On the other hand we felt bad when we came across lots of `TODO`s in the code that weren't getting fixed — the [broken windows](https://en.wikipedia.org/wiki/Broken_windows_theory) in our codebase.

<!-- truncate -->

We used to rely quite heavily on [feature branches](https://martinfowler.com/bliki/FeatureBranch.html) and would merge new code back to master when it was complete so we tried a rule of no `TODO`s on master. This worked reasonably well. It allowed us to liberally add `TODO`s while we were working on something new and forced us to make sure we'd dealt with them before merging. If you are using feature branches I think this is a good strategy.

We really started to notice the problem with `TODO`s not being cleaned up as we moved to a [trunk-based development](https://trunkbaseddevelopment.com/) process. We were always committing straight to master so there wasn't a regular checkpoint that made us keep our `TODO`s under control.

We noticed this problem during one of our retrospectives and someone suggested that it would be great if we could have a way of scoring the codebase based on the number of `TODO`s and fail the build if we went over a threshold.

This is where [Aslak](https://twitter.com/aslak_hellesoy) stepped up and gave us [`bumbailiff`](https://gist.github.com/tooky/f4b3ac4072a834fd5914b59a28ae86ff) — a script that finds the TODOs in your code and uses Git to age them in TODO-days. Too many TODO-days and it fails.

We run `bumbailiff` in a [Git pre-push hook](https://git-scm.com/book/gr/v2/Customizing-Git-Git-Hooks). We get constant feedback about the things we have said we want to do and how long ago we said them. When we hit the threshold, we're prevented from pushing new code until we've dealt with at least some of the TODOs.

Dealing with TODOs is when things get interesting. Some of the TODOs are things we should [JFDI](http://www.urbandictionary.com/define.php?term=JFDI) — like a rename refactoring. Others take some more work, and we have to make a decision if its something we do now, or whether we need to add a technical story to the backlog so we can prioritise it. Sometimes its really a new feature, and it should definitely go on the backlog. The important thing is that we have to consider the TODO and make a decision.

Except... sometimes we need to keep moving, sometimes it isn't the right time to focus on those TODOs. In those cases we get commits raising the `bumbailiff`[^1] threshold — [extending the loan](https://www.youtube.com/watch?v=Jp5japiHAs4) and keep the `bumbailiff` at bay.

[^1]: _bum-bailiff_ — a bailiff empowered to collect debts or arrest debtors for non-payment [OED online](https://en.oxforddictionaries.com/definition/us/bum-bailiff)