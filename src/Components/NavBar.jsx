
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import GitHubLogo from "../Assets/Images/gitHubMark.svg";


function navBar() {
    return (

        <Navbar
            sticky='top'
            className="border-bottom py-0"
            bg="light"
            variant="light"
            expand="lg">
            <Navbar.Brand className='justify-content-start' fluid={true}><h1 className='my-auto'>Tavs Malling</h1></Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto ">
                    <Link className="nav-link mr-1 my-auto" to="/">
                        Me
                    </Link>
                    <Link className="nav-link mr-1 my-auto" to="/CV">
                        CV
                    </Link>
                    <Link className="nav-link mr-1 my-auto" to="/Contact">
                        Contact
                    </Link>
                    <a href="https://github.com/TavsMalling/Portfolio" target='_blank' className="nav-link mr-1 my-auto">
                        <Image src={GitHubLogo} roundedCircle width="50px" height="auto" />
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


    );
}

export default navBar;