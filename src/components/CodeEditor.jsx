import MonacoEditor from '@uiw/react-monacoeditor'
import { OPTIONS } from './code_options'

function CodeEditor({ props }) {
  const { code, language, readOnly, setCode, height } = props

  const OPT = { ...OPTIONS }
  OPT.readOnly = readOnly

  const editorDidMount = (editor) => editor.focus()

  return (
    <MonacoEditor
      width="100%"
      height={height}
      language={language}
      theme="vs-light"
      value={code}
      options={OPT}
      onChange={(newValue, e) => setCode(newValue)}
      editorDidMount={editorDidMount}
    />
  )
}

export default CodeEditor
