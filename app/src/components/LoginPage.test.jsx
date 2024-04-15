import { BrowserRouter, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import LoginPage from './LoginPage.jsx'

describe('LoginPage component', () => {
  test('Renders Login page content', () => {
    const { getById, getByTestId } = render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    )

    const username = getById('username')
    expect(username).toBeInTheDocument()

    const password = getById('password')
    expect(password).toBeInTheDocument()

    const loginButton = getByTestId('loginButton')
    expect(loginButton).toBeInTheDocument()

    const googleLoginButton = getByTestId('googleLoginButton')
    expect(googleLoginButton).toBeInTheDocument()
  })
})