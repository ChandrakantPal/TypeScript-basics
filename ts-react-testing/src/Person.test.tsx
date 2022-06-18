import React from 'react'
import { render, screen } from '@testing-library/react'
import Person from './Person'

test('renders a name', () => {
  render(<Person name="Sanjay" />)
  const linkElement = screen.getByText(/Name is Sanjay/i)
  expect(linkElement).toBeInTheDocument()
})
