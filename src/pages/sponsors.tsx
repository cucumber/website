import React, { FC } from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import styles from './sponsors.module.scss'
import clsx from 'clsx'
import Head from '@docusaurus/Head'
import { Hero } from '@site/src/components/Hero'
import goldSponsors from '@site/src/data/gold-sponsors.json'
import silverSponsors from '@site/src/data/silver-sponsors.json'
import bronzeSponsors from '@site/src/data/bronze-sponsors.json'
import { DownloadCounter } from '@site/src/components/DownloadCounter'

interface Sponsor {
  name: string
  logo: string
  url: string
  blurb?: string
}

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
                <Link className="button button--block button--primary" href={tier.url}>
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

interface SponsorsListProps {
  sponsors: Sponsor[]
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const SponsorsList: FC<SponsorsListProps> = ({ sponsors, size = 'lg' }) => {
  if (sponsors.length === 0) return null
  return (
    <ul className={styles.list}>
      {sponsors.map((sponsor) => (
        <li key={sponsor.name} className="margin-bottom--md">
          <Link
            href={sponsor.url}
            rel="noopener noreferrer"
            className={`avatar ${styles.sponsor}`}
          >
            <img
              className={`avatar__photo avatar__photo--${size} ${styles.sponsorLogo}`}
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
            />
            <div className="avatar__intro">
              <div className="avatar__name">{sponsor.name}</div>
              {sponsor.blurb && <small className="avatar__subtitle">{sponsor.blurb}</small>}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function Sponsors() {
  return (
    <Layout>
      <Head>
        <title>Sponsor Cucumber</title>
        <meta
          name="description"
          content="Cucumber is a community-driven project and relies on sponsorship to fund its development. Please consider sponsoring if you can."
        />
      </Head>
      <Hero>
        <h1 className="hero__title">
          <strong>Sponsor</strong> Cucumber
        </h1>
        <p className="hero__subtitle">
          Cucumber is a community-driven project and relies on sponsorship to fund its development.
          Please consider sponsoring if you can.
        </p>
        <Link
          className="button button--lg button--primary"
          href="https://opencollective.com/cucumber/donate"
        >
          Donate Now
        </Link>
      </Hero>
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--8">
              <div className="margin-bottom--md">
                <DownloadCounter />
              </div>
              <p>
                Cucumber was downloaded over <strong>200 million times</strong> in 2025. Thousands
                of companies rely on Cucumber tests to validate their software. We are a team of
                volunteers who maintain the core Gherkin parser, the Java, Ruby, JavaScript and Go
                flavoured implementations of Cucumber. That's a lot of work!
              </p>
              <p>
                Financial contributions ensure the team can get paid for their time, and that
                Cucumber will remain a reliable and fun way to test your software for years to come.
              </p>
            </div>
            <div className="col col--3 col--offset-1">
              {goldSponsors.length > 0 && (
                <>
                  <h3>Gold Sponsors</h3>
                  <SponsorsList sponsors={goldSponsors} size="xl" />
                </>
              )}
              {silverSponsors.length > 0 && (
                <>
                  <h3>Silver Sponsors</h3>
                  <SponsorsList sponsors={silverSponsors} size="lg" />
                </>
              )}
              {bronzeSponsors.length > 0 && (
                <>
                  <h3>Bronze Sponsors</h3>
                  <SponsorsList sponsors={bronzeSponsors} size="sm" />
                </>
              )}
            </div>
          </div>
        </div>
        <div className="container margin-vert--xl">
          <h2 className="text--center">Sponsorship tiers</h2>
          <p className="text--center">
            If you can, we'd love for you to commit a regular monthly amount to support Cucumber.
          </p>
          <Tiers />
          <div className="text--center">
            <p className="margin-bottom--sm">
              Or, you can always make a{' '}
              <Link href="https://opencollective.com/cucumber/donate">one-time donation</Link>.
            </p>
          </div>
        </div>
        <div className="container margin-vert--xl text--center">
          <h2>Why sponsor?</h2>
          <p className="margin-bottom--lg">
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
