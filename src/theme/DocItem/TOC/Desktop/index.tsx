import React, { type ReactNode } from 'react'
import Desktop from '@theme-original/DocItem/TOC/Desktop'
import type DesktopType from '@theme/DocItem/TOC/Desktop'
import type { WrapperProps } from '@docusaurus/types'
import { ImageAd } from '@site/src/components/Ads'

type Props = WrapperProps<typeof DesktopType>

/*
 * Render an ad in the TOC area (right side on desktop) for all docs where a TOC is rendered.
 * (It's not currently possible to force the TOC area to render on every page.)
 */
export default function DesktopWrapper(props: Props): ReactNode {
  return (
    <>
      <ImageAd target="desktop" id="ad-desktop-docs" />
      <Desktop {...props} />
    </>
  )
}
