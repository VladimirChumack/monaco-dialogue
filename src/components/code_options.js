export const OPTIONS = {
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: false,
  cursorStyle: 'line',
  automaticLayout: true,
  scrollBeyondLastLine: true,
  //  wordWrap: "on",
  //  wrappingStrategy: "advanced",
  quickSuggestionsDelay: 10000,
  theme: 'vs',
  minimap: { enabled: false },
  overviewRulerLanes: 0,

  scrollbar: {
    // Subtle shadows to the left & top. Defaults to true.
    useShadows: false,
    // Render vertical arrows. Defaults to false.
    verticalHasArrows: true,
    // Render horizontal arrows. Defaults to false.
    horizontalHasArrows: true,
    // Render vertical scrollbar.
    // Accepted values: 'auto', 'visible', 'hidden'.
    // Defaults to 'auto'
    vertical: 'auto',
    // Render horizontal scrollbar.
    // Accepted values: 'auto', 'visible', 'hidden'.
    // Defaults to 'auto'
    horizontal: 'hidden',
    verticalScrollbarSize: 17,
    horizontalScrollbarSize: 17,
    arrowSize: 30,
  },
}
