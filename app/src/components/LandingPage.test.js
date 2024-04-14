import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LandingPage from './LandingPage'


describe('LandingPage component', () => {
    test('renders LandingPage content', () => {
        render(<LandingPage />)
        const welcomeContent = screen.getByText(/Welcome to the Resilient Coders AI ChatBot!/)
        expect(welcomeContent).toBeInTheDocument()
    })
})