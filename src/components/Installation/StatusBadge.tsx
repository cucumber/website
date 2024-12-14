import React, { FC } from 'react'
import { ImplementationStatus } from '@site/src/components/Installation/types'

const STATUS_TO_BADGE_COLOR: Record<ImplementationStatus, string> = {
  official: 'success',
  'semi-official': 'info',
  unofficial: 'secondary',
  unmaintained: 'danger',
} as const

export const StatusBadge: FC<{
  status: ImplementationStatus
}> = ({ status }) => {
  return (
    <span className={`text--uppercase badge badge--${STATUS_TO_BADGE_COLOR[status]}`}>
      {status}
    </span>
  )
}
