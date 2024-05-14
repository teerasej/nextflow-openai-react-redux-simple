import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import PromptInputComponent from './components/promptInput/PromptInputComponent';
import ChatHistoryComponent from './components/chatHistory/ChatHistoryComponent';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>My GPT</h1>
        </Col>
      </Row>
      {/* Chatroom */}
      <ChatHistoryComponent/>
      {/* PromptInput */}
      <PromptInputComponent/>
    </Container>
  );
}

export default App;
