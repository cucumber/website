import { EditorView } from '@codemirror/view'

// input-like theme; colors come from Infima vars so it tracks the site's light/dark mode
// (pair with theme="none" on the editor to drop @uiw's hardcoded white background)
export const sandboxTheme = EditorView.theme({
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
  '.cm-arg': {
    color: 'var(--cucumber-expressions-argument-color)',
  },
})
