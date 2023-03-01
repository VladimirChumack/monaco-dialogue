import { useState, useEffect } from 'react'
import { CodeDialogue } from './components'

function App() {
  const [showDialogue, setShowDialogue] = useState()

  const onClose = () => setShowDialogue(undefined)
  const onSave = () => setShowDialogue(undefined)

  // Closes dialogue on escape
  useEffect(() => {
    const closeDialogue = (e) => {
      if (e.keyCode === 27) onClose()
    }
    window.addEventListener('keydown', closeDialogue)
    return () => window.removeEventListener('keydown', closeDialogue)
  }, [])

  const DATA = {
    userId: 1,
    id: 1,
    title: 'Mr John Smith',
    completed: false,
  }

  const codeDialogue =
    showDialogue === 'source' ? (
      <CodeDialogue
        props={{
          title: 'JSON Code editor',
          code: JSON.stringify(DATA, null, 4),
          language: 'json',
          onSave,
          onClose,
        }}
      />
    ) : null

  return (
    <>
      <div className="container-fluid p-5">
        <h2>Simple and reusable React Code Editor Dialogue based on Monaco Editor</h2>
        <ul>
          <li>Syntax highlighting</li>
          <li>Works with all programming languages supported by VSCode</li>
          <li>Custom title</li>
          <li>Close button</li>
          <li>Maximise button</li>
          <li>State is saved in the localstore</li>
        </ul>
        <h5>Note: Monaco Editor is the editor used by VSCode</h5>
      </div>
      <div className="container-fluid pt-5" align="center">
        <p>Click on the button below to see the dialogue</p>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-primary" onClick={() => setShowDialogue('source')}>
            Show code editor
          </button>
        </div>
      </div>
      {codeDialogue}

      <div className="container-fluid pt-5" align="center">
        <a href="https://www.linkedin.com/in/vchumack/">Created by Vladimir Chumack</a>
      </div>
    </>
  )
}

export default App
