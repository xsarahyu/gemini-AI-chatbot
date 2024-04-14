import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'
import NavBar from './NavBar';


describe('NavBar component', () => {
  test('renders correctly with links', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    // Check if the Home link is rendered and has correct href
    const homeLink = screen.getByTestId('homeLink', { name: /home/ });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    // Check if the Login link is rendered and has correct href
    const loginLink = screen.getByTestId('loginLink', { name: /login/ });
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute('href', '/login');
  });
});