Markdown - Spend More Time on Writing, Not Formatting
======================================================

Back to [Index](index.html#-markdown-markdown-html-)

Humans are always about writings, ever since historical times.
Even in the current digital age, writings stay relevant on The Internet.
In this section, we will cover a document format called Markdown, that
is easy to write, looks nice in both browsers and text editors, and
hassle-free.

Motivation
-----------

Imagine writing website pages. How would you normally do it? A bunch of
html, links here and there, css files spread all over. What if, maybe some
point in life you decided to use frameworks, such as Bootstrap. Things
would not go well, when you have to edit pages after pages, adding
css files to each and every files, assigning classes to `<div>`s and what-not.

Wouldn't it be nice if we can spend more time **actually** write content, and
not figuring out where the closing `</div>` tags are?

Markdown solves this problem.

Markdown, on the other hand contains just the document and a few other things;
not much. This is so unlike html documents which contains lots unimportant text
that are not content, but have to be there in order to have _nice display_.

What is it?
-----------

Markdown files (.md) are documents that are easy to view, whether
you view it on a browser (like Firefox) or using text editor (like Notepad).
This allows even visitors that uses ancient PCs for _surfing the web_ to access
our website.

Even today, people still favor Markdown for its readability (when viewed as a plain text)
and its simplicity.

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
  <h1 id="markdown">Markdown
  </h1>

  <h2 id="what-is-it-">What is it?
  </h2>

  <p>Markdown files (.md) are documents that are easy to view, whether
  you view it on a browser (think: website) or using text editor.
  This means that you can open any markdown files with programs
  such as notepad, and still be able to read it easily, as opposed
  to reading (.html) files.
  </p>
  </body>
</html>
```

If you are familiar with html, you know immediately that what's really
important is just the heading: **`Markdown`**, the sub-heading, **`What is it?`**, and
the body of the paragraph surrounded by `<p>...</p>`.

Now, let's compare it to Markdown.

A typical Markdown document looks like this.
```
Markdown
========

Back to [Index](index.html#-markdown-markdown-html-)

What is it?
-----------

Markdown files (.md) are documents that are easy to view, whether
you view it on a browser (like Firefox) or using text editor (like Notepad).
This allows even visitors that uses ancient PCs for _surfing the web_ to access
our website.
```

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

Let that sink for a second.

What about writing the title, and putting some sort of underline below it?
Write something like this.

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

There are two ways to make headings.

1.  Equal sign (=) or Dash sign (-) at the _bottom_ of the heading.
    
    Personally, I prefer this method as it looks clearer in plaintext.
    You can use this format **only** for Heading 1 and Heading 2. For
    levels below it, revert to the \# format.
    
    **Example:**
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
    **Result:**
    > Heading 1
    > =========    
    > Some text over here
    > 
    > Heading 2
    > ----------
    > 
    > The quick brown fox jumps over the lazy dog.
    > --------------------------------------------

2.  Hashes (\#) can also be used before the heading. Think about it.
    If you put any sort of symbol before a text, you would easily find it,
    as you only need to skim through the first character.
    
    In Markdown, this is useful when your heading is more than two levels deep,
    as = and - can only be used for level 1 and level 2 respectively.
    Hashes can mark headings from 1 to 6, depending on how many hashes
    do you use.

    **Example:**
```
    # This is heading 1
    Some text.
    ## Heading 2
    ### Heading 3
    ...
    ###### Heading 6
    More text!
```
    
    **Which yields to:**
    
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
