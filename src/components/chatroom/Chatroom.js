
import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ChatMessage from './ChatMessage'
import { useSelector } from 'react-redux';
function Chatroom() {
  const publishedMessage = useSelector(state => state.messages);

  const renderedMessage = publishedMessage.map(message => (
    <ChatMessage sender={message.sender} message={message.message}/>
  ))

  return (
    <Row>
        <Container>
          <div className="chatroom">
            {
              renderedMessage
            }
          </div>
        </Container>
    </Row>
  )
}

export default Chatroom