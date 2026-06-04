import { EditorState, StateField } from '@codemirror/state'
import {
  Decoration,
  DecorationSet,
  EditorView,
  showTooltip,
  Tooltip,
  ViewPlugin,
} from '@codemirror/view'
import { Argument } from '@cucumber/cucumber-expressions'

// makes the editor behave like a single-line input field
// https://discuss.codemirror.net/t/codemirror-6-single-line-and-or-avoid-carriage-return/2979/3
export const singleLineExtension = EditorState.transactionFilter.of((tr) =>
  tr.newDoc.lines > 1 ? [] : tr
)

// highlights the part of the text matched by each argument
export function highlightArgsExtension(args: readonly Argument[] | null | undefined) {
  return ViewPlugin.define(
    () => ({
      decorations: createArgDecorations(args),
      update(update) {
        if (update.docChanged || update.viewportChanged) {
          this.decorations = createArgDecorations(args)
        }
      },
    }),
    {
      decorations: (v) => v.decorations,
    }
  )
}

function createArgDecorations(args: readonly Argument[] | null | undefined): DecorationSet {
  return Decoration.set(
    (args || []).map((arg) =>
      Decoration.mark({ attributes: { class: 'cm-arg' } }).range(
        arg.group.start || 0,
        arg.group.end || 0
      )
    ),
    true
  )
}

// shows a tooltip with the matched parameter type and value when the cursor is inside an argument
export function argTooltipExtension(args: readonly Argument[] | null | undefined) {
  return StateField.define<readonly Tooltip[]>({
    create: getCursorTooltips,
    update(tooltips, tr) {
      if (!tr.docChanged && !tr.selection) return tooltips
      return getCursorTooltips(tr.state)
    },
    provide: (f) => showTooltip.computeN([f], (state) => state.field(f)),
  })

  function getCursorTooltips(state: EditorState): readonly Tooltip[] {
    const cursorRange = state.selection.ranges.filter((range) => range.empty)
    if (cursorRange.length !== 1) return []
    const range = cursorRange[0]
    const line = state.doc.lineAt(range.head)
    const column = range.head - line.from
    const arg = (args || []).find(
      (arg) => (arg.group.start || -1) <= column && column < (arg.group.end || -1)
    )
    if (!arg) return []

    const type = arg.parameterType.name
    const value = JSON.stringify(arg.getValue(null))
    return [
      {
        pos: range.head,
        above: true,
        strictSide: true,
        create: () => {
          const dom = document.createElement('div')
          dom.classList.add('cm-cursor-tooltip')
          dom.textContent = `${type}: ${value}`
          return { dom }
        },
      },
    ]
  }
}

// minimal styling so the argument highlight and tooltip are visible; adapts to light/dark via Infima vars
export const replBaseTheme = EditorView.baseTheme({
  '&': {
    border: '1px solid var(--ifm-color-emphasis-300)',
    borderRadius: 'var(--ifm-global-radius)',
  },
  '.cm-arg': {
    backgroundColor: 'var(--ifm-color-warning-contrast-background)',
    borderRadius: '2px',
  },
  '.cm-tooltip.cm-cursor-tooltip': {
    backgroundColor: 'var(--ifm-color-emphasis-800)',
    color: 'var(--ifm-color-emphasis-0)',
    padding: '2px 8px',
    borderRadius: '10px',
    border: 'none',
  },
})
