import React, { FC } from 'react'
import { AdTarget } from './types'
import { Ad } from './Ad'

export const TextAd: FC<{ target: AdTarget; id: string }> = ({ target, id }) => {
  return <Ad target={target} type="text" id={id} />
}
