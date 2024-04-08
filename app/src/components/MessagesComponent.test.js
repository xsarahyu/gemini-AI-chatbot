import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import MessagesComponent from './MessagesComponent'


describe('Messages component', () => {
    test('renders Message content', () => {
        const { getByTestId, getByText } = render(<MessagesComponent />)

        // Find the input field by its placeholder text
        const inputField = getByTestId('message-input');

        // Simulate user typing "hello" into the input field
        fireEvent.change(inputField, { target: { value: 'hello' } });

        // Find the submit button and click it
        const sendButton = getByTestId('message-submit');
        fireEvent.click(sendButton);

        const messageContent = getByText("hello")
        expect(messageContent).toBeInTheDocument()
    })
})

// use npm test
// Mock using a test message in the input
// Mock submitting the message
// Check for what is expected, expected the content is rendered to the DOM