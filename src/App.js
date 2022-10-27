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
          <br />
          <Alert key="danger" variant="danger">
            Danger
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
