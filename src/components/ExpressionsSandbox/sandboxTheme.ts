import { EditorView } from '@codemirror/view'

// input-like theme; colors come from Infima vars so it tracks the site's light/dark mode
// (pair with theme="none" on the editor to drop @uiw's hardcoded white background)
export const sandboxTheme = EditorView.theme({
  '&': {
    backgroundColor: 'var(--ifm-background-color)',
    color: 'var(--ifm-font-color-base)',
    border: '1px solid var(--ifm-color-emphasis-300)',
    borderRadius: 'var(--ifm-global-radius)',
    fontSize: 'var(--ifm-code-font-size)',
  },
  '&.cm-focused': {
    outline: 'none',
    borderColor: 'var(--ifm-color-primary)',
  },
  '.cm-content': {
    padding: '8px',
    fontFamily: 'var(--ifm-font-family-monospace)',
    caretColor: 'var(--ifm-font-color-base)',
  },
  '.cm-line': {
    padding: '0',
  },
  '.cm-cursor, .cm-dropCursor': {
    borderLeftColor: 'var(--ifm-font-color-base)',
  },
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
    backgroundColor: 'var(--ifm-color-emphasis-200)',
  },
  '.cm-arg': {
    color: 'var(--cucumber-expressions-argument-color)',
  },
})
