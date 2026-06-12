import React, { FC } from 'react'
import Link from '@docusaurus/Link'
import clsx from 'clsx'
import styles from './SponsorTiers.module.scss'
import tiers from '@site/src/data/sponsor-tiers.json'

const numberFormat = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export const SponsorTiers: FC = () => {
  return (
    <ol className={clsx('row', styles.list)}>
      {tiers.map((tier) => (
        <li key={tier.amount} className={clsx('col margin-bottom--lg', styles.tier)}>
          <div className={clsx('card', styles.card)}>
            <div className="card__header">
              <h3>{tier.title}</h3>
            </div>
            <div className="card__body">
              <b className={styles.amount}>{numberFormat.format(tier.amount)}</b>
              <span className={styles.frequency}>{tier.from && 'or above, '}monthly</span>
              <p className={clsx('margin-vert--md', styles.blurb)}>{tier.description}</p>
            </div>
            <div className="card__footer">
              <Link className="button button--block button--primary" href={tier.url}>
                Sponsor
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
