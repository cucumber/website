import React, {FC} from 'react';
import clsx from "clsx";
import CodeBlock from "@theme/CodeBlock";
import {feature} from "./feature";
import styles from './Intro.module.scss'

export const Intro: FC = () => {
    return <div className={clsx('row', styles.introRow)}>
        <div className="col col--3">
            <p>Cucumber is a tool for running automated acceptance tests, written in <strong>plain language</strong>.
                Because they're written in plain language, they can be read by <strong>anyone</strong> on your team, 
                improving <strong>communication</strong>, <strong>collaboration</strong> and <strong>trust</strong>.</p>
        </div>
        <div className="col col--6">
            <CodeBlock
                language="gherkin"
                showLineNumbers>
                {feature}
            </CodeBlock>
        </div>
    </div>
}
