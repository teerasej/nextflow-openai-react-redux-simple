import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ChatMessageComponent from './ChatMessageComponent'
import { useSelector } from 'react-redux';
function ChatHistoryComponent() {

    // สร้าง Array เป็นตัวแทนของ message ที่จะแสดงใน chat history 
    const chatHistory = useSelector(state => state.chatroom.chatHistory);

    // สร่้าง Array ของ JSX 
    const renderedMessage = chatHistory.map(chatMessage => (
        <ChatMessageComponent
            key={chatMessage.id}
            sender={chatMessage.sender}
            text={chatMessage.text}
            isUser={chatMessage.sender === 'User'} />
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

export default ChatHistoryComponent