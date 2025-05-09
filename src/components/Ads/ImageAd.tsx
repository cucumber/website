import React, { FC, useEffect } from 'react'

export const ImageAd: FC = () => {
  useEffect(() => window.ethicalads.reload(), [])
  return <div data-ea-publisher="cucumberio" data-ea-type="image"></div>
}
