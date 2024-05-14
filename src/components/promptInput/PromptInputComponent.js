
import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';

export default function PromptInputComponent() {

  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    e.preventDefault()
    console.log('change to:' + e.target.value)
    setMessage(e.target.value); 
  }

  return (
    <div>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                placeholder="Type your message here"
                type="text"
                onChange={handleChange}
                value={message}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
