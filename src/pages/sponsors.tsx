import React, { FC } from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import styles from './sponsors.module.scss'
import clsx from 'clsx'
import Head from '@docusaurus/Head'

const numberFormat = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const tiers = [
  {
    title: 'Individual',
    description: 'For individuals who want to support the project',
    amount: 5,
    url: 'https://opencollective.com/cucumber/contribute/monthly-backers-182/checkout',
    from: true,
    className: '',
  },
  {
    title: 'Bronze',
    description:
      'Support the contributors with a monthly donation and, if you want, get your name and a small logo on the Cucumber website with a link to your site.',
    amount: 100,
    url: 'https://opencollective.com/cucumber/contribute/bronze-sponsors-181/checkout',
    from: false,
    className: '',
  },
  {
    title: 'Silver',
    description:
      'Support the contributors with a monthly donation and, if you want, get your name and a medium logo on the Cucumber website with a link to your site.',
    amount: 500,
    url: 'https://opencollective.com/cucumber/contribute/gold-sponsors-3224/checkout',
    from: false,
    className: '',
  },
  {
    title: 'Gold',
    description:
      'Support the contributors with a monthly donation and, if you want, get your name, large logo, and subtitle on the Cucumber website with a link to your site.',
    amount: 1000,
    url: 'https://opencollective.com/cucumber/contribute/gold-82673/checkout',
    from: false,
    className: 'col--offset-2',
  },
  {
    title: 'Platinum',
    description:
      'Support the contributors with a monthly donation and, if you want, get your name, large logo, subtitle and short paragraph on the Cucumber website with a link to your site.',
    amount: 2500,
    url: 'https://opencollective.com/cucumber/contribute/platinum-82674/checkout',
    from: false,
    className: '',
  },
] as const

const Tiers: FC = () => {
  return (
    <ol className={clsx('row', styles.list)}>
      {tiers.map((tier) => {
        return (
          <li key={tier.amount} className={clsx('col col--4 margin-bottom--lg', tier.className)}>
            <div className={clsx('card', styles.card)}>
              <div className="card__header">
                <h3>{tier.title}</h3>
              </div>
              <div className="card__body">
                <b className={styles.amount}>{numberFormat.format(tier.amount)}</b>
                <span className={styles.frequency}>{tier.from && 'or above, '}monthly</span>
                <p className={clsx('margin-top--md', styles.blurb)}>{tier.description}</p>
              </div>
              <div className="card__footer">
                <Link className="button button--block button--secondary" href={tier.url}>
                  Sponsor
                </Link>
              </div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export default function Sponsors() {
  return (
    <Layout>
      <Head>
        <title>Sponsor Cucumber</title>
        <meta
          name="description"
          content="Cucumber was downloaded over 100 million times in 2023. Financial contributions ensure the team can get paid for their time, and that Cucumber will
            remain a reliable and fun way to test your software for years to come."
        />
      </Head>
      <main>
        <div className="container readable-blurb text--center padding-vert--lg">
          <h1>Sponsor Cucumber</h1>
          <p>Cucumber was downloaded over 100 million times in 2023.</p>
          <p>
            Thousands of companies rely on Cucumber tests to validate their software. We are a team
            of volunteers who maintain the core Gherkin parser, the Java, Ruby, JavaScript and Go
            flavoured implementations of Cucumber. That's a lot of work!
          </p>
          <p>
            Financial contributions ensure the team can get paid for their time, and that Cucumber
            will remain a reliable and fun way to test your software for years to come.
          </p>
          <p>
            <Link
              className="button button--lg button--primary"
              href="https://opencollective.com/cucumber/donate"
            >
              Donate Now
            </Link>
          </p>
        </div>
        <div className="container padding-vert--lg">
          <p className="text--center">
            If you can, we'd love for you to commit a regular amount to support Cucumber.
          </p>
          <Tiers />
          <div className="text--center">
            <p className="margin-bottom--sm">
              Or, you can always make a{' '}
              <Link href="https://opencollective.com/cucumber/donate">one-time donation</Link>.
            </p>
          </div>
        </div>
        <div className="container text--center padding-vert--lg">
          <h2>Why sponsor?</h2>
          <p className="readable-blurb margin-bottom--lg">
            Your sponsorship will directly contribute to the core team's most important and
            impactful work:
          </p>
          <div className="row">
            <div className="col col--4">
              <img
                className={clsx(styles.reasonIllustration, 'margin-bottom--md')}
                alt=""
                src="/img/illustrations/admin.svg"
              />
              <h3>Boring stuff</h3>
              <p className="padding-horiz--sm">
                Releases, security, bug fixes, issue triage. Domains, hosting, tools, admin.
                Unglamorous but essential.
              </p>
            </div>
            <div className="col col--4">
              <img
                className={clsx(styles.reasonIllustration, 'margin-bottom--md')}
                alt=""
                src="/img/illustrations/code.svg"
              />
              <h3>Extensibility</h3>
              <p className="padding-horiz--sm">
                Adapting our architecture so you - and other tools you love - can extend Cucumber
                for whatever you need.
              </p>
            </div>
            <div className="col col--4">
              <img
                className={clsx(styles.reasonIllustration, 'margin-bottom--md')}
                alt=""
                src="/img/illustrations/docs.svg"
              />
              <h3>Documentation</h3>
              <p className="padding-horiz--sm">
                Expanding and improving the docs so it's as easy as possible for people to be
                successful with Cucumber.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
