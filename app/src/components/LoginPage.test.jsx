import { BrowserRouter, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import LoginPage from './LoginPage.jsx'

describe('Login page component', () => {
  test('Renders Login page ', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    )

    const username = getByTestId('username')
    expect(username).toBeInTheDocument()

  })
})

// click of button redirects you to messages
// that the landing page renders, test for content on DOM