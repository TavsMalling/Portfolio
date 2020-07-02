import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import Painting from '../Assets/Images/Painting.jpg'
import Ducks from '../Assets/Images/Ducks.jpg'
import ColouredLightning from '../Assets/Images/ColouredLightning.jpg'

import GitHubLogo from "../Assets/Images/github-logo.png";

function hero() {


    return (

        <Jumbotron className='p-0 bg-transparent mx-auto' >
            <Container fluid className='p-0' >
                <Image src={ColouredLightning} className='p-0 mx-auto d-block' fluid />
            </Container>
        </Jumbotron >


    );
}



export default hero;
