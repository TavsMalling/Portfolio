import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function hero(props) {
  const image = require("../Assets/Images/" + props.heroImage + ".jpg");
  return (
    <Jumbotron className="p-0 bg-transparent mx-auto">
      <Container fluid className="p-0">
        <Image src={image} className="p-0 mx-auto d-block" fluid />
      </Container>
    </Jumbotron>
  );
}
//<Image src={props.heroImage} className="p-0 mx-auto d-block" fluid />
export default hero;
