import { CucumberExpression, ParameterTypeRegistry } from '@cucumber/cucumber-expressions'
import React, { useMemo, useState } from 'react'

import { Field } from './Field'
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

  const args = useMemo(
    () => expressionResult.expression?.match(stepText),
    [expressionResult, stepText]
  )

  return (
    <div>
      <Field label="Cucumber Expression">
        <SingleLineEditor value={expressionText} onChange={setExpressionText} />
      </Field>
      {expressionResult.error && <pre>{expressionResult.error.message}</pre>}
      <Field label="Text">
        <SingleLineEditor value={stepText} onChange={setStepText} args={args} />
      </Field>
    </div>
  )
}

export default ExpressionsSandboxImpl
