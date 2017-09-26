Markdown - Spend More Time on Writing, Not Formatting
======================================================

Back to [Index](index.html#-markdown-markdown-html-)


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

Commonly used Markdown
----------------------
Here are some of the basic Markdown example to get started.

Unlike HTML, there are no 'basic structure' in Markdown. You can just
write as if you're writing in any word processors such as Notepad, and
you are already writing in Markdown. There are some features described
below, describing how certain texts should be displayed.

This section is based on [this][1] and [this(pdf)][2], which are really useful
for starters learning how to use Markdown for the first time.


### Paragraphs
A paragraph in Markdown is just some lines of text. A blank line
separates paragraphs.

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

### Headings

Headings marks the beginning of a section.

Two main ways of writing headings.
1.  Hashes (\#) followed by the heading.
    
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
    
2.  Equal sign (=) or Minus sign (-) at the _bottom_ of the heading.
    
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

### Blockquote

Blockquotes indicates a group of text,
sometimes to quote someone else. This can be done by 
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

[1]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[2]: https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf
