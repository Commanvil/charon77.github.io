Git - The Ultimate Undo Tool for Collaborative Projects
========================================================

_Back to [Index](../index.html#-markdown-markdown-html-)_

Collaborating codes can be hard, and while using flashdrives to 
copy codes can work, there are lots of concerns, like: what if
we accidentally overwrite someone else's work? What if our work
produces bugs we don't realize until later on? Can we rework our
steps to fix the bugs?

This section serves as a primer to Git, what is it, how to use it,
when and why should you use Git.

Even as a solo developer, you should still consider working with Git
as there are lots of benefits you can get, so don't you stop reading
just because you do everything by yourself.

Now, let's check out what Git is all about.

Motivation
----------

When you work alone, writing software, all you need to do is write the code,
compile it, and run it, and you're set. But what if you are working in a team?
How do you share what you're typing with others? Do you send your code by email?
Cloud storage? What if there's a mistake that happens later on in the project's lifespan,
can we figure out what introduces the bug, and even who to _blame_?

As your project scales, things are getting more difficult. You now start working
in a team of five people, per se. Each of them work on different parts of the project.
For instance, one person could person on one particular feature of an app, corresponding
to several files, while the others could be working on different files. Sometimes, several
people could be editing different or even same parts of a single file, like the main page of
a mobile app, or the css of a website.

We need some sort of system that could:
- Easily distribute code between people
- Merges codes with little conflicts as possible
- Tracks changes so we know when did anyone made changes, to which files, and why

Git solves that.

What is it?
-----------
