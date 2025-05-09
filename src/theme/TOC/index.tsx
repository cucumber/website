import React, { type ReactNode } from 'react'
import TOC from '@theme-original/TOC'
import type TOCType from '@theme/TOC'
import type { WrapperProps } from '@docusaurus/types'
import { ImageAd } from '@site/src/components/Ads'

type Props = WrapperProps<typeof TOCType>

export default function TOCWrapper(props: Props): ReactNode {
  return (
    <>
      <ImageAd/>
      <TOC {...props} />
    </>
  )
}
