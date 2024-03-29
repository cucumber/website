import React, {FC} from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from './sponsors.module.scss'
import clsx from "clsx";

const numberFormat = new Intl.NumberFormat("en", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

const tiers = [
    {
        title: 'Individual',
        description: 'For individuals who want to support the project',
        amount: 5,
        url: 'https://opencollective.com/cucumber/contribute/monthly-backers-182/checkout',
        from: true
    },
    {
        title: 'Bronze',
        description: 'For small organisations; our most popular tier',
        amount: 100,
        url: 'https://opencollective.com/cucumber/contribute/bronze-sponsors-181/checkout',
        from: false
    },
    {
        title: 'Silver',
        description: 'For organisations of more than 50 people',
        amount: 250,
        url: 'https://opencollective.com/cucumber/contribute/silver-sponsors-3222/checkout',
        from: false
    },
    {
        title: 'Gold',
        description: 'For organisations of more than 100 people',
        amount: 500,
        url: 'https://opencollective.com/cucumber/contribute/gold-sponsors-3224/checkout',
        from: false
    }
] as const

const Tiers: FC = () => {
    return <ol className={styles.tiersList}>
        {tiers.map(tier => {
            return <li key={tier.amount} className={styles.tiersItem}>
                <div>
                    <b className={styles.tiersAmount}>{numberFormat.format(tier.amount)}</b>
                    <span className={styles.tiersFrequency}>{tier.from && 'or above, '}monthly</span>
                    <h3 className={styles.tiersTitle}>{tier.title}</h3>
                    <p>{tier.description}</p>
                </div>
                <Link className="button button--block button--primary" href={tier.url}>
                    Sponsor
                </Link>
            </li>
        })}
    </ol>
}

export default function Sponsors() {
    return <Layout>
        <main>
            <div className="container readable-blurb text--center padding-vert--lg">
                <h1>Sponsor Cucumber</h1>
                <p>Cucumber was downloaded over 100 million times in 2023.</p>
                <p>Thousands of companies rely on Cucumber tests to validate their software. We are a team of volunteers who maintain the core Gherkin parser, the Java, Ruby, JavaScript and Go flavoured implementations of Cucumber. That's a lot of work!</p>
                <p>Your sponsorship ensures the team can get paid for their time, and ensures Cucumber will remain a reliable and fun way to test your software for years to come.</p>
            </div>
            <div className="container padding-vert--lg">
                <div className="margin-bottom--lg">
                    <p className="text--center margin-bottom--sm">If you can, we'd love for you to commit a regular amount to support Cucumber</p>
                    <Tiers/>
                </div>
                <div className="text--center">
                    <p className="margin-bottom--sm">Or, you can always make a one-time donation</p>
                    <p>
                        <Link className="button button--lg button--secondary" href="https://opencollective.com/cucumber/donate">Donate</Link>
                    </p>
                </div>
            </div>
            <div className="container text--center padding-vert--lg">
                <h2>Why sponsor?</h2>
                <p className="readable-blurb margin-bottom--lg">Your sponsorship will directly contribute to the core team's most important and impactful work:</p>
                <div className="row">
                    <div className="col col--4">
                        <img className={clsx(styles.reasonIllustration, "margin-bottom--md")} alt="" src="/img/illustrations/admin.svg"/>
                        <h3>Boring stuff</h3>
                        <p className="padding-horiz--sm">Releases, security, bug fixes, issue triage. Domains, hosting, tools, admin. Unglamorous but essential.</p>
                    </div>
                    <div className="col col--4">
                        <img className={clsx(styles.reasonIllustration, "margin-bottom--md")} alt="" src="/img/illustrations/code.svg"/>
                        <h3>Extensibility</h3>
                        <p className="padding-horiz--sm">Adapting our architecture so you - and other tools you love - can extend Cucumber for whatever you need.</p>
                    </div>
                    <div className="col col--4">
                        <img className={clsx(styles.reasonIllustration, "margin-bottom--md")} alt="" src="/img/illustrations/docs.svg"/>
                        <h3>Documentation</h3>
                        <p className="padding-horiz--sm">Expanding and improving the docs so it's as easy as possible for people to be successful with Cucumber.</p>
                    </div>
                </div>
            </div>
        </main>
    </Layout>
}
