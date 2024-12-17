import React, { FC } from 'react'
import clsx from 'clsx'
import CodeBlock from '@theme/CodeBlock'
import { feature } from './feature'
import styles from './Intro.module.scss'
import Link from '@docusaurus/Link'

export const Intro: FC = () => {
  return (
    <div className="container padding-vert--lg">
      <div className={styles.example}>
        <CodeBlock language="gherkin" title="features/withdrawing-cash.feature">
          {feature}
        </CodeBlock>
      </div>
      <div className="text--center">
        <p className="margin-top--lg margin-bottom--sm">Got 10 minutes?</p>
        <Link className="button button--secondary button--lg" to="docs/guides/10-minute-tutorial">
          Take the Tutorial
        </Link>
      </div>
    </div>
  )
}
