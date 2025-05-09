import React, { type ReactNode } from 'react'
import Mobile from '@theme-original/DocItem/TOC/Mobile'
import type MobileType from '@theme/DocItem/TOC/Mobile'
import type { WrapperProps } from '@docusaurus/types'
import { TextAd } from '@site/src/components/Ads'

type Props = WrapperProps<typeof MobileType>

export default function MobileWrapper(props: Props): ReactNode {
  return (
    <>
      <TextAd target="mobile" />
      <Mobile {...props} />
    </>
  )
}
