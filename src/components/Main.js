
import { Container, Col, Row } from 'react-bootstrap';
import Header from './Header';
import Main_Products_Option from './Main_Products_Option';
import './Main.scss';

function Main() {
    return (
        <>
            <Container fluid>
                <Header />
                <Main_Products_Option />
            </Container>


            {/* <Container>
                <Row>
                    <Col sm={4} style={{ background: 'red', padding: '10px' }}>
                        asdfsaf
                    </Col>
                    <Col sm={4} style={{ background: 'blue', padding: '10px' }}>
                        sss
                    </Col>
                    <Col sm={4} style={{ background: 'green', padding: '40px' }}>
                        ff
                    </Col>
                </Row>
            </Container>


            <Container fluid>
                <Row>
                    <Col sm={4} style={{ background: 'red', padding: '10px' }}>
                        asdfsaf
                    </Col>
                    <Col sm={4} style={{ background: 'blue', padding: '10px' }}>
                        sss
                    </Col>
                    <Col sm={4} style={{ background: 'green', padding: '40px' }}>
                        ff
                    </Col>
                </Row>
            </Container> */}
        </>
    )
}

export default Main;
