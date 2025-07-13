import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./Testing7.scss";

const FullWidthCarousel = () => {
    return (
        <div className="full-carousel-wrapper">
            <Carousel controls indicators fade>
                {/* Slide 1 */}
                <Carousel.Item>
                    <Container fluid className="carousel-slide d-flex align-items-center">
                        <Row className="w-100 align-items-center ">
                            <Col md={6} className="text-center">
                                <img
                                    src="/images/one.jpg"
                                    className="banner-img"
                                    alt="Nothing Phone"
                                />
                            </Col>
                            <Col md={6} className="text-center">

                                <h2>Nothing Phone (3a)</h2>
                                <p>From ₹26,999</p>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>


                <Carousel.Item>
                    <Container fluid className="carousel-slide d-flex align-items-center">
                        <Row className="w-100 align-items-center">
                            <Col md={6} className="text-center">
                                <img
                                    src="/images/two.jpg"
                                    className="banner-img"
                                    alt="Nothing Phone"
                                />
                            </Col>
                            <Col md={6} className="testing">

                                <h2>Nothing Phone (3a)</h2>
                                <p>From ₹26,999</p>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>



                <Carousel.Item>
                    <Container fluid className="carousel-slide d-flex align-items-center">
                        <Row className="w-100 align-items-center">
                            <Col md={6} className="text-center">
                                <img
                                    src="/images/three.jpg"
                                    className="banner-img"
                                    alt="Nothing Phone"
                                />
                            </Col>
                            <Col md={6} className="text-content">

                                <h2>Nothing Phone (3a)</h2>
                                <p>From ₹26,999</p>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default FullWidthCarousel;
