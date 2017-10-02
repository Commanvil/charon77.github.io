How to write blogs without any code: A Beginner’s guide to Markdown
===================================================================

_Back to [Index](index.html#-markdown-markdown-html-)_

Have you ever wanted to make a blog?

We all do. Yet, making websites is not for everyone.

Some of you might be using Wordpress or Blogspot. But while they do have their
own benefits, 

What if you want to spend **less** time setting up Wordpress,
or configuring Blospot, and **more** on _actually_ writing content?

##### If you can write in Notepad, you can make a blog.

And I'm going to show how with all of you right now.

In this article you'll learn:
- What is Markdown, and how it makes anything easier
- How to write in Markdown (it's very easy, I promise.)

In the next article, you will also learn
how to publish websites for free with Github, so that
you can share the link to everyone else in the world! _(coming soon)_

Motivation
-----------

You're an aspiring writer. Maybe you want to tell people how well
that sushi restaurant you just visited, or you want to review a brand new
camera of yours.

You wanted to write something that people can share on Facebook, you want
to put pictures in it, and you need to be able to write it anywhere
you bring your computers to.

For some of you _tech savvy_ readers, you might just write in **HTML** and **CSS**.
But what if, maybe, you don't know how to write in HTML? Maybe you
don't have time to learn it, and to be fair, HTML is _kind of_ complicated. Some
even argue: **CSS is the worst**.

But here's the deal. If you have no idea what **HTML** and **CSS**
are, don't worry, we won't be needing them.

To reiterate: with Markdown, we can finally spend more time **actually** writing content.

#### How does Markdown do anything differently?


Unlike the more difficult HTML or CSS, Markdown, on the other hand contains **just**
the document and nothing else. This is achieved by having _markups_ that looks
natural to the human eyes (hence the name Markdown).

Formally speaking, markdown files `.md` are documents that are _easy to view_, whether
you view it on a browser (like Firefox) or using text editor (like Notepad).

Let that sink in for a moment.

With Markdown, you can see a website _nicely_ even with just a text browser.
This is _sooooooo_ unlike HTML, which looks gibberish to the untrained eyes.

Today, people favor Markdown for its readability (when viewed as a plain text)
and its simplicity. This allows even visitors that uses ancient PCs for _surfing the web_ to access
our website.

Let's take a look at a couple of examples.

A typical html document would look like this:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="style.min.css"/>
  </head>
  <body>
    <h1 id="markdown">Markdown</h1>

    <h2 id="what-is-it-">What is it?</h2>

    <p>Markdown files (.md) are documents that are easy to view, whether
    you view it on a browser (think: website) or using text editor.
    This means that you can open any markdown files with programs
    such as notepad, and still be able to read it easily, as opposed
    to reading (.html) files.
    </p>
  </body>
</html>
```

Now, let's compare it with Markdown, using the same content.

```
Markdown
========

What is it?
-----------

Markdown files (.md) are documents that are easy to view,
whether you view it on a browser (like Firefox) or
using text editor (like Notepad).
This allows even visitors that uses ancient PCs
for _surfing the web_ to access our website.
```

Which one would **you** rather read?

See how different it is between the two? The former (HTML) contains lots
of so-called "HTML Tags" decorating the whole document. While easier
for computers to read, we struggle to understand what the document is
about.

The latter (Markdown) looks much simpler and easier to read. There's no
doubt even first-timers would have no difficulties understanding
what the document is about.

Getting Started
---------------

At first, I thought that getting started with Markdown is easy: open
up a text-editor and start writing. But maybe you don't know how to
write in Markdown, what should you do?

The first step would be to familiarize yourself. If you have never seen
Markdown before, don't be ashamed. It is a somewhat old format (but not forgotten).
Make sure to have a good look on how Markdown looks like in the
section above.

When trying Markdown, it is **important** to keep this in mind:

Markdown tries to be as close as plain-text as possible. When you encounter
something you need to do, and you don't know how to do it: Think, what if this
is just a Notepad? How would you write it so that it looks nice?

Therefore, don't take Markdown as another language, but rather as a way you should
**always** write something when asked to make a document in plaintext.

### Heading

Keeping that in mind, how would you write a title in order to distinguish it
from other texts?

We've seen from the example that this can be achieved by writing the title
and putting underline below it.

In Markdown, you can write headings like this.

```
Title
=====

Lesson 1
--------

Underlines using = for title, - for section header.

```

which gives the following result:

> Title
> =====
> 
> Lesson 1
> --------
> 
> Underlines using = for title, - for section header.

Sounds neat! You now know how to make `headings`! Do you see how natural
it becomes to write in Markdown?

Now, let's dig deeper.

Headings marks the beginning of a section.

There are **two** ways to make headings.

#### First way: Equal sign `=` or Dash sign `-` at the _bottom_ of the heading.
    
Personally, I prefer this method as it looks clearer in plaintext.
You can use this format **only** for Heading 1 and Heading 2. For
levels below it, revert to the \# format.
    
##### Example:
```
Heading 1
=========    
Some text over here.

Heading 2
----------

The quick brown fox jumps over the lazy dog.
--------------------------------------------

*Note: in some parser, the line below the heading must not be shorter
than the text. This demonstrates what happens when this is violated.
Even though it appears well here, it's use is discouraged. Besides, it
looks bad.
```

##### Result:
> Heading 1
> =========    
> Some text over here
> 
> Heading 2
> ----------
> 
> The quick brown fox jumps over the lazy dog.
> --------------------------------------------

#### Second way: Hashes `#` can also be used before the heading. Think about it.
If you put any sort of symbol before a text, you would easily find it,
as you only need to skim through the first character.

In Markdown, this is useful when your heading is more than two levels deep,
as `=` and `-` can only be used for level 1 and level 2 respectively.
Hashes can mark headings from 1 to 6, depending on how many hashes
do you use.

##### Example:
```
# This is heading 1
Some text.
## Heading 2
### Heading 3
...
###### Heading 6
More text!
```
    
##### Which yields to:

> # This is heading 1
> Some text.
> ## Heading 2
> ### Heading 3
> ...
> ###### Heading 6
> More text!

Amazing, right? Did you get the intuitive feeling? Let's move along.

### Paragraphs

How would you write paragraphs, say, in a word processor? You separate
them with `enter`.

Paragraphs:
- One or several lines of text becomes a single paragraph
- A blank line separates paragraphs.

To illustrate, let's take a look on these examples.

```
This section demonstrates paragraphs
that are written
across multiple lines. The quick brown fox jumps over the
lazy dog. The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.

This sentence sits on a new paragraph, because of the
empty line that comes before it.
```

**This will yield:**
> This section demonstrates paragraphs
> that are written
> across multiple lines.  The quick brown fox jumps over the
> lazy dog. The quick brown fox jumps over the lazy dog.
> The quick brown fox jumps over the lazy dog.

> This sentence sits on a new paragraph, because of the
> empty line that comes before it.

It's that easy!

### Lists

Lists are useful to convey several information that are
related. There are two types of them: bullet point
and numbered list.

You can use bullet points for describing things that are in parallel,
for example:

Reasons why Markdown is amazing:
- Easy to read
- Simple to write
- Good looking

You can make bullet points by putting dash (-) and a space in front of the
items like so:

```
Reasons why Markdown is amazing:
- Easy to read
- Simple to write
- Good looking
```

You can use numbered list to say things in order.

Here's an example:

How to write:
1. Find ideas
2. Draft
3. Write
4. Spellcheck
5. Publish

**Q:** How would you do that on a Markdown?

**A:** Just like on a paper!

```
How to write:
1. Find ideas
2. Draft
3. Write
4. Spellcheck
5. Publish
```


### Blockquote

Sometimes, you might find the need to quote someone else,
either their post, the books they've written, etc.

You can do this using Blockquote.

Blockquotes indicates a group of text. This can be done by 
putting the symbol greater-than (`>`) before the start of the line.

**Example:**

```
This is a normal line.

> This is a single line followed by >.

> This paragraph spans
> multiple lines.
```

**Result:**
> This is a normal line.

> > This is a single line followed by >.

> > This paragraph spans
> > multiple lines.

**Question:**

How would you put their name inside the Blockquote?
Usually we put a dash (-) before the name, but when we type it like that,

```
> Doe not panic!
>
> - John Doe
```

> Doe not panic!
>
> - John Doe

It turns into a bullet point.

To write a literal dash, we type the dash twice (\-\-)

```
> Doe not panic!
>
> -- John Doe
```

> Doe not panic!
>
> -- John Doe


### Code Highlighting

You can put codes and have highlighting by using three backticks (\`\`\`)
followed by the language. Then put your code on a new line. Finally,
end by using three backticks (\`\`\`).

**Example:**

```
```html
<body>
  <p class="caption">Hello</p>
</body>
``````

**Result:**

```html
<body>
 <p class="caption">Hello</p>
</body>
```

Please note that language support depends on the highlighting engine
being used. If supported, the engine turns codes into the display format,
for example HTML in its "prettified" form. CSS is usually added so that
the browser shows the code in colors.

### Links
When we write documents, mainly websites, linking other pages is important.
Markdown provides various ways to write links.

The most common way is to simply put the link next to the text you want
to show as the link. The example below links to this page as a relative
link, meaning the file is in the current folder.
```
Introducing: [Markdown](markdown.html), the industry-standard format for writing articles!
```
> Introducing: [Markdown](markdown.html), the industry-standard format for writing articles!

You can also link to other websites by using the full URL.
```
Need to [search](https://www.google.com) something?
```
> Need to [search](https://www.google.com) something?

Here are couple of examples, showing both direct link and separate linking
in the reference.
```
There are several search engines. Namely [Bing][bing], [Google](http://google.com), and [Yahoo][100].

[bing]: http://bing.com
[100]: http://yahoo.com
```

> There are several search engines. Namely [Bing][bing], [Google](http://google.com), and [Yahoo][100].

[bing]: http://bing.com
[100]: http://yahoo.com

Conclusion
----------

That's the basic of Markdown. Hopefully you can start writing documents
in Markdown, equipped with the knowledge you have now.

Of course, this article barely scratches the surface. There are more
advanced resources you can find as you progress, like tables, Github
Flavored Markup (GFM), and many more that we did not cover.

We hope this article serves as a stepping stone for you to write in
Markdown.

Make sure to checkout [this][1] and [this(PDF)][2] for more information,
as well as resources you can find online to further improve your skills.


[1]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[2]: https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf
