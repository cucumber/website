import { Extension } from '@codemirror/state'
import CodeMirror, { BasicSetupOptions } from '@uiw/react-codemirror'
import React, { useMemo } from 'react'

import { highlightArgsExtension } from './highlightArgsExtension'
import { sandboxTheme } from './sandboxTheme'
import { singleLineExtension } from './singleLineExtension'

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
  argRanges?: ReadonlyArray<[number, number]>
}> = ({ value, onChange, argRanges }) => {
  const extensions = useMemo<Extension[]>(() => {
    const base = [singleLineExtension, sandboxTheme]
    if (!argRanges || argRanges.length === 0) {
      return base
    }
    return [...base, highlightArgsExtension(argRanges)]
  }, [argRanges])

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
