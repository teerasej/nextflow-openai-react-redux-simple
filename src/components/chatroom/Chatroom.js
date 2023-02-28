
import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ChatMessage from './ChatMessage'
function Chatroom() {

  const publishedMessage = [
    { sender: 'User' , message:'Hello'},
    { sender: 'GPT' , message:'Hi'}
  ];

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