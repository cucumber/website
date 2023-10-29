import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

import styles from './index.module.scss';

const feature = `@tag
Feature: Eating too many cucumbers may not be good for you

  Eating too much of anything may not be good for you
  
  Scenario: Eating a few is no problem
    Given Alice is hungry
    When she eats 3 cucumbers
    Then she will be full
`

function HomepageHeader() {
    return (
        <header className={clsx(styles.heroBanner)}>
            <div className="container">
                <h1 className={clsx(styles.heroTitle)}>
                    <strong>Cucumber </strong>
                    lets you write<br/>
                    automated tests in plain language
                </h1>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout>
            <HomepageHeader/>
            <main>
                <div className="container padding-vert--lg">
                    <div className={clsx('row', styles.introRow)}>
                        <div className="col col--6">
                            <p>Cucumber is a tool for running automated acceptance tests, written in plain language.
                                Because they're written in plain language, they can be read by anyone on your team.
                                Because they can be read by anyone, they help improve communication, collaboration and
                                trust on your team.</p>
                            <div className={styles.introCtas}>
                                <Link
                                    className="button button--primary button--lg"
                                    to="https://cucumber.io/docs/installation">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                        <div className="col col--6">
                            <CodeBlock
                                className={styles.introFeature}
                                language="gherkin"
                                showLineNumbers>
                                {feature}
                            </CodeBlock>
                        </div>
                    </div>
                </div>
                <div className="container padding-vert--lg">
                    <ul className={styles.logosList}>
                        <li><img alt="Brithtcove" src="/img/users/brightcove.svg"/></li>
                        <li><img alt="EXL" src="/img/users/exl.png"/></li>
                        <li><img alt="FinanceIt" src="/img/users/financeit.svg"/></li>
                        <li><img alt="Pendo" src="/img/users/pendo.svg"/></li>
                        <li><img alt="SproutSocial" src="/img/users/sproutsocial.svg"/></li>
                        <li><img alt="Trivago" src="/img/users/trivago.svg"/></li>
                    </ul>
                </div>
            </main>
        </Layout>
    );
}
