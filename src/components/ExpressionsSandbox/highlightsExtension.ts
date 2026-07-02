import { Decoration, DecorationSet, ViewPlugin } from '@codemirror/view'
import { ExpressionHighlight } from '@site/src/components/ExpressionsSandbox/types'

// highlights the text ranges matched by each argument
export function highlightsExtension(args: ReadonlyArray<ExpressionHighlight>) {
  return ViewPlugin.define(
    () => ({
      decorations: createArgDecorations(args),
      update(update) {
        if (update.docChanged) {
          this.decorations = this.decorations.map(update.changes)
        }
      },
    }),
    {
      decorations: (v) => v.decorations,
    }
  )
}

function createArgDecorations(args: ReadonlyArray<ExpressionHighlight>): DecorationSet {
  return Decoration.set(
    args.map(({ type, start, end }) =>
      Decoration.mark({ attributes: { class: `cm-expression-${type}` } }).range(start, end)
    ),
    true
  )
}
