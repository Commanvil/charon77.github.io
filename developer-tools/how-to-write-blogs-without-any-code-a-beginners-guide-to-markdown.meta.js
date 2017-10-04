const OpenGraph = require('ogp-meta')

function getMeta() {
	let ogp = new OpenGraph()
	ogp.type("article")
	ogp.title("How to write blogs without any code: A Beginner’s guide to Markdown")
	ogp.url("http://charon77.github.io/developer-tools/how-to-write-blogs-without-any-code-a-beginners-guide-to-markdown.html")
	ogp.image("http://charon77.github.io/img/stock/pexels-photo-597331.jpeg")
	ogp.description(
"Making websites is not for everyone. Some of you \
might already be using Wordpress or Blogspot. But they do come \
with their own cost: they're a bit tricky to configure, and they're \
an overkill if all you need is writing content. \
What if you want to spend **less** time setting up Wordpress, \
or configuring Blogspot, and **more** on _actually_ writing content? \
")

	let header = "<title>How to write blogs without any code: A Beginner’s guide to Markdown</title>"

	header += ogp.toHTML()

	return header
}

module.exports = getMeta