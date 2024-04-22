import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import LoginPage from './LoginPage'

describe('LoginPage component', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
  });

  test('Renders username input', () => {
    const { getByTestId } = renderedComponent;
    const username = getByTestId('username');
    expect(username).toBeInTheDocument();
  });

  test('Renders password input', () => {
    const { getByTestId } = renderedComponent;
    const password = getByTestId('password');
    expect(password).toBeInTheDocument();
  });

  test('Renders login button', () => {
    const { getByTestId } = renderedComponent;
    const loginButton = getByTestId('loginButton');
    expect(loginButton).toBeInTheDocument();
  });

  test('Renders Google login button', () => {
    const { getByTestId } = renderedComponent;
    const googleLoginButton = getByTestId('googleLoginButton');
    expect(googleLoginButton).toBeInTheDocument();
  });
});
