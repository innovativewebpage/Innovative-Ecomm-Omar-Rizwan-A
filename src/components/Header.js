import React from 'react';
import { Col, Row } from 'react-bootstrap'
import './Header.scss'

function Header() {

    return (
        <div className="header">
            <Row>
                <Col sm={2} className='red'>
                    sdfasdf
                </Col>

                <Col sm={5} className='green'>
                    sss


                </Col>
                <Col sm={2} className="brown half-col">
                    sdfsd
                </Col>
                <Col sm={2} className="red half-col">
                    sdfsdf
                </Col>
                <Col sm={2} className="blue">
                    sdfsdf
                </Col>
            </Row>

        </div>

    )
}

export default Header;

