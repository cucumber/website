import React, { type ReactNode } from 'react'
import BlogLayout from '@theme-original/BlogLayout'
import type BlogLayoutType from '@theme/BlogLayout'
import type { WrapperProps } from '@docusaurus/types'
import { ImageAd, TextAd } from '@site/src/components/Ads'

type Props = WrapperProps<typeof BlogLayoutType>

/*
 * Render an ad in the TOC area (right side on desktop) for all blog routes, including
 * archives, tags, authors and posts themselves.
 */
export default function BlogLayoutWrapper(props: Props): ReactNode {
  return (
    <>
      <BlogLayout
        {...props}
        toc={
          <>
            <ImageAd target="desktop" id="ad-desktop-blog" />
            {props.toc}
          </>
        }
      >
        <TextAd target="mobile" id="ad-mobile-blog" />
        {props.children}
      </BlogLayout>
    </>
  )
}
