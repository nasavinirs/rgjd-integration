import { Container, Row, Col, Alert } from "react-bootstrap";

function App() {
  return (
    <Container>
      <br />
      <Row>
        <Col>
          <Alert key="success" variant="success">
            Success
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
