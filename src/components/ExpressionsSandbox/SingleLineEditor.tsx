import { Extension } from '@codemirror/state'
import { EditorView } from '@codemirror/view'
import CodeMirror, { BasicSetupOptions } from '@uiw/react-codemirror'
import React, { useMemo } from 'react'

import { highlightsExtension } from './highlightsExtension'
import { theme } from './theme'
import { singleLineExtension } from './singleLineExtension'
import { ExpressionHighlight } from '@site/src/components/ExpressionsSandbox/types'

// strip the editor down to something that behaves like a plain text input
const basicSetup: BasicSetupOptions = {
  lineNumbers: false,
  foldGutter: false,
  highlightActiveLine: false,
  highlightActiveLineGutter: false,
  highlightSelectionMatches: false,
  bracketMatching: false,
  closeBrackets: false,
  autocompletion: false,
}

export const SingleLineEditor: React.FunctionComponent<{
  label: string
  value: string
  onChange: (value: string) => void
  highlights?: ReadonlyArray<ExpressionHighlight>
}> = ({ label, value, onChange, highlights }) => {
  const extensions = useMemo<Extension[]>(() => {
    const base = [
      singleLineExtension,
      theme,
      EditorView.contentAttributes.of({ 'aria-label': label }),
    ]
    if (!highlights || highlights.length === 0) {
      return base
    }
    return [...base, highlightsExtension(highlights)]
  }, [label, highlights])

  return (
    <CodeMirror
      value={value}
      onChange={onChange}
      extensions={extensions}
      basicSetup={basicSetup}
      theme="none"
      indentWithTab={false}
    />
  )
}
