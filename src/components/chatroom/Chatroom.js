
import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ChatMessage from './ChatMessage'
function Chatroom() {

  return (
    <Row>
        <Container>
          <div className="chatroom">
            <ChatMessage sender="User" message="Hi"/>
            <ChatMessage sender="GPT" message="Hello"/>
          </div>
        </Container>
    </Row>
  )
}

export default Chatroom