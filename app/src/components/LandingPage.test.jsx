import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LandingPage from './LandingPage'

describe('LandingPage component', () => {
  test('Renders LandingPage content', () => {
    render(<LandingPage />)
    const welcomeContent = screen.getByText(/Welcome to the Resilient Coders AI ChatBot!/i)
    expect(welcomeContent).toBeInTheDocument()
  })
})