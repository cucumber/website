import React, { FC, PropsWithChildren } from 'react'
import { ImageAd, TextAd } from '@site/src/components/Ads'

export const Hero: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="hero">
      <div className="container">
        <div className="row">
          <div className="col col--9">{children}</div>
          <div className="col col--3 text--right">
            <TextAd target="mobile" id="ad-mobile-hero" />
            <ImageAd target="desktop" id="ad-desktop-hero" />
          </div>
        </div>
      </div>
    </header>
  )
}
