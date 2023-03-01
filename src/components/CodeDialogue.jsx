import { useState, useEffect, useCallback } from 'react'
import { uuidv4 } from './utils'

import { CodeEditor, SaveCancel } from '.'
import { useStickyState } from '../hooks'

function CodeDialogue({ props }) {
  const {
    title, // form title
    code,
    language,
    onClose,
    onSave,
  } = props

  const data = code // Initial Data
  const [text, setText] = useState(code) // Updated Data

  const [maximased, setMaximased] = useStickyState(true, 'codeDialogue')

  const onSaveData = () => onSave(text)
  const getLanguage = () => language || 'javasript'

  // Close dialogue on escape or Ctrl + S
  useEffect(() => {
    const closeDialogue = (e) => {
      if (e.keyCode === 27) onClose()
      // Ctrl + S
      if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault()
        onSaveData()
      }
    }

    window.addEventListener('keydown', closeDialogue)
    return () => window.removeEventListener('keydown', closeDialogue)
  }, [])

  // This not so simple solotion is designed to resize MonacoEditor correctly
  const [editorHeight, setEditorHeight] = useState(null)
  const [hideEditor, setHideEditor] = useState(false)
  const [modalBodyKey, setModalBodyKey] = useState(uuidv4())

  useEffect(() => {
    setHideEditor(true)
    setModalBodyKey(uuidv4())
    setTimeout(() => {
      if (!maximased) setEditorHeight(500)
      setHideEditor(false)
    }, 0)
  }, [maximased])

  const modalBodyRef = useCallback((node) => {
    if (node !== null) setEditorHeight(node.getBoundingClientRect().height - 50)
  }, [])

  const renderEditor =
    hideEditor === false ? (
      <CodeEditor
        props={{
          code: data,
          readOnly: false,
          language: getLanguage(),
          setCode: (code) => setText(code),
          height: editorHeight,
        }}
      />
    ) : undefined

  return (
    <div id="codeModal" className="modal" data-bs-backdrop="static" data-bs-keyboard="false" style={{ display: 'block' }} role="dialog">
      <div className={`modal-dialog ${maximased ? 'modal-fullscreen' : 'modal-dialog-scrollable modal-dialog-centered modal-xl'}`}>
        <div className="modal-content">
          <div className="modal-header">
            <div className="d-flex flex-row">
              <i className="bi bi-braces pt-1 me-3" />
              <h5 className="modal-title">{title}</h5>
            </div>
            <div className="ml-auto">
              <button type="button" className="btn btn-sm" title="Maximise" aria-label="Maximise" onClick={() => setMaximased(!maximased)}>
                <i className="bi bi-arrows-fullscreen" />
              </button>
              <button type="button" title="Close dialogue" className="btn btn-sm me-0" aria-label="Close" onClick={onClose}>
                <i className="bi bi-x-lg" />
              </button>
            </div>
          </div>
          <div className="modal-body" key={modalBodyKey} ref={modalBodyRef}>
            <div className="p-2 container-fluid border">{renderEditor}</div>
          </div>
          <div className="modal-footer">
            <SaveCancel props={{ onSave: onSaveData, onCancel: onClose }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeDialogue
