# Contributing

(See <https://github.com/cucumber/.github/blob/main/CONTRIBUTING.md> for general advice on contributing to Cucumber. Please also read the [Code of Conduct](https://github.com/cucumber/.github/blob/main/CODE_OF_CONDUCT.md).)

The Cucumber documentation is open source and anyone is welcome to contribute. In fact, we'd really appreciate your help!

You can make changes to the documentation by forking this repo and making a pull request. The title should explain which docs you are modifying/creating and why. Each pull request should only modify/add a single topic. Please don't lump many unrelated document changes into the same pull request. If you want to modify or add multiple topics, please open one pull request per topic.

Documentation content is written in Markdown.

## Writing style

In general, the documentation should be brief and to the point.

> Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away - Antoine de Saint Exupéry

Some guidelines:

* Every page should start with an informational/motivational paragraph
* Paragraphs should be short enough to be readable, but long enough to develop an idea
* Every page should start with a `h1` heading. Sections use `h2`; subsections use `h3`
* Break long lines. Insert a new line at around column 80. This is important because review comments can only be added to a line.
* Write in present tense
* Use neutral language, but try to make it a little entertaining (this is hard!)
* Write in a platform-neutral way as much as possible. Cucumber is implemented in several languages, and the docs should not assume a particular platform
* All documents should use [British English](https://en.wikipedia.org/wiki/British_English). Contributions in [American English](https://en.wikipedia.org/wiki/American_English) are fine - editors will do the translation.
* Use links to external sites sparingly
* Do not use copyrighted material (images, text or other)
* Illustrations are great, but please use lo-fi drawings; Cucumber's design team will recreate illustrations according to Cucumber's [brand guidelines](https://github.com/cucumber-ltd/brand)
* Try to keep your contribution *consistent* with the current documentation. For instance:
    * Use consistent wording and formatting
    * Use lower case when referring to concepts in a sentences: e.g. "step definition" instead of "Step Definition"

### Tutorial style

* Assume the reader has little or no knowledge of the topic
* Use a conversational style
* Make sure each step in the tutorial is clearly described
* If needed, describe what the result of each step should be

## Polyglot content

Some of the content in the docs is polyglot - that is, offered in multiple programming languages. We can vary the language-specific content within a single page using some custom React components and MDX. If the page you're editing requires polyglot content, first ensure it has an `.mdx` extension - you can rename from `.md` if needed.

### Tabs

You can use the `<Tabs>` and `<Tab>` components in any MDX page, without adding any imports. Example usage:

```mdx
Here is some polyglot content:

<Tabs>
    <Tab value="java">The Java content</Tab>
    <Tab value="ruby">The Ruby content</Tab>
    <Tab value="javascript">The JavaScript content</Tab>
</Tabs>
```

Under the hood, this is leaning on [Docusaurus's Tabs functionality](https://docusaurus.io/docs/markdown-features/tabs). The language selection will:

- Sync across different groups of tabs in the same page
- Be remembered across different pages
- Update the URL via the `lang` query parameter, so language-specific URLs are shareable

#### Once

The above works great when you have a large body of platform-agnostic content with a few code/configuration samples sprinkled in. However, sometimes the content varies significantly per language/platform, and the flow would be broken by repeated instances of tabs. In these cases, you can surface the language choice once at the start, and use the selection to vary content at any point in the rest of the document using the `<Content>` component:

```mdx
# Some detailed topic

<Tabs once="java,javascript,ruby" />

(later)

<Content lang="java">
    Java-specific content.
</Content>

<Content lang="javascript,ruby">
    This applies to both JavaScript and Ruby.
</Content>
```

This flavour of the tabs has all the properties mentioned in the previous section, but they'll also stick to the top of the document as you scroll.

### Term

Sometimes, a bit of specific terminology varies between languages, but we still want to keep the content on one page. For these cases we can use the `<Term>` component which supports a few shorthands that are resolved to the correct language-specific terminology. You can see the available terms in [`terms.json`](./src/components/Polyglot/terms.json)

## Media

If you want to embed a YouTube video in a doc or blog post, you can use this (pre-imported) MDX component, passing in the video's identifier as a prop:

```mdx
Here's a video of what happened:

<YouTubeVideo video="JuWEQsE7Hlo" />
```

## Small docs edits

If you just want to make a small-ish edit to a doc, you can avoid the overhead of spinning up the site locally by following the "Edit this page" link at the bottom of the doc, which will take you to GitHub where you can propose an edit. Once you raise a pull request, Netlify will comment with a link to a deployed preview so you can see what your change will look like.

Each pull request should only modify/add a single topic. Please don't lump many unrelated document changes into the same pull request. If you want to modify or add multiple topics, please open one pull request per topic.

## Running locally

The site is built with [Docusaurus](https://docusaurus.io/). To work on it locally, you'll need [Node.js](https://nodejs.org/) and npm installed.

```shell
npm install
npm start
```

This starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.