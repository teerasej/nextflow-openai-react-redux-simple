// src/components/promptInput/PromptInputComponent.js

import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { addMessageToHistory } from '../../redux/chatSlice';
import { useDispatch } from 'react-redux';

// import askAI thunk เพื่อใช้งาน
import { askAI } from '../../redux/askAIThunk';

function PromptInputComponent() {

    const [message, setMessage] = useState("")
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()
        setMessage(e.target.value)
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const actionObject = addMessageToHistory(message)
        dispatch(actionObject)

        // เรียกใช้งาน askAI thunk โดยส่งข้อความ message ให้เป็น parameter
        const thunkAction = askAI(message)
        dispatch(thunkAction)

        setMessage("")
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSubmit(e);
        }
    };

    return (
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
                            onKeyDown={handleKeyDown}
                            />
                    </Form.Group>
                    <Button variant="primary" onClick={onSubmit}>
                        Send
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

export default PromptInputComponent