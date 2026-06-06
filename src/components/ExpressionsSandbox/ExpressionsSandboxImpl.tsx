import { CucumberExpression, ParameterTypeRegistry } from '@cucumber/cucumber-expressions'
import React, { useMemo, useState } from 'react'

import { SingleLineEditor } from './SingleLineEditor'
import type { ExpressionResult, ExpressionsSandboxProps } from './types'

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

  const argRanges: ReadonlyArray<[number, number]> | undefined = useMemo(
    () =>
      expressionResult.expression
        ?.match(stepText)
        ?.map<[number, number]>((arg) => [arg.group.start ?? 0, arg.group.end ?? 0]),
    [expressionResult, stepText]
  )

  return (
    <div>
      <label style={{ display: 'block', marginBottom: '1rem' }}>
        <div style={{ marginBottom: '0.25rem' }}>Cucumber Expression</div>
        <SingleLineEditor value={expressionText} onChange={setExpressionText} />
      </label>
      {expressionResult.error && <pre>{expressionResult.error.message}</pre>}
      <label style={{ display: 'block', marginBottom: '1rem' }}>
        <div style={{ marginBottom: '0.25rem' }}>Text</div>
        <SingleLineEditor value={stepText} onChange={setStepText} argRanges={argRanges} />
      </label>
    </div>
  )
}

export default ExpressionsSandboxImpl
