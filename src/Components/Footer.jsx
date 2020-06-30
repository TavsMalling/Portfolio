import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="mt-5 mx-5 ">
      <Container fluid={true}>
        <Row className="border-top p-3 justify-content-between">
          <Col className="p-0 justify-content-start" md={3} sm={12}>
            Tavs Malling
          </Col>
          <Col className="p-0" md={3} sm={12}>
            <Row className="justify-content-center">
              <h1 className="font-weight-bolder ">Interested?</h1>
            </Row>
            <Row
              className="p-0 justify-content-center border-top"
              md={3}
              sm={12}>
              <button className="btn btn-primary btn-sm mt-3">
                Contact Me
              </button>
            </Row>
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            This site was made by Tavs Malling.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
