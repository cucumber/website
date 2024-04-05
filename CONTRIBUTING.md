# Contributing

See <https://github.com/cucumber/.github/blob/main/CONTRIBUTING.md> for general advice on contributing to Cucumber. Please also read the [Code of Conduct](https://github.com/cucumber/.github/blob/main/CODE_OF_CONDUCT.md).

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

### Term

Sometimes, a bit of specific terminology varies between languages, but we still want to keep the content on one page. For these cases we can use the `<Term>` component which supports a few shorthands that are resolved to the correct language-specific terminology. You can see the available terms in [`terms.json`](./src/components/Polyglot/terms.json)


