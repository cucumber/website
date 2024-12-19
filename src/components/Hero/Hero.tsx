import React, { FC } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './Hero.module.scss'

export const Hero: FC = () => {
  const { siteConfig } = useDocusaurusContext()
  const platformsCount = siteConfig.customFields['platformsCount'] as number
  return (
    <header className="hero">
      <div className="container text--center">
        <h1 className="hero__title">
          <strong>Cucumber</strong>&nbsp;
          <span className="text--light">
            lets you write
            <br />
            automated tests in plain language
          </span>
        </h1>
        <div className={clsx('margin-vert--md', styles.ctas)}>
          <Link className="button button--primary button--lg" to="/docs">
            Get Started
          </Link>
          <Link className="button button--secondary button--lg" to="/community">
            Join the Community
          </Link>
        </div>
        <p className="readable-blurb">
          Cucumber is a tool for running automated acceptance tests, written in{' '}
          <strong>plain language</strong>. Because they're written in plain language, they can be
          read by <strong>anyone</strong> on your team, improving <strong>communication</strong>,{' '}
          <strong>collaboration</strong> and <strong>trust</strong>.
        </p>
        <div className={styles.platforms}>
          <img alt="" src="/img/platforms/java.svg" />
          <img alt="" src="/img/platforms/javascript.svg" />
          <img alt="" src="/img/platforms/ruby.svg" />
          <img alt="" src="/img/platforms/golang.svg" />
          <img alt="" src="/img/platforms/dotnet.svg" />
          <small className="margin-left--sm">+{platformsCount - 4} more platforms</small>
        </div>
      </div>
    </header>
  )
}
