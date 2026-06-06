import { Decoration, DecorationSet, ViewPlugin } from '@codemirror/view'

// highlights the text ranges matched by each argument
export function highlightArgsExtension(args: ReadonlyArray<[number, number]>) {
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

function createArgDecorations(args: ReadonlyArray<[number, number]>): DecorationSet {
  return Decoration.set(
    args.map(([start, end]) =>
      Decoration.mark({ attributes: { class: 'cm-arg' } }).range(start, end)
    ),
    true
  )
}
