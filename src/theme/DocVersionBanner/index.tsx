import React, { type ReactNode } from 'react'
import DocVersionBanner from '@theme-original/DocVersionBanner'
import type DocVersionBannerType from '@theme/DocVersionBanner'
import type { WrapperProps } from '@docusaurus/types'
import { TextAd } from '@site/src/components/Ads'

type Props = WrapperProps<typeof DocVersionBannerType>

export default function DocVersionBannerWrapper(props: Props): ReactNode {
  return (
    <>
      <TextAd target="mobile" id="ad-mobile-docs" />
      <DocVersionBanner {...props} />
    </>
  )
}
