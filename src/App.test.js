import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Created by Vladimir Chumack link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Created by Vladimir Chumack/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders Dialogue 1 button', () => {
  render(<App />)
  const linkElement = screen.getByText(/Dialogue 1/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders Dialogue 2 button', () => {
  render(<App />)
  const linkElement = screen.getByText(/Dialogue 2/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders Dialogue 3 button', () => {
  render(<App />)
  const linkElement = screen.getByText(/Dialogue 3/i)
  expect(linkElement).toBeInTheDocument()
})
