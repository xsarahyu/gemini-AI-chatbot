import React, { useState } from 'react';

let initMessages = [
  {id: 1, content: "first message"},
  {id: 2, content: "second message"},
  {id: 3, content: "third message"},
  {id: 4, content: "fourth message"},
  {id: 5, content: "fifth message"},
];

const Message = ({content}) => {
  return <li>{content}</li>;
};

const MessageForm = ({addMessageHandler}) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessageHandler(content);
    setContent('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

const MessagesComponent = () => {
  const [messages, setMessages] = useState(initMessages);

  const addNewMessage = (content) => {
    const newMessage = { id: messages.length + 1, content };
    setMessages([...messages, newMessage]);
  };

  return (
    <>
      <ul>
        {messages.map(message => <Message key={message.id} content={message.content} />)}
      </ul>
      <MessageForm addMessageHandler={addNewMessage} />
    </>
  );
};

export default MessagesComponent;
