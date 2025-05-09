import React, { FC, useEffect } from 'react'

export const ImageAd: FC = () => {
  useEffect(() => window.ethicalads.reload(), [])
  return <div className="bordered" data-ea-publisher="cucumberio" data-ea-type="image"></div>
}
