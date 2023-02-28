import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Chatroom from './components/chatroom/Chatroom';
import PromptInput from './components/promptinput/PromptInput';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>My GPT</h1>
        </Col>
      </Row>
      {/* Chatroom */}
      <Chatroom/>
      {/* PromptInput */}
      <PromptInput/>
    </Container>
  );
}

export default App;
