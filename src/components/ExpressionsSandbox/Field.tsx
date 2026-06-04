import React, { ReactNode } from 'react'

export const Field: React.FunctionComponent<{ label: string; children: ReactNode }> = ({
  label,
  children,
}) => (
  <label style={{ display: 'block', marginBottom: '1rem' }}>
    <div style={{ marginBottom: '0.25rem' }}>{label}</div>
    {children}
  </label>
)
