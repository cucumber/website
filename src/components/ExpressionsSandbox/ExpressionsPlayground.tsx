import {
  CucumberExpression,
  NodeType,
  ParameterType,
  ParameterTypeRegistry,
} from '@cucumber/cucumber-expressions'
import React, { Fragment, useMemo, useReducer } from 'react'
import styles from './ExpressionsPlayground.module.scss'

import { SingleLineEditor } from './SingleLineEditor'
import type {
  CustomParameterType,
  ExpressionHighlight,
  ExpressionResult,
  ExpressionsPlaygroundProps,
} from './types'

type PlaygroundState = {
  expression: string
  text: string
  parameterTypes: ReadonlyArray<CustomParameterType>
}

type PlaygroundAction =
  | { type: 'setExpression'; value: string }
  | { type: 'setText'; value: string }
  | { type: 'addParameterType' }
  | { type: 'updateParameterType'; id: string; patch: Partial<CustomParameterType> }
  | { type: 'removeParameterType'; id: string }

const ExpressionsPlayground: React.FunctionComponent<ExpressionsPlaygroundProps> = ({
  defaultExpression = 'I have {int} cucumber(s) in my belly',
  defaultText = 'I have 42 cucumbers in my belly',
}) => {
  const [{ expression: expressionText, text: stepText, parameterTypes }, dispatch] = useReducer(
    (state: PlaygroundState, action: PlaygroundAction): PlaygroundState => {
      switch (action.type) {
        case 'setExpression':
          return { ...state, expression: action.value }
        case 'setText':
          return { ...state, text: action.value }
        case 'addParameterType':
          return {
            ...state,
            parameterTypes: [
              ...state.parameterTypes,
              { id: crypto.randomUUID(), name: '', regexp: '' },
            ],
          }
        case 'updateParameterType':
          return {
            ...state,
            parameterTypes: state.parameterTypes.map((pt) =>
              pt.id === action.id ? { ...pt, ...action.patch } : pt
            ),
          }
        case 'removeParameterType':
          return {
            ...state,
            parameterTypes: state.parameterTypes.filter((pt) => pt.id !== action.id),
          }
      }
    },
    {
      expression: defaultExpression,
      text: defaultText,
      parameterTypes: [{ id: crypto.randomUUID(), name: 'color', regexp: 'red|blue|yellow' }],
    }
  )

  const { registry, parameterTypeErrors } = useMemo(() => {
    const registry = new ParameterTypeRegistry()
    const parameterTypeErrors: Record<string, string> = {}
    for (const pt of parameterTypes) {
      if (!pt.name.trim() || !pt.regexp.trim()) {
        continue
      }
      try {
        registry.defineParameterType(
          new ParameterType(pt.name, pt.regexp, null, undefined, undefined, undefined)
        )
      } catch (error) {
        parameterTypeErrors[pt.id] = (error as Error).message
      }
    }
    return { registry, parameterTypeErrors }
  }, [parameterTypes])

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
          label="Cucumber Expression"
          value={expressionText}
          onChange={(value) => dispatch({ type: 'setExpression', value })}
          highlights={expressionHighlights}
        />
      </div>

      {expressionResult.error && (
        <div className="alert alert--danger margin-bottom--md" role="alert">
          <pre className={styles.message}>{expressionResult.error.message}</pre>
        </div>
      )}

      <div className={styles.field}>
        Step Text
        <br />
        <div className={styles.annotated}>
          <SingleLineEditor
            label="Step Text"
            value={stepText}
            onChange={(value) => dispatch({ type: 'setText', value })}
            highlights={stepHighlights}
          ></SingleLineEditor>
          {expressionResult.expression && stepHighlights && (
            <span className={`${styles.status} badge badge--success`} role="status">
              Matched
            </span>
          )}
          {expressionResult.expression && !stepHighlights && (
            <span className={`${styles.status} badge badge--warning`} role="status">
              Unmatched
            </span>
          )}
        </div>
      </div>

      <details className={styles.parameterTypes}>
        <summary>Custom parameter types</summary>
        {parameterTypes.map((pt) => (
          <Fragment key={pt.id}>
            <div className={`${styles.parameterTypeForm} margin-vert--sm`}>
              <input
                className={styles.parameterTypeName}
                aria-label="Name"
                placeholder="Name"
                value={pt.name}
                onChange={(event) =>
                  dispatch({
                    type: 'updateParameterType',
                    id: pt.id,
                    patch: { name: event.target.value },
                  })
                }
              />
              <input
                className={styles.parameterTypeRegexp}
                aria-label="Regular expression"
                placeholder="Regular expression"
                value={pt.regexp}
                onChange={(event) =>
                  dispatch({
                    type: 'updateParameterType',
                    id: pt.id,
                    patch: { regexp: event.target.value },
                  })
                }
              />
              <button
                type="button"
                className={`${styles.parameterTypeRemove} button button--sm button--outline button--danger`}
                onClick={() => dispatch({ type: 'removeParameterType', id: pt.id })}
              >
                Remove
              </button>
            </div>
            {parameterTypeErrors[pt.id] && (
              <div className="alert alert--danger margin-vert--md" role="alert">
                <pre className={styles.message}>{parameterTypeErrors[pt.id]}</pre>
              </div>
            )}
          </Fragment>
        ))}
        <button
          type="button"
          className="button button--sm button--secondary"
          onClick={() => dispatch({ type: 'addParameterType' })}
        >
          Add another
        </button>
      </details>
    </>
  )
}

export default ExpressionsPlayground
