import { FC, ReactElement, ReactNode } from 'react'
import DocusaurusTabs from '@theme/Tabs'
import DocusaurusTabItem from '@theme/TabItem'
import { LANGUAGES } from './constants'
import styles from './Tabs.module.scss'
import clsx from 'clsx'

interface TabsProps {
  once?: string
  children?: ReactElement<TabProps>[]
}

interface TabProps {
  lang: string
  children: ReactNode
}

export const Tabs: FC<TabsProps> = ({ once, children }) => {
  if (once) {
    const keys = once.split(',')
    return (
      <div className={styles.onceScroller}>
        <DocusaurusTabs className={styles.onceTabs} groupId="lang" queryString>
          {keys.map((key) => {
            return (
              <DocusaurusTabItem
                key={key}
                value={key}
                label={LANGUAGES[key]}
                attributes={{ className: clsx(styles.languageTab, styles['languageTab--' + key]) }}
              >
                &nbsp;
              </DocusaurusTabItem>
            )
          })}
        </DocusaurusTabs>
      </div>
    )
  }
  return (
    <DocusaurusTabs groupId="lang" queryString>
      {(Array.isArray(children) ? children : [children]).flatMap((child) => {
        const keys = child.props.lang.split(',')
        return keys.map((key) => {
          return (
            <DocusaurusTabItem
              key={key}
              value={key}
              label={LANGUAGES[key]}
              attributes={{ className: 'language-tab language-tab--' + key }}
            >
              {child.props.children}
            </DocusaurusTabItem>
          )
        })
      })}
    </DocusaurusTabs>
  )
}

export const Tab: FC<TabProps> = () => {
  // no-op component impl - see remapping in <Tabs> above
  throw '<Tab> must be used inside of <Tabs>'
}
