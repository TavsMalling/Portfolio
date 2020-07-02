import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import '../Assets/Styles/Footer.css'

function Footer() {
    return (
        <footer className="mt-5 mx-5">
            <Container fluid>
                <Row className="border-top p-1 justify-content-between" >
                    <Col className="p-0" md={3} sm={12}>
                        <p class='FooterText LeftText' >Tavs Malling</p>
                    </Col>
                    <Col className="p-0 my-3" md={3} sm={12}>
                        <Row className="p-0 justify-content-center" >
                            <h1 className="font-weight-bolder">Interested?</h1>
                        </Row>
                        <Row
                            className="p-0 border-top justify-content-center">
                            <button className="btn btn-primary btn-sm mt-3">
                                Contact Me
                            </button>
                        </Row>
                    </Col>
                    <Col className="p-0" md={3} sm={12}>
                        <p class='FooterText RightText' >This site was made with React.js.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;