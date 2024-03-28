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
            'https://github.com/vegetable-specification-society/website/blob/main',
        },
        blog: {
          showReadingTime: false
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
            to: 'https://cucumber.io/docs/installation',
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
            title: 'Flavours',
            items: [
              {
                className: 'footer__link-item flavour flavour--ruby',
                label: 'cucumber-ruby',
                to: 'https://github.com/cucumber/cucumber-ruby',
              },
              {
                className: 'footer__link-item flavour flavour--jvm',
                label: 'cucumber-jvm',
                to: 'https://github.com/cucumber/cucumber-jvm',
              },
              {
                className: 'footer__link-item flavour flavour--js',
                label: 'cucumber-js',
                to: 'https://github.com/cucumber/cucumber-js',
              },
              {
                className: 'footer__link-item flavour flavour--go',
                label: 'godog',
                to: 'https://github.com/cucumber/godog',
              },
            ],
          },
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
        copyright: `Copyright © ${new Date().getFullYear()} Cucumber. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['gherkin']
      },
    }),

    plugins: [
      'docusaurus-plugin-sass'
    ]
} satisfies Config;
