Markdown
========

Back to [Index](index.html#-markdown-markdown-html-)

What is it?
-----------

Markdown files (.md) are documents that are easy to view, whether
you view it on a browser (like Firefox) or using text editor (like Notepad).
This allows even visitors that uses ancient PCs for _surfing the web_ to access
our website.

But come on. This is not why we still write in Markdown as of today.
There are some practical applications that still applies today.

Motivation
-----------

So why do we need to use Markdown? Isn't it yet another format to 
display bunch of text on the internet?

Imagine writing website pages like how you normally would: a bunch of
html, links here and there, css files spread all over. Then, maybe some
point in live you decided to use frameworks, such as bootstrap. Things
do not go well, when you have to edit pages after pages one by one, adding
bootstrap css files to each header, assigning classes to `<div>` and what-not.

It is a nightmare.

Markdown, on the other hand contains just the document and a few other things;
not much. This is so unlike html documents which contains lots unimportant text
that are not content, but have to be there in order to have _nice display_.

Example
-------

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

While a typical markdown document looks like this.
```
Markdown
========

What is it?
-----------

Markdown files (.md) are documents that are easy to view, whether
you view it on a browser (think: website) or using text editor.
This means that you can open any markdown files with programs
such as notepad, and still be able to read it easily, as opposed
to reading (.html) files.
```