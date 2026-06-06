import BrowserOnly from '@docusaurus/BrowserOnly'
import React, { lazy, Suspense } from 'react'

import type { ExpressionsSandboxProps } from './types'

const ExpressionsSandbox = lazy(() => import('./ExpressionsSandbox'))

export const LazyExpressionsSandbox: React.FunctionComponent<ExpressionsSandboxProps> = (props) => (
  <BrowserOnly>
    {() => (
      <Suspense fallback={null}>
        <ExpressionsSandbox {...props} />
      </Suspense>
    )}
  </BrowserOnly>
)
