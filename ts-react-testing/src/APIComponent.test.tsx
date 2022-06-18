import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react'
import APIComponent from './APIComponent'

const server = setupServer(
  rest.get('/api', (req, res, ctx) => {
    return res(ctx.json({ name: 'Sanjay' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('gets the data', async () => {
  render(<APIComponent />)
  const out = await screen.findByRole('contentinfo')
  expect(out).toHaveTextContent('Name is Sanjay')
})
