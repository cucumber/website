import React, { FC } from 'react'
import { AdTarget } from './types'
import { Ad } from './Ad'

export const ImageAd: FC<{ target: AdTarget }> = ({ target }) => {
  return <Ad target={target} type="image" />
}
