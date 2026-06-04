import type { CucumberExpression } from '@cucumber/cucumber-expressions'

export type ExpressionResult = {
  expression?: CucumberExpression
  error?: Error
}

export type ExpressionsSandboxProps = {
  defaultExpression?: string
  defaultText?: string
}
