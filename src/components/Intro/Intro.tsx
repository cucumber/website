import React, { FC } from 'react'
import CodeBlock from '@theme/CodeBlock'
import { feature } from './feature'
import Link from '@docusaurus/Link'

export const Intro: FC = () => {
  return (
    <>
      <div className="container margin-vert--xl">
        <h2 className="text--center text--normal readable">
          Cucumber is a tool for running automated acceptance tests, written in{' '}
          <strong>plain language</strong>. Because they're written in plain language, they can be
          read by <strong>anyone</strong> on your team, improving <strong>communication</strong>,{' '}
          <strong>collaboration</strong> and <strong>trust</strong>.
        </h2>
      </div>
      <div className="container margin-vert--xl">
        <div className="row items-center">
          <div className="col col--4">
            <ExploreItem
              title="Got 10 minutes?"
              text="Get up and running quickly with Cucumber on your technology stack."
              cta="Take the Tutorial"
              to="docs/guides/10-minute-tutorial"
            />
            <ExploreItem
              title="Want to go further?"
              text="Learn about Behaviour-Driven Development (BDD), the development process that Cucumber was built to support."
              cta="Learn about BDD"
              to="docs/bdd"
            />
          </div>
          <div className="col col--7 col--offset-1">
            <CodeBlock language="gherkin" title="features/withdrawing-cash.feature">
              {feature}
            </CodeBlock>
          </div>
        </div>
      </div>
    </>
  )
}

const ExploreItem: FC<{ title: string; text: string; cta: string; to: string }> = ({
  title,
  text,
  cta,
  to,
}) => {
  return (
    <div className="margin-bottom--lg">
      <h3 className="margin-vert--xs">{title}</h3>
      <p className="margin-bottom--xs">{text}</p>
      <Link className="text--bold" to={to}>
        {cta} <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  )
}
