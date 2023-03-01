import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import SaveCancel from './SaveCancel'

const onSave = () => {}
const onCancel = () => {}

it('SaveCancel component', () => {
  render(<SaveCancel props={{ onSave, onCancel }} />)
  expect(screen.getByText('Save')).toBeInTheDocument()
  expect(screen.getByText('Cancel')).toBeInTheDocument()
})
