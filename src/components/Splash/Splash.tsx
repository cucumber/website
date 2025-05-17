import React, { FC } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { Hero } from '@site/src/components/Hero'
import styles from './Splash.module.scss'

export const Splash: FC = () => {
  const { siteConfig } = useDocusaurusContext()
  const platformsCount = siteConfig.customFields['platformsCount'] as number
  return (
    <Hero>
      <h1 className="hero__title">
        <strong>Cucumber</strong> lets you write automated tests in plain language
      </h1>
      <p className={clsx('hero__subtitle', styles.platforms)}>
        <img alt="" src="/img/platforms/java.svg" />
        <img alt="" src="/img/platforms/javascript.svg" />
        <img alt="" src="/img/platforms/ruby.svg" />
        <img alt="" src="/img/platforms/golang.svg" />
        <img alt="" src="/img/platforms/dotnet.svg" />
        <small className="margin-left--sm">+{platformsCount - 5} more platforms</small>
      </p>
      <div className={styles.ctas}>
        <Link className="button button--primary button--lg" to="/docs">
          Get Started
        </Link>
        <Link className="button button--secondary button--lg" to="/community">
          Join the Community
        </Link>
      </div>
    </Hero>
  )
}
