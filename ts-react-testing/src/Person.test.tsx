import React from 'react'
import { render, screen } from '@testing-library/react'
import Person from './Person'

test('renders a name', () => {
  render(<Person name="Sanjay" />)
  const divElement = screen.getByRole('contentinfo')
  expect(divElement).toHaveTextContent('Name is Sanjay')
  expect(divElement).toHaveAttribute('role', 'contentinfo')
})
