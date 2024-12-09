import {Config} from '@docusaurus/types';
import {themes} from 'prism-react-renderer';

const lightCodeTheme = themes.dracula;
const darkCodeTheme = themes.github;

export default {
  title: 'Cucumber',
  tagline: 'lets you write automated tests in plain language',
  favicon: 'img/logo.svg',
  stylesheets: ['//fonts.googleapis.com/css2?family=Inconsolata&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap'],

  // Set the production url of your site here
  url: 'https://cucumber.community',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'warn', // TODO change to throw once we start migrating docs
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cucumber/website/blob/main',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true, converters: ['yarn']}],
          ],
        },
        blog: {
          showReadingTime: false,
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true, converters: ['yarn']}],
          ],
        },
        pages: {
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true, converters: ['yarn']}],
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      // social card image
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
            position: 'left'
          },
          {
            to: '/sponsors',
            label: 'Sponsor',
            position: 'left'
          },
          {
            href: 'https://github.com/cucumber',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://communityinviter.com/apps/cucumberbdd/docs-page',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/cucumberbdd',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/cucumber',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/cucumber',
              },
              {
                label: 'OpenCollective',
                href: 'https://opencollective.com/cucumber',
              },
            ],
          },
        ],
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
        }
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['gherkin', 'java', 'ruby', 'scala']
      },
    }),
    plugins: [
      'docusaurus-plugin-sass'
    ]
} satisfies Config;
