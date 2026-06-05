import { Argument } from '@cucumber/cucumber-expressions'
import { Decoration, DecorationSet, ViewPlugin } from '@codemirror/view'

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
