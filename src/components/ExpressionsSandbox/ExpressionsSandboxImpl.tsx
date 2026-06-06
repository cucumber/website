import { CucumberExpression, NodeType, ParameterTypeRegistry } from '@cucumber/cucumber-expressions'
import React, { useMemo, useState } from 'react'

import { SingleLineEditor } from './SingleLineEditor'
import type { ExpressionHighlight, ExpressionResult, ExpressionsSandboxProps } from './types'

const ExpressionsSandboxImpl: React.FunctionComponent<ExpressionsSandboxProps> = ({
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

  console.log(expressionResult.expression.ast)

  const expressionHighlights: ReadonlyArray<ExpressionHighlight> | undefined = useMemo(
    () =>
      expressionResult.expression.ast.nodes.map<ExpressionHighlight | undefined>(node => {
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
      }).filter(Boolean),
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
    <div>
      <label style={{ display: 'block', marginBottom: '1rem' }}>
        <div style={{ marginBottom: '0.25rem' }}>Cucumber Expression</div>
        <SingleLineEditor value={expressionText} onChange={setExpressionText} highlights={expressionHighlights} />
      </label>
      {expressionResult.error && <pre>{expressionResult.error.message}</pre>}
      <label style={{ display: 'block', marginBottom: '1rem' }}>
        <div style={{ marginBottom: '0.25rem' }}>Text</div>
        <SingleLineEditor value={stepText} onChange={setStepText} highlights={stepHighlights} />
      </label>
    </div>
  )
}

export default ExpressionsSandboxImpl
