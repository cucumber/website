import { EditorState } from '@codemirror/state'

// makes the editor behave like a single-line input field
// https://discuss.codemirror.net/t/codemirror-6-single-line-and-or-avoid-carriage-return/2979/3
export const singleLineExtension = EditorState.transactionFilter.of((tr) =>
  tr.newDoc.lines > 1 ? [] : tr
)
