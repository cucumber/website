import React from 'react'
import Layout from '@theme/Layout'
import styles from './learn.module.scss'
import Link from '@docusaurus/Link'
import clsx from 'clsx'

export default function Learn() {
  return (
    <Layout>
      <main>
        <div className="container text--center padding-vert--lg">
          <h1>Learn BDD and Cucumber</h1>
          <p className="readable-blurb">
            Cool.
          </p>
          <div className="row">
            <div className="col col--4">
              <h2>Cucumber School</h2>
              <p>Free online courses from the experts.</p>
              <Link className={clsx('margin-bottom--lg', styles.schoolStack)} to="https://school.cucumber.io">
                <img alt="" src="/img/learn/school-java.png" />
                <img alt="" src="/img/learn/school-java.png" />
                <img alt="" src="/img/learn/school-java.png" />
              </Link>
              <Link className="button button--secondary" to="https://school.cucumber.io">Get Started</Link>
            </div>
            <div className="col col--8">
              <h2>Books</h2>
              <p>We recommend these titles for your BDD journey.</p>
            </div>
          </div>


        </div>
      </main>
    </Layout>
  )
}
