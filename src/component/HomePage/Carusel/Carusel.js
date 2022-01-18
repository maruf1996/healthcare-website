import React from 'react';
import { Carousel } from 'react-bootstrap';
import carusel1 from '../../../img/carusel/carusel1.jpg';
import carusel2 from '../../../img/carusel/carusel2.jpg';
import carusel3 from '../../../img/carusel/carusel3.jpg';
import carusel4 from '../../../img/carusel/carusel4.jpg';
import carusel5 from '../../../img/carusel/carusel5.jpg';

const Carusel = () => {
    return (
        <>
            <Carousel className="container">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carusel1}
                alt="First slide"
                style={{height:"500px",width:"400px"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carusel2}
                alt="Second slide"
                style={{height:"500px",width:"400px"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carusel3}
                alt="Third slide"
                style={{height:"500px",width:"400px"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carusel4}
                alt="Third slide"
                style={{height:"500px",width:"400px"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carusel5}
                alt="Third slide"
                style={{height:"500px",width:"400px"}}
                />
            </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Carusel;