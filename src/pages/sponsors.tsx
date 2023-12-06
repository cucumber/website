import React, {FC} from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from './sponsors.module.scss'

const numberFormat = new Intl.NumberFormat("en", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

const tiers = [
    {
        title: 'Individual',
        description: 'For individuals who want to keep the community healthy',
        amount: 5,
        url: 'https://opencollective.com/cucumber/contribute/monthly-backers-182/checkout'
    },
    {
        title: 'Bronze',
        description: 'For small organisations',
        amount: 100,
        url: 'https://opencollective.com/cucumber/contribute/bronze-sponsors-181/checkout'
    },
    {
        title: 'Silver',
        description: 'For organisations of more than 50 people',
        amount: 250,
        url: 'https://opencollective.com/cucumber/contribute/silver-sponsors-3222/checkout'
    },
    {
        title: 'Gold',
        description: 'For organisations of more than 100 people',
        amount: 500,
        url: 'https://opencollective.com/cucumber/contribute/gold-sponsors-3224/checkout'
    }
] as const

const Tiers: FC = () => {
    return <ol className={styles.tiersList}>
        {tiers.map(tier => {
            return <li key={tier.amount} className={styles.tiersItem}>
                <div>
                    <b className={styles.tiersAmount}>{numberFormat.format(tier.amount)}</b>
                    <span className={styles.tiersFrequency}>monthly</span>
                    <h3 className={styles.tiersTitle}>{tier.title}</h3>
                    <p>{tier.description}</p>
                </div>
                <Link className="button button--block button--primary" href={tier.url}>
                    Sponsor now
                </Link>
            </li>
        })}
    </ol>
}

export default function Sponsors() {
    return <Layout>
        <main>
            <div className="container padding-vert--lg">
                <h1>Sponsor Cucumber</h1>
                <p>The Cucumber project has no full-time staff or big commercial backer &mdash; our tools are mostly maintained by volunteers, in their spare time. Sponsorship from individuals and companies helps keep the project healthy.</p>
            </div>
            <div className="container padding-vert--lg">
                <Tiers/>
                <div className="text--center">
                    <p>Or, you can always make a one-time donation:</p>
                    <Link className="button button--secondary" href="https://opencollective.com/cucumber/donate">Donate now</Link>
                </div>
            </div>
        </main>
    </Layout>
}
