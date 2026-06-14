import Admonition from '@theme/Admonition'
import { CucumberExpression, NodeType, ParameterTypeRegistry } from '@cucumber/cucumber-expressions'
import React, { useMemo, useState } from 'react'
import styles from './ExpressionsPlayground.module.scss'

import { SingleLineEditor } from './SingleLineEditor'
import type { ExpressionHighlight, ExpressionResult, ExpressionsPlaygroundProps } from './types'

const ExpressionsPlayground: React.FunctionComponent<ExpressionsPlaygroundProps> = ({
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
      expressionResult.expression?.ast?.nodes
        ?.map<ExpressionHighlight | undefined>((node) => {
          switch (node.type) {
            case NodeType.parameter:
              return {
                type: 'parameter',
                start: node.start,
                end: node.end,
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
        })
        ?.filter(Boolean),
    [expressionResult, stepText]
  )

  const stepHighlights: ReadonlyArray<ExpressionHighlight> | undefined = useMemo(
    () =>
      expressionResult.expression?.match(stepText)?.map((arg) => ({
        type: 'parameter',
        start: arg.group.start,
        end: arg.group.end,
      })),
    [expressionResult, stepText]
  )

  return (
    <>
      <div className={styles.field}>
        Cucumber Expression
        <br />
        <SingleLineEditor
          value={expressionText}
          onChange={setExpressionText}
          highlights={expressionHighlights}
        />
      </div>

      {expressionResult.error && (
        <Admonition type="danger" title="Error">
          <pre className={styles.message}>{expressionResult.error.message}</pre>
        </Admonition>
      )}

      <div className={styles.field}>
        Step Text
        <br />
        <div className={styles.annotated}>
          <SingleLineEditor
            value={stepText}
            onChange={setStepText}
            highlights={stepHighlights}
          ></SingleLineEditor>
          {expressionResult.expression && stepHighlights && (
            <span className={`${styles.matched} badge badge--success`}>Matched</span>
          )}
          {expressionResult.expression && !stepHighlights && (
            <span className={`${styles.matched} badge badge--warning`}>Unmatched</span>
          )}
        </div>
      </div>
    </>
  )
}

export default ExpressionsPlayground
