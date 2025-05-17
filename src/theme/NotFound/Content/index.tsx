import { ReactNode } from 'react'
import Link from '@docusaurus/Link'

export default function NotFoundContent(): ReactNode {
  return (
    <main>
      <div className="container margin-vert--xl text--center readable">
        <h1>Not found</h1>
        <p>There's nothing at this path. Sorry about that.</p>
        <Link className="button button--secondary" to="/">
          Start Again
        </Link>
      </div>
    </main>
  )
}
