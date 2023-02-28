import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { messageAdded } from '../../redux/messageSlice';

function PromptInput() {

    const dispatch = useDispatch();

    const onSubmit = () => {

        dispatch(
            messageAdded({
                sender: 'User',
                message: 'Test'
            })
        )
    };


    return (
        <Row>
            <Col>
                <Form>
                    <Form.Group controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" placeholder="Type your message here"/>
                        <Form.Control.Feedback type="invalid">
                            Please enter a message.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" onClick={onSubmit}>
                        Send
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

export default PromptInput