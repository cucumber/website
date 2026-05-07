import React, { FC } from 'react'
import Link from '@docusaurus/Link'
import styles from './SponsorNames.module.scss'

interface Sponsor {
  name: string
  logo: string
  url: string
  blurb?: string
}

interface SponsorNamesProps {
  sponsors: ReadonlyArray<Sponsor>
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const SponsorNames: FC<SponsorNamesProps> = ({ sponsors, size = 'lg' }) => {
  if (sponsors.length === 0) return null
  return (
    <ul className={styles.list}>
      {sponsors.map((sponsor) => (
        <li key={sponsor.name} className="margin-bottom--md">
          <Link href={sponsor.url} rel="noopener noreferrer" className={`avatar ${styles.sponsor}`}>
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
