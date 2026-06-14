import type { CucumberExpression } from '@cucumber/cucumber-expressions'

export type ExpressionResult = {
  expression?: CucumberExpression
  error?: Error
}

export type ExpressionsPlaygroundProps = {
  defaultExpression?: string
  defaultText?: string
}

export type ExpressionHighlight = {
  type: 'parameter' | 'optional'
  start: number
  end: number
}
