
//src/components/chatHistory/ChatMessageComponent.js

import './ChatMessage.css';
import { Col, Container, Row } from 'react-bootstrap'

function ChatMessageComponent(props) {

//   let { sender, text } = props
  // สามารถใช้วิธีด้านล่างนี้ได้เหมือนกัน
  let sender = props.sender
  let text = props.text

  return (
    <Container>
      <Row className='msg-bubble'>
        <Col xs={1} className='sender'>
          {sender}
        </Col>
        <Col md="auto" className='message'>
          {text}
        </Col>
      </Row>
    </Container>
  )
}

export default ChatMessageComponent