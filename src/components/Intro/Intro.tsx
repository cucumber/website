import React, {FC} from 'react';
import clsx from "clsx";
import Link from "@docusaurus/Link";
import CodeBlock from "@theme/CodeBlock";
import {feature} from "./feature";
import styles from './Intro.module.scss'

export const Intro: FC = () => {
    return <div className={clsx('row', styles.introRow)}>
        <div className="col col--6">
            <p>Cucumber is a tool for running automated acceptance tests, written in plain language.
                Because they're written in plain language, they can be read by anyone on your team.
                Because they can be read by anyone, they help improve communication, collaboration and
                trust on your team.</p>
            <Link
                className="button button--primary button--lg"
                to="https://cucumber.io/docs/installation">
                Get Started
            </Link>
        </div>
        <div className="col col--6">
            <CodeBlock
                className={styles.featureFile}
                language="gherkin"
                showLineNumbers>
                {feature}
            </CodeBlock>
        </div>
    </div>
}
