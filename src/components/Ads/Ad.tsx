import React, { FC, useEffect } from 'react'
import { AdTarget } from './types'
import { useWindowSize } from '@docusaurus/theme-common'

interface Props {
  target: AdTarget
  type: 'image' | 'text'
}

export const Ad: FC<Props> = ({ target, type }) => {
  const windowSize = useWindowSize()
  const show = windowSize === target

  useEffect(() => {
    if (show) {
      window.ethicalads.reload()
    }
  }, [show])

  if (!show) {
    return null
  }
  return <div className="bordered" data-ea-publisher="cucumberio" data-ea-type={type}></div>
}
