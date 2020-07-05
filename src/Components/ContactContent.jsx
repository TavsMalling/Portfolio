import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ContactForm from "./ContactForm";

function contactContent() {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <p>Phone: +45 71 84 79 26</p>
          <p>Email: Tavsmalling@gmail.com</p>
          <p>Linkedin: www.linkedin.com/in/tavs-malling-565933192</p>
        </Col>
      </Row>
    </Container>
  );
}
//<ContactForm />
export default contactContent;
