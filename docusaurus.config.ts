import { Config } from '@docusaurus/types'
import { themes } from 'prism-react-renderer'
import YAML from 'yaml'
import { readFileSync } from 'node:fs'

const lightCodeTheme = themes.jettwaveLight
const darkCodeTheme = {
  ...themes.jettwaveDark,
  plain: {
    ...themes.jettwaveDark.plain,
    backgroundColor: 'var(--ifm-navbar-background-color)'
  }
}

export default {
  title: 'Cucumber',
  tagline: 'lets you write automated tests in plain language',
  favicon: 'img/logo.svg',
  stylesheets: [
    '//fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
  ],

  url: 'https://cucumber.community',
  baseUrl: '/',

  onBrokenLinks: 'warn', // TODO change to throw once we start migrating docs
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
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      metadata: [{ name: 'robots', content: 'noindex' }],
      colorMode: {
        disableSwitch: true,
        respectPrefersColorScheme: true,
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
        copyright: `Copyright © ${new Date().getFullYear()} The Cucumber Open Source Project`,
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
    },
  plugins: ['docusaurus-plugin-sass'],
  customFields: {
    versions: YAML.parse(readFileSync('./versions.yaml', { encoding: 'utf-8' })),
  },
} satisfies Config
