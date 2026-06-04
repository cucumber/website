import BrowserOnly from '@docusaurus/BrowserOnly'
import React, { lazy, Suspense } from 'react'

import type { ExpressionsSandboxProps } from './types'

const ExpressionsSandboxImpl = lazy(() => import('./ExpressionsSandboxImpl'))

export const ExpressionsSandbox: React.FunctionComponent<ExpressionsSandboxProps> = (props) => (
  <BrowserOnly>
    {() => (
      <Suspense fallback={null}>
        <ExpressionsSandboxImpl {...props} />
      </Suspense>
    )}
  </BrowserOnly>
)
