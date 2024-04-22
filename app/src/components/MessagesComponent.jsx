import { useEffect, useState } from 'react'
import axios from 'axios'

let initMessages = []
let initResponses = []

const Message = ({ content, isResponse }) => {
  const style = `bg-gray-100 text-gray-800 px-4 py-2 rounded-lg border border-gray-300 mb-2 w-fit m${isResponse ? 'r' : 'l'}-auto`
  return (
    <p id="postedMessage" className={style}>
      {content}
    </p>
  )
}

const MessageForm = ({ addMessageHandler, isDisabled }) => {
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addMessageHandler(content)
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <fieldset disabled={isDisabled} className="flex items-center">
        <input
          data-testid="messageInput"
          placeholder="Type your message here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="flex-grow bg-white text-black px-4 py-2 rounded-lg mr-2 border border-gray-300"
        />
        <button
          data-testid="submitMessageButton"
          type="submit"
          className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-800"
        >
          Send
        </button>
      </fieldset>
    </form>
  )
}

const MessagesComponent = () => {
  const [responseLoading, setResponseLoading] = useState(false)
  const [messages, setMessages] = useState(initMessages)
  const [responses, setResponses] = useState(initResponses)
  const [userData, setUserData] = useState('')

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = () => {
    axios({ url: 'http://localhost:8420/userdata', method: 'get', withCredentials: true })
      .then((resp) => {
        const { data } = resp
        setUserData(data.username)
      })
  }

  const addNewMessage = async (content) => {
    setResponseLoading(true)
    const newMessage = { id: messages.length + 1, content }
    setMessages([...messages, newMessage])

    const loadingResponse = { id: newMessage.id, content: 'loading AI response...' }
    setResponses([...responses, loadingResponse])
    console.log("axios is running")
    const { data } = await axios({
      url: 'http://localhost:8420/api',
      method: 'post',
      withCredentials: true,
      data: { text: content },
    })
    const newResponse = { id: newMessage.id, content: data.message }
    console.log(newResponse)
    const newResponses = responses.map((c, i) => {
      if (i === c.id - 1) {
        return newResponse
      } else {
        return c
      }
    })
    setResponses([...responses, newResponse])
    setResponseLoading(false)
  }

  return (
    <div className="flex justify-center items-center py-14">
      <div className="w-3/4 rounded-lg border border-gray-300 p-6 flex flex-col" style={{ height: "34rem" }}>
        <div className="flex-grow">
          <span className="">Logged in as {userData}</span>
          {messages.map((message) => {
            const response = responses[message.id - 1]
            return (
              <div key={message.id} >
                <Message isResponse={false} content={message.content} />
                <Message isResponse key={`r-${response.id}`} content={response.content} />
              </div>
            )
          })}
        </div>
        <MessageForm addMessageHandler={addNewMessage} isDisabled={responseLoading} />
      </div>
    </div>
  )
}

export default MessagesComponent