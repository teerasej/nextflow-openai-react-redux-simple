// src/components/chatHistory/ChatHistoryComponent.js

import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ChatMessageComponent from './ChatMessageComponent';

function ChatHistoryComponent() {

  const chatHistory = [
    { id: 1, sender: "พล" , text: "สวัสดี" },
    { id: 2, sender: "AI" , text: "สวัสดี พล" },
    { id: 3, sender: "AI" , text: "ต้องการให้ช่วยอะไร" }
  ]

  const renderedMessage = chatHistory.map((chatMessage)=>{
    return (
      <ChatMessageComponent 
        sender={chatMessage.sender}
        text={chatMessage.text}
        key={chatMessage.id}
      />
    )
  })
  console.log(renderedMessage);

  return (
    <Row>
        <Container>
          <div className="chatroom">
              { renderedMessage }
          </div>
        </Container>
    </Row>
  )
}

export default ChatHistoryComponent