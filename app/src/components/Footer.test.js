import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from './Footer'


describe('Footer component', () => {
    test('renders Footer content', () => {
        render(<Footer />)
        const footerContent = screen.getByText(/Made By Ascend/)
        expect(footerContent).toBeInTheDocument()
    })
})