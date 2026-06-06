import Admonition from '@theme/Admonition'
import { CucumberExpression, NodeType, ParameterTypeRegistry } from '@cucumber/cucumber-expressions'
import React, { useMemo, useState } from 'react'
import styles from './ExpressionsSandbox.module.scss'

import { SingleLineEditor } from './SingleLineEditor'
import type { ExpressionHighlight, ExpressionResult, ExpressionsSandboxProps } from './types'

const ExpressionsSandbox: React.FunctionComponent<ExpressionsSandboxProps> = ({
  defaultExpression = 'I have {int} cucumber(s) in my belly',
  defaultText = 'I have 42 cucumbers in my belly',
}) => {
  const [expressionText, setExpressionText] = useState(defaultExpression)
  const [stepText, setStepText] = useState(defaultText)

  const registry = useMemo(() => new ParameterTypeRegistry(), [])

  const expressionResult = useMemo<ExpressionResult>(() => {
    try {
      return { expression: new CucumberExpression(expressionText, registry) }
    } catch (error) {
      return { error: error as Error }
    }
  }, [expressionText, registry])

  const expressionHighlights: ReadonlyArray<ExpressionHighlight> | undefined = useMemo(
    () =>
      expressionResult.expression?.ast?.nodes?.map<ExpressionHighlight | undefined>(node => {
        switch (node.type) {
          case NodeType.parameter:
            return {
              type: 'parameter',
              start: node.start,
              end: node.end
            }
          case NodeType.optional:
            return {
              type: 'optional',
              start: node.start,
              end: node.end,
            }
          default:
            return undefined
        }
      })?.filter(Boolean),
    [expressionResult, stepText]
  )

  const stepHighlights: ReadonlyArray<ExpressionHighlight> | undefined = useMemo(
    () =>
      expressionResult.expression
        ?.match(stepText)
        ?.map((arg) => ({
          type: 'parameter',
          start: arg.group.start,
          end: arg.group.end,
        })),
    [expressionResult, stepText]
  )

  return (
    <>
      <p>
        Cucumber Expression
        <br />
        <SingleLineEditor
          value={expressionText}
          onChange={setExpressionText}
          highlights={expressionHighlights}
        />
      </p>

      {expressionResult.error && (
        <Admonition type="danger" title="Error">
          <pre className={styles.message}>{expressionResult.error.message}</pre>
        </Admonition>
      )}
      <p>
        Step Text<br/>
        <SingleLineEditor value={stepText} onChange={setStepText} highlights={stepHighlights} />
      </p>
    </>
  )
}

export default ExpressionsSandbox
