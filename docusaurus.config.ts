import { Config } from '@docusaurus/types'
import { themes } from 'prism-react-renderer'
import { globbySync } from 'globby'
import YAML from 'yaml'
import { readFileSync } from 'node:fs'

const lightCodeTheme = {
  ...themes.jettwaveLight,
  plain: {
    ...themes.jettwaveLight.plain,
    backgroundColor: 'var(--ifm-hero-background-color)',
  },
}
const darkCodeTheme = {
  ...themes.jettwaveDark,
  plain: {
    ...themes.jettwaveDark.plain,
    backgroundColor: 'var(--ifm-hero-background-color)',
  },
}

const platformsCount = globbySync('docs/installation/*.md').length

const versions = YAML.parse(readFileSync('./versions.yaml', { encoding: 'utf-8' }))

export default {
  title: 'Cucumber',
  tagline: 'lets you write automated tests in plain language',
  favicon: 'img/logo.svg',
  stylesheets: [
    '//fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
  ],

  url: 'https://cucumber.io',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  markdown: {
    format: 'detect',
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/cucumber/website/blob/main',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true, converters: ['yarn'] }],
          ],
          rehypePlugins: [
            [
              require('rehype-rewrite'),
              {
                rewrite: (node) => {
                  if (node.type == 'text') {
                    node.value = node.value?.replaceAll(
                      /{{% ?version "(\w+)" ?%}}/g,
                      (match, name) => versions[name]
                    )
                  }
                },
              },
            ],
          ],
        },
        blog: {
          onInlineAuthors: 'ignore',
          showReadingTime: false,
          blogSidebarCount: 10,
          postsPerPage: 10,
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true, converters: ['yarn'] }],
          ],
        },
        pages: {
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true, converters: ['yarn'] }],
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        gtag: {
          trackingID: 'G-YY58V5DFE7',
          anonymizeIP: true,
        },
        sitemap: {
          lastmod: 'datetime',
          changefreq: 'weekly',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      metadata: [
        {
          name: 'description',
          content:
            "Cucumber is a tool for running automated acceptance tests, written in plain language. Because they're written in plain language, they can be read by anyone on your team, improving communication, collaboration and trust.",
        },
      ],
      // announcementBar: {
      //   id: 'december-2024-announcement',
      //   content:
      //     '📣 We have exciting news - <a href="/blog/open-source/cucumber-is-back-in-community-ownership">read the blog post</a> to learn more!',
      // },
      colorMode: {
        defaultMode: 'light',
      },
      image: 'img/logo.svg',
      navbar: {
        title: 'Cucumber',
        logo: {
          alt: 'Cucumber Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs',
            label: 'Documentation',
            position: 'left',
          },
          {
            to: '/learn',
            label: 'Learn',
            position: 'left',
          },
          {
            to: '/community',
            label: 'Community',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            to: '/sponsors',
            label: 'Sponsor',
            position: 'left',
          },
          {
            'aria-label': 'GitHub',
            href: 'https://github.com/cucumber',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        links: [],
        logo: {
          alt: 'Deploys by Netlify',
          src: 'https://www.netlify.com/v3/img/components/netlify-color-accent.svg',
          href: 'https://www.netlify.com',
        },
        copyright: `Copyright © 2014-${new Date().getFullYear()} The Cucumber Open Source Project`,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['gherkin', 'go', 'groovy', 'java', 'ruby', 'scala'],
      },
      algolia: {
        appId: 'KKV75IPBYX',
        apiKey: 'a705efaaffbb238f98333b0d13b05034',
        indexName: 'cucumber',
        contextualSearch: true,
        searchParameters: {},
      },
    },
  plugins: ['docusaurus-plugin-sass'],
  customFields: {
    platformsCount,
    versions,
  },
} satisfies Config
