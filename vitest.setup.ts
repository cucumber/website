import '@testing-library/jest-dom/vitest'

// jsdom has no layout engine, but CodeMirror measures DOM ranges while editing.
// Stub the range geometry methods it relies on so editor interactions don't throw.
const emptyRect = {
  x: 0,
  y: 0,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0,
  toJSON: () => ({}),
}

Range.prototype.getClientRects = () =>
  Object.assign([], { item: () => null }) as unknown as DOMRectList
Range.prototype.getBoundingClientRect = () => emptyRect as DOMRect
