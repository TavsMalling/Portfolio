import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/Link";

import TavsMalling from "../Assets/Images/TavsMalling.PNG";
import CV from "../Assets/Files/Tavs_Malling-CV.pdf";

function CVContent() {
  return (
    <Container className="justify-content-center">
      <p className="font-weight-bolder text-center border-bottom">
        Tavs Christian Becker Malling
      </p>
      <Row className="border-bottom" xs={1} lg={2}>
        <Col className="text-center my-auto">
          <p className="font-weight-normal"> Born: 17/03/1998 in Copenhagen</p>
          <p className="font-weight-normal">Phone: +45 71 84 79 26</p>
          <p className="font-weight-normal">Email: Tavsmalling.com</p>
          <p className="font-weight-normal">
            Address: Else Alfelts vej 52E, 4 th. 2300 Copenhagen S
          </p>
        </Col>
        <Col>
          <Image className="pb-3 mx-auto d-block" fluid src={TavsMalling} />
        </Col>
      </Row>
      <Row xs={1} lg={2}>
        <Col>
          <p className="font-weight-bolder">Education</p>
          <ul>
            <p className="m-0">2020</p>
            <li className="ml-5">
              TEC Ballerup - Data work experience centre - P2 - Now
            </li>
            <p className="mt-3 mb-0">2019</p>
            <li className="ml-5">TEC Ballerup - Main course 1</li>
            <li className="ml-5">
              TEC Hvidovre - Data work experience centre - P1
            </li>
            <li className="ml-5">
              TEC Ballerup - Access granting course part 2
            </li>
            <p className="mt-3 mb-0">2018</p>
            <li className="ml-5">
              TEC Ballerup - Access granting course part 1
            </li>
            <p className="mt-3 mb-0">2017</p>
            <li className="ml-5">
              I.E.S. Fuente Lucena 1º Bachillerato - (Alhaurin el Grande,
              Malaga, Spain) Equivalent to the first year of college in the UK
            </li>
          </ul>
        </Col>
        <Col>
          <p className="font-weight-bolder">IT Experience</p>
          <ul>
            <li className="ml-5">
              C#
              <ul>
                <li>Object Oriented Programming</li>
                <li>Using external sources for reading and writing data to</li>
                <li>Descriptive naming</li>
              </ul>
            </li>
            <li className="ml-5">
              React.js
              <ul>
                <li>Properties</li>
                <li>States</li>
                <li>React-Bootstrap</li>
                <li>React-Router</li>
              </ul>
            </li>
            <li className="ml-5">ASP.NET</li>
            <li className="ml-5">Windows Presentation Foundation</li>
            <li className="ml-5">Microsoft SQL</li>
            <li className="ml-5">windows Forms</li>
            <li className="ml-5">JavaScript</li>
            <li className="ml-5">Bootstrap</li>
            <li className="ml-5">Professional use of Windows 10 and 7</li>
            <li className="ml-5">
              14 Years' experience of using a computer daily
            </li>
          </ul>
        </Col>
      </Row>
      <Row xs={1} lg={2}>
        <Col>
          <p className="font-weight-bolder">Work Experience</p>
          <ul>
            <p className="m-0">Denmark</p>
            <p className="mb-0">2018</p>

            <li className="ml-5">
              Hired by JJS ApS - 5 Months (Amusement park)
              <ul>
                <li>Customer Service</li>
                <li>Opening and closing the booth</li>
                <li>Cleaning</li>
              </ul>
            </li>
            <p className="mt-3 mb-0">Spain</p>
            <p className="mb-0">2018</p>
            <li className="ml-5">
              Family owned removals company - 4 months (Removals)
              <ul>
                <li>Lifting heavy objects</li>
                <li>The packaging and storage of objects</li>
              </ul>
            </li>
            <p className=" mt-3 mb-0">2017</p>
            <li className="ml-5">
              Hired by Sage - 5 months (Mason)
              <ul>
                <li>Laborer</li>
                <li>Mixing concrete</li>
                <li>Moving heavy objects</li>
              </ul>
            </li>
            <li className="mt-3 ml-5">
              Hired by Amstar International - 3 months
              <ul>
                <li>Transport and removals</li>
                <li>The packaging and storage of objects</li>
              </ul>
            </li>
            <p className="mt-3 mb-0">2016</p>
            <li className="ml-5">
              Hired by A.E.G Transportes - 3 months
              <ul>
                <li>Transport and removals</li>
                <li>The Packaging and storage of objects</li>
                <li>Keeping inventory</li>
              </ul>
            </li>
          </ul>
        </Col>
        <Col>
          <p className="font-weight-bolder">References</p>
          <ul>
            <li className="ml-5">
              <p>Jørn Siggurdson - Chief and owner, J J Sigurdsson ApS</p>
              <ul>
                <li>+45 75 74 54</li>
              </ul>
            </li>

            <li className="ml-5">
              <p>Lisa Kellett Administrative assistent, AMSTAR International</p>
              <ul>
                <li>+34 602 413 467</li>
              </ul>
            </li>

            <li className="ml-5">
              <p>
                Angela Campion - Chief of transportation and administration,
                A.E.G. Transportes
              </p>
              <ul>
                <li>+34 607 066 836</li>
                <li>+44 12 93 73 56 57</li>
              </ul>
            </li>
          </ul>
        </Col>
        <Col>
          <p className="font-weight-bolder">Languages</p>
          <ul className="ml-5">
            <li>
              <p className="mt-3 mb-0">Danish</p>
              <ul>
                <li>Written: Advanced</li>
                <li>Spoken: Advanced</li>
              </ul>
            </li>
            <li>
              <p className="mt-3 mb-0">English</p>
              <ul>
                <li>Written: Advanced</li>
                <li>Spoken: Advanced</li>
              </ul>
            </li>
            <li>
              <p className="mt-3 mb-0">Spanish</p>
              <ul>
                <li>Written: Advanced</li>
                <li>Spoken: Advanced</li>
              </ul>
            </li>
          </ul>
        </Col>
      </Row>
      <div className="text-center">
        <Button
          className="btn btn-lg btn-primary"
          href={CV}
          download="Tavs Malling CV.pdf">
          Download CV
        </Button>
      </div>
    </Container>
  );
}

export default CVContent;
