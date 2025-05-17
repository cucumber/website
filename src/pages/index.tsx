import React from 'react'
import Layout from '@theme/Layout'
import { Splash } from '@site/src/components/Splash'
import { Intro } from '@site/src/components/Intro'

export default function Home() {
  return (
    <Layout>
      <Splash />
      <main>
        <Intro />
        {/*<div className="container padding-vert--lg">*/}
        {/*    <UsedBy/>*/}
        {/*</div>*/}
      </main>
    </Layout>
  )
}
