import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'

describe('Nav bar component', () => {
    test('renders Nav Bar ', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        );

        const homeLink = getByTestId('homeNavBarButton');
        expect(homeLink).toBeInTheDocument();

    }),
    test('renders Nav Bar ', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        );

        const loginLink = getByTestId('loginNavBarButton');
        expect(loginLink).toBeInTheDocument();
    })
})