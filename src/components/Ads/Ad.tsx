import React, { FC, useEffect } from 'react'
import { AdTarget } from './types'
import { useColorMode, useWindowSize } from '@docusaurus/theme-common'
import clsx from 'clsx'
import { ErrorBoundary } from 'react-error-boundary'

interface Props {
  target: AdTarget
  type: 'image' | 'text'
  id: string
}

export const Ad: FC<Props> = (props) => {
  return (
    <ErrorBoundary fallback={null}>
      <AdInternal {...props} />
    </ErrorBoundary>
  )
}

const AdInternal: FC<Props> = ({ target, type, id }) => {
  const { colorMode } = useColorMode()
  const windowSize = useWindowSize()
  const show = windowSize === target

  useEffect(() => {
    if (show) {
      window.ethicalads?.reload()
    }
  }, [show, colorMode])

  if (!show) {
    return null
  }
  return (
    <div
      id={id}
      className={clsx('bordered', colorMode)}
      data-ea-publisher="cucumberio"
      data-ea-type={type}
    ></div>
  )
}
