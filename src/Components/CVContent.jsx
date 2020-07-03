import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


import TavsMalling from '../Assets/Images/TavsMalling.PNG'



function CVContent() {
    return (
        <Container className='justify-content-center'>
            <p className='font-weight-bolder text-center border-bottom'>Tavs Christian Becker Malling</p>
            <Row className='border-bottom' xs={1} lg={2}>

                <Col className='text-center my-auto'>
                    <p className='font-weight-normal'> Born: 17/03/1998 in Copenhagen</p>
                    <p className='font-weight-normal'>Phone: +45 71 84 79 26</p>
                    <p className='font-weight-normal'>Email: Tavsmalling.com</p>
                    <p className='font-weight-normal'>Address: Else Alfelts vej 52E, 4 th. 2300 Copenhagen S</p>
                </Col>
                <Col >
                    <Image className='pb-3 mx-auto d-block' fluid src={TavsMalling} />
                </Col>
            </Row>
            <Row xs={1} lg={2}>

            </Row>
        </Container>


    );
}

export default CVContent;