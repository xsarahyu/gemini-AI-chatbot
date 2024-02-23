import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import MessagesComponent from './MessagesComponent'


describe('Messages component', () => {
  test('Renders Message content', () => {
    const { getByTestId, getByText } = render(<MessagesComponent />)

    const inputField = getByTestId('messageInput')
    fireEvent.change(inputField, { target: { value: 'hello' } })

    const sendButton = getByTestId('submitMessageButton')
    fireEvent.click(sendButton)

    const messageContent = getByText("hello")
    expect(messageContent).toBeInTheDocument()
  }),

  test('Message input exists', () => {
    const { getByPlaceholderText } = render(<MessagesComponent />)

    const inputPlaceholder = getByPlaceholderText('Type your message here...')
    expect(inputPlaceholder).toBeInTheDocument()
  }),

  test('Button to send message exists', () => {
    const { getByTestId } = render(<MessagesComponent />)

    const submitBtn = getByTestId('submitMessageButton')
    expect(submitBtn).toBeInTheDocument()
  })
})