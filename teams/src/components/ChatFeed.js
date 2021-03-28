import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';


function ChatFeed(props) {
  console.log(props)
  return (
    <div>
      ChatFeed
      <MessageForm />
      <MyMessage />
      <TheirMessage />
    </div>
  )
}

export default ChatFeed
