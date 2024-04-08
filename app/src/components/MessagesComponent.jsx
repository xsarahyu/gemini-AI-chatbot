import { useState } from 'react'

let initMessages = [
  { id: 1, content: "Hello" },
  { id: 2, content: "What is Leon's real name?" }
]

const Message = ({ content }) => {
  return (
    <p className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300 mb-2 w-fit ml-auto">
      {content}
    </p>
  )
}

const MessageForm = ({ addMessageHandler }) => {
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addMessageHandler(content)
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        data-testid="message-input"
        placeholder="Type your message here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="bg-white text-black px-4 py-2 rounded-lg mr-2 border border-gray-300"
      />
      <button
        data-testid="message-submit"
        type="submit"
        className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-800"
      >
        Send
      </button>
    </form>
  )
}

const MessagesComponent = () => {
  const [messages, setMessages] = useState(initMessages)

  const addNewMessage = (content) => {
    const newMessage = { id: messages.length + 1, content }
    setMessages([...messages, newMessage])
  }

  return (
    <div className="flex justify-center items-center py-14">
      <div
        className="w-3/4 rounded-lg border border-gray-300 p-6"
        style={{ height: '34rem' }}>
        {messages.map(message => <Message key={message.id} content={message.content} />)}
        <MessageForm addMessageHandler={addNewMessage} />
      </div>
    </div>
  )
}

export default MessagesComponent