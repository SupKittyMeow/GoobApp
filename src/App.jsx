import { useState } from 'react';
import './App.css';
import ChatExtrasButton from './components/ChatExtrasButton';
import ChatInput from './components/ChatInput';
import ChatSendButton from './components/ChatSendButton';
import ChatWindow from './components/ChatWindow';
import SwitcherPanel from './components/SwitcherPanel';
import createChatObject from './utils/ChatMessageObject';

function App() {
    let [ messages, setMessages ] = useState([])

  const addNewInput = (newMessage) => {
        setMessages(messages.concat({ newMessage }))
        console.log(messages)
    }

  const handleMessageSent = () => {
    console.log("Message sent!")
    addNewInput(createChatObject('John Smith', 0, './assets/react.svg', 'Lorem ipsum asdfsfa the quick brown fox jumps over the lazy dog!'))
  }

  return (
    <div className='wrapper'>
      <ChatWindow messages={messages}></ChatWindow>
      <ChatInput onSend={handleMessageSent}></ChatInput>
      <ChatExtrasButton></ChatExtrasButton>
      <ChatSendButton onSend={handleMessageSent}></ChatSendButton>
      <SwitcherPanel></SwitcherPanel>
    </div>
  );
}

export default App;
