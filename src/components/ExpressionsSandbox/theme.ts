import { EditorView } from '@codemirror/view'

// use css vars to match our site's styling
export const theme = EditorView.theme({
  '&': {
    backgroundColor: 'var(--ifm-background-color)',
    color: 'inherit',
    border: 'var(--ifm-button-border-width) solid var(--ifm-color-gray-700)',
    borderRadius: 'var(--ifm-button-border-radius)',
  },
  '&.cm-focused': {
    outline: 'var(--ifm-button-border-width) solid var(--ifm-color-gray-700);',
  },
  '.cm-content': {
    fontFamily: 'var(--ifm-font-family-monospace)',
    fontSize: 'calc(0.875rem * 1.25)',
    lineHeight: '1.5',
    padding: 'calc(var(--ifm-button-padding-vertical) * 1.25)',
    verticalAlign: 'baseline',
  },
  '.cm-line': {
    padding: '0',
  },
  '.cm-expression-parameter': {
    color: 'var(--cucumber-expressions-argument-color)',
  },
  '.cm-expression-optional': {
    color: 'var(--ifm-color-secondary-darkest)',
  },
})
