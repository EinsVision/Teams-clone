import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

function App() {
  return (
    <div className="app">
      <ChatEngine
        height='100vh'
        userName='changdae'
        userSecret='123123'
        projectID='e1a09eda-981e-48d2-86e6-2ee6a42ff771'
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
