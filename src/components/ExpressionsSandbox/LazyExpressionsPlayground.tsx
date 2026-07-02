import BrowserOnly from '@docusaurus/BrowserOnly'
import React, { lazy, Suspense } from 'react'

import type { ExpressionsPlaygroundProps } from './types'

const ExpressionsPlayground = lazy(() => import('./ExpressionsPlayground'))

export const LazyExpressionsPlayground: React.FunctionComponent<ExpressionsPlaygroundProps> = (
  props
) => (
  <BrowserOnly>
    {() => (
      <Suspense fallback={null}>
        <ExpressionsPlayground {...props} />
      </Suspense>
    )}
  </BrowserOnly>
)
