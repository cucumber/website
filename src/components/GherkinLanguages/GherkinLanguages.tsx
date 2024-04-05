import {FC} from "react";
import {dialects, Dialect} from '@cucumber/gherkin'
import styles from './GherkinLanguages.module.scss'

type KeywordProps = {
    canonical: string
    equivalents: readonly string[]
}

const Keyword: FC<KeywordProps> = ({canonical, equivalents}) => {
    return <tr>
        <td><code>{canonical}</code></td>
        <td className={styles.equivalents}>{equivalents.map((equiv, index) => {
            return <code key={index}>{equiv.trim()}</code>
        })}</td>
    </tr>
}

type KeywordsProps = {
    code: keyof typeof dialects
    dialect: Dialect
}


const Language: FC<KeywordsProps> = ({code, dialect}) => {
    return <>
        <h3>{dialect.name}/{dialect.native} (<code>{code}</code>)</h3>
        <table>
            <thead>
            <tr>
                <th>Keyword</th>
                <th>Equivalent(s)</th>
            </tr>
            </thead>
            <tbody>
                <Keyword canonical="Feature" equivalents={dialect.feature}/>
                <Keyword canonical="Background" equivalents={dialect.background}/>
                <Keyword canonical="Rule" equivalents={dialect.rule}/>
                <Keyword canonical="Scenario" equivalents={dialect.scenario}/>
                <Keyword canonical="Scenario Outline" equivalents={dialect.scenarioOutline}/>
                <Keyword canonical="Examples" equivalents={dialect.examples}/>
                <Keyword canonical="Given" equivalents={dialect.given}/>
                <Keyword canonical="When" equivalents={dialect.when}/>
                <Keyword canonical="Then" equivalents={dialect.then}/>
                <Keyword canonical="And" equivalents={dialect.and}/>
                <Keyword canonical="But" equivalents={dialect.but}/>
            </tbody>
        </table>
    </>
}

export const GherkinLanguages: FC = () => {
    return <>
        {Object.entries(dialects).map(([key, dialect]) => {
            return <Language key={key} code={key} dialect={dialect}/>
        })}
    </>
}
