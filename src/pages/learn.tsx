import React, { FC, ReactElement } from 'react'
import Layout from '@theme/Layout'
import styles from './learn.module.scss'
import Link from '@docusaurus/Link'
import clsx from 'clsx'
import Head from '@docusaurus/Head'

const Resource: FC<{
  to: string
  title: string
  cta: string
  children: [ReactElement, ReactElement]
}> = ({ to, title, cta, children: [graphic, content] }) => {
  return (
    <div className={clsx('row margin-bottom--lg', styles.resource)}>
      <div className="col col--4 col--offset-2 margin-bottom--md">
        <Link className={styles.resourceGraphic} to={to}>
          {graphic}
        </Link>
      </div>
      <div className="col col--4">
        <h2>{title}</h2>
        {content}
        <Link className="button button--secondary" to={to}>
          {cta}
        </Link>
      </div>
    </div>
  )
}

export default function Learn() {
  return (
    <Layout>
      <Head>
        <title>Learn BDD and Cucumber</title>
        <meta
          name="description"
          content="As well as our extensive documentation, there are some other resources we recommend to really accelerate your journey with BDD and Cucumber."
        />
      </Head>
      <main>
        <div className="container text--center padding-vert--lg">
          <h1>Learn BDD and Cucumber</h1>
          <p className="readable-blurb">
            As well as our <Link to="/docs">extensive documentation</Link>, there are some other
            resources we recommend to really accelerate your journey with BDD and Cucumber.
          </p>
        </div>
        <div className="container padding-vert--lg">
          <Resource to="https://school.cucumber.io" title="Cucumber School" cta="Get Started">
            <div className={styles.schoolStack}>
              <img alt="" src="/img/learn/school-java.png" />
              <img alt="" src="/img/learn/school-java.png" />
              <img alt="" src="/img/learn/school-java.png" />
            </div>
            <p>
              Learn the concepts and tools from the Cucumber team themselves with our free
              high-quality video courses for developers, product owners and more.
            </p>
          </Resource>
          <Resource to="https://bddbooks.com" title="The BDD Books" cta="Buy">
            <>
              <img alt="" src="/img/learn/book-discovery.png" />
              <img alt="" src="/img/learn/book-formulation.png" />
            </>
            <p>
              These practical guides to <em>Discovery</em> and <em>Formulation</em> by Gáspár Nagy
              and Seb Rose explain good collaboration techniques, illustrated by concrete examples.
            </p>
          </Resource>
          <Resource
            to="https://www.amazon.com/Cucumber-Book-2e-Matt-Wynne/dp/1680502387"
            title="The Cucumber Book"
            cta="Buy"
          >
            <img alt="" src="/img/learn/book-cucumber-book.jpg" />
            <p>
              Matt Wynne and Aslak Hellesøy show you how to express your customers’ wild ideas as a
              set of clear, executable specifications that everyone on the team can read.
            </p>
          </Resource>
          <Resource
            to="https://www.manning.com/books/bdd-in-action"
            title="BDD in Action"
            cta="Buy"
          >
            <img alt="" src="/img/learn/book-bdd-in-action.jpg" />
            <p>
              John Ferguson Smart teaches you Behavior-Driven Development and shows you how to
              integrate it into your existing development process.
            </p>
          </Resource>
        </div>
      </main>
    </Layout>
  )
}
