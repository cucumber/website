import { Subscribe } from '@site/src/components/Newsletter'
import React from 'react'
import Layout from '@theme/Layout'

export default function Events() {
  return (
    <Layout>
      <main>
        <div className="container readable-blurb text--center padding-vert--lg">
          <h1>Events</h1>
          <p>
            We don't currently have any Cucumber events lined up. If/when that changes, newsletter
            subscribers will be among the first to know.
          </p>
          <Subscribe />
        </div>
      </main>
    </Layout>
  )
}
