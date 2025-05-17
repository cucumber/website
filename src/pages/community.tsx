import Layout from '@theme/Layout'
import React from 'react'
import clsx from 'clsx'
import styles from './community.module.scss'
import Link from '@docusaurus/Link'
import { Subscribe } from '@site/src/components/Newsletter'
import Head from '@docusaurus/Head'
import { Hero } from '@site/src/components/Hero'

export default function Community() {
  return (
    <Layout>
      <Head>
        <title>The Cucumber Community</title>
        <meta
          name="description"
          content="Cucumber has a thriving community made up of kinds of people, from the project's long-standing maintainers to first-time users and everyone in between."
        />
      </Head>
      <Hero>
        <h1 className="hero__title">
          The Cucumber <strong>Community</strong>
        </h1>
        <p className="hero__subtitle">
          Cucumber has a thriving community made up of kinds of people, from the project's
          long-standing maintainers to first-time users and everyone in between.
        </p>
        <Subscribe />
      </Hero>
      <main>
        <div className="container margin-vert--xl">
          <div className="text--center readable margin-bottom--lg">
            <h2>Where to find us</h2>
            <p>
              Wherever you interact with the Cucumber community, always remember to respect and
              uphold our{' '}
              <Link to="https://github.com/cucumber/.github/tree/main?tab=coc-ov-file">
                Code of Conduct
              </Link>
              .
            </p>
          </div>
          <div className="row text--center">
            <div className="col col--4">
              <img
                className={clsx(styles.platformLogo, 'margin-bottom--md')}
                alt=""
                src="/img/community/discord.svg"
              />
              <p className="padding-horiz--sm">
                We're now on <strong>Discord</strong> for day-to-day chat about all things Cucumber.
                Drop by and say hello.
              </p>
              <Link className="button button--secondary" to="https://discord.gg/8YXBH8j74w">
                Join our Server
              </Link>
            </div>
            <div className="col col--4">
              <img
                className={clsx(styles.platformLogo, 'margin-bottom--md')}
                alt=""
                src="/img/community/github.svg"
              />
              <p className="padding-horiz--sm">
                If you have questions about using Cucumber, or ideas for improving it, try our{' '}
                <strong>GitHub Discussions</strong>.
              </p>
              <Link
                className="button button--secondary"
                to="https://github.com/orgs/cucumber/discussions"
              >
                Browse Discussions
              </Link>
            </div>
            <div className="col col--4">
              <img
                className={clsx(styles.platformLogo, 'margin-bottom--md')}
                alt=""
                src="/img/community/stack-overflow.svg"
              />
              <p className="padding-horiz--sm">
                Stuck? Many people use <strong>Stack Overflow</strong> to ask or answer questions
                about Cucumber.
              </p>
              <Link
                className="button button--secondary"
                to="https://stackoverflow.com/questions/tagged/cucumber"
              >
                Find Answers
              </Link>
            </div>
          </div>
        </div>
        <div className="container margin-vert--xl text--center readable">
          <h2>Want to contribute?</h2>
          <p className="">
            There are many kinds of contributions, besides just code.{' '}
            <Link to="/docs/contributing">You can get involved</Link>.
          </p>
        </div>
      </main>
    </Layout>
  )
}
