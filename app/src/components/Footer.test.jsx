import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from './Footer'

describe('Footer component', () => {
  test('Renders Footer content', () => {
    render(<Footer />)
    const footerContent = screen.getByText(/Resilient Coders/)
    expect(footerContent).toBeInTheDocument()
  })
})