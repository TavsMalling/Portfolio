import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import HeroBackGround from '../Assets/Images/HeroBackGround.jpg'



function hero() {

    return (

        <Jumbotron fluid className='p-0 bg-transparent' >
            <Container className='p-0'>
                <Image src={HeroBackGround} className='p-0' fluid />
            </Container>
        </Jumbotron >


    );
}

export default hero;