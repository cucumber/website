import React from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import styles from './sponsors.module.scss'
import clsx from 'clsx'
import Head from '@docusaurus/Head'
import { Hero } from '@site/src/components/Hero'
import goldSponsors from '@site/src/data/gold-sponsors.json'
import silverSponsors from '@site/src/data/silver-sponsors.json'
import bronzeSponsors from '@site/src/data/bronze-sponsors.json'
import inKindSponsors from '@site/src/data/in-kind-sponsors.json'
import { DownloadCounter } from '@site/src/components/DownloadCounter'
import { SponsorIcons } from '@site/src/components/SponsorIcons'
import { SponsorNames } from '@site/src/components/SponsorNames'
import { SponsorTiers } from '@site/src/components/SponsorTiers'

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
                  <SponsorNames sponsors={goldSponsors} size="xl" />
                </>
              )}
              {silverSponsors.length > 0 && (
                <>
                  <h3>Silver Sponsors</h3>
                  <SponsorNames sponsors={silverSponsors} size="lg" />
                </>
              )}
              {bronzeSponsors.length > 0 && (
                <>
                  <h3>Bronze Sponsors</h3>
                  <SponsorNames sponsors={bronzeSponsors} size="sm" />
                </>
              )}
              {inKindSponsors.length > 0 && (
                <>
                  <h3>In-Kind Sponsors</h3>
                  <p>Our thanks to these companies for supporting open source with free/subsidised plans.</p>
                  <SponsorIcons sponsors={inKindSponsors} />
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
          <SponsorTiers />
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
