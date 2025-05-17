import React, { FC, PropsWithChildren } from 'react'

export const Hero: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="hero">
      <div className="container">
        <div className="row">
          <div className="col col--9">{children}</div>
          <div className="col col--3"></div>
        </div>
      </div>
    </header>
  )
}
