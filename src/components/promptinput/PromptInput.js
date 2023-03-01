import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { messageAdded } from '../../redux/messageSlice';
import { Controller, useForm } from 'react-hook-form';

function PromptInput() {

    const dispatch = useDispatch();
    const { control, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {

        console.log(data);
        dispatch(
            messageAdded({
                sender: 'User',
                message: data.message
            })
        )

        reset();
    };


    return (
        <Row>
            <Col>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Controller
                            name="message"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                            render={({ field, fieldState: { error } }) => (
                                <Form.Control type="text" placeholder="Type your message here" isInvalid={!!error} {...field} />
                            )}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a message.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

export default PromptInput