import React, { FC } from 'react'
import clsx from 'clsx'
import sortBy from 'lodash.sortby'
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from '@docusaurus/plugin-content-docs/client'
import Link from '@docusaurus/Link'
import styles from './Implementations.module.scss'
import { ImplementationStatus } from './types'
import { StatusBadge } from './StatusBadge'
import { PropSidebarItemLink } from '@docusaurus/plugin-content-docs'

interface CustomProps {
  bigThree: boolean
  language: string
  status: ImplementationStatus
  icon: string
}

interface ImplementationItem extends CustomProps {
  href: string
  label: string
  order: number
}

const STATUS_ORDER = ['big-three', 'official', 'semi-official', 'unofficial', 'unmaintained']

export const Implementations: FC = () => {
  const items = useCurrentSidebarCategory().items.map((item: PropSidebarItemLink) => {
    const customProps = item.customProps as unknown as CustomProps
    return {
      href: item.href,
      label: item.label,
      ...customProps,
      order: STATUS_ORDER.indexOf(customProps.bigThree ? 'big-three' : customProps.status),
    } as ImplementationItem
  })
  const sortedItems = sortBy(items, ['order', 'label'])
  return (
    <ul className={clsx('row row--no-gutters', styles.list)}>
      {sortedItems.map((item, index) => {
        return (
          <li key={index} className="col col--4 padding--sm">
            <Link href={item.href} className={clsx('card', styles.card)}>
              <div className={clsx('card__body', styles.body)}>
                <div className={styles.logo}>
                  <img alt="" src={`/img/platforms/${item.icon}`} />
                </div>
                <p>
                  <strong>{item.label}</strong>
                  <br />
                  <span>{item.language}</span>
                </p>
                <div className="text--right">
                  <StatusBadge status={item.status} />
                </div>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
