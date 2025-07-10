import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Main_Products_Option.scss';

const FlipkartMenu = () => {
    return (
        <div className="flipkart-menu-wrapper">
            <Container>

                <Row className="flipkart-menu1">
                    <Col clasame="menu-item">
                        {/* <Col xs={6} sm={4} md={3} lg={2} className="menu-item"> */}
                        <a href="#"><img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/29327f40e9c4d26b.png?q=100" alt="Grocery" /></a>
                        <span>Grocery</span>
                    </Col>
                    {/* <Col xs={6} sm={4} md={3} lg={2} className="menu-item"> */}
                    <Col className="menu-item">
                        <a href="#"><img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/22fddf3c7da4c4f4.png?q=100" alt="Mobiles" /></a>
                        <span>Mobiles</span>
                    </Col>
                    {/* <Col xs={6} sm={4} md={3} lg={2} className="menu-item"> */}
                    <Col className="menu-item">
                        <a href="#"><img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100" alt="Fashion" /></a>
                        <span>Fashion <span className="arrow">▼</span></span>
                    </Col>
                    {/* <Col xs={6} sm={4} md={3} lg={2} className="menu-item"> */}
                    <Col className="menu-item">
                        <a href="#"><img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/69c6589653afdb9a.png?q=100" alt="Electronics" /></a>
                        <span>Electronics <span className="arrow">▼</span></span>
                    </Col>
                    {/* <Col xs={6} sm={4} md={3} lg={2} className="menu-item"> */}
                    <Col className="menu-item">
                        <a href="#"><img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ab7e2b022a4587dd.jpg?q=100" alt="Home & Furniture" /></a>
                        <span>Home & Furniture <span className="arrow">▼</span></span>
                    </Col>
                    {/* <Col xs={6} sm={4} md={3} lg={2} className="menu-item"> */}
                    <Col className="menu-item">
                        <a href="#"><img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0ff199d1bd27eb98.png?q=100" alt="Appliances" /></a>
                        <span>Appliances</span>
                    </Col>
                    {/* <Col xs={6} sm={4} md={3} lg={2} className="menu-item"> */}
                    <Col className="menu-item">
                        <a href="#"><img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/71050627a56b4693.png?q=100" alt="Flight Bookings" /></a>
                        <span>Flight Bookings</span>
                    </Col>
                    {/* <Col xs={6} sm={4} md={3} lg={2} className="menu-item"> */}
                    <Col className="menu-item">
                        <a href="#"><img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/f15c02bfeb02d15d.png?q=100" alt="Beauty, Toys & More" /></a>
                        <span>Beauty, Toys & More <span className="arrow">▼</span></span>
                    </Col>
                    {/* <Col xs={6} sm={4} md={3} lg={2} className="menu-item"> */}
                    <Col className="menu-item">
                        <a href="#"><img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/dff3f7adcf3a90c6.png?q=100" alt="Two Wheelers" /></a>
                        <span>Two Wheelers <span className="arrow">▼</span></span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FlipkartMenu;
