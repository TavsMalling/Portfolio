import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

import GitHubLogo from "../Assets/Images/gitHubMark.svg";

function navBar() {
  return (
    <Navbar
      sticky="top"
      className="border-bottom mx-5 mt-1"
      bg="transparent"
      variant="light"
      expand="lg">
      <Navbar.Brand>Tavs Malling</Navbar.Brand>

      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/">
            Me
          </Link>
          <Link className="nav-link" to="/CV">
            CV
          </Link>
          <Link to="/contact" className="nav-link">
            <Image src={GitHubLogo} roundedCircle width="30px" height="auto" />
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navBar;
