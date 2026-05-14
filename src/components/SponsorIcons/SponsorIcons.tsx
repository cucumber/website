import React, { FC } from 'react'
import Link from '@docusaurus/Link'
import styles from './SponsorIcons.module.scss'

interface Sponsor {
  name: string
  logo: string
  url: string
}

interface SponsorIconsProps {
  sponsors: ReadonlyArray<Sponsor>
}

export const SponsorIcons: FC<SponsorIconsProps> = ({ sponsors }) => {
  return (
    <ul className={styles.logosList}>
      {sponsors.map((sponsor) => (
        <li key={sponsor.name}>
          <Link href={sponsor.url} rel="noopener noreferrer">
            <img alt={`${sponsor.name} logo`} src={sponsor.logo} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
