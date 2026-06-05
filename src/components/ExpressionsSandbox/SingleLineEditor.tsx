import { Extension } from '@codemirror/state'
import { Argument } from '@cucumber/cucumber-expressions'
import CodeMirror, { BasicSetupOptions } from '@uiw/react-codemirror'
import React, { useMemo } from 'react'

import {
  argTooltipExtension,
  highlightArgsExtension,
  sandboxTheme,
  singleLineExtension,
} from './extensions'

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
  value: string
  onChange: (value: string) => void
  // when provided, the matched arguments are highlighted and given tooltips
  args?: readonly Argument[] | null
}> = ({ value, onChange, args }) => {
  const extensions = useMemo<Extension[]>(() => {
    const base = [singleLineExtension, sandboxTheme]
    if (args === undefined) return base
    return [...base, highlightArgsExtension(args), argTooltipExtension(args)]
  }, [args])

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
