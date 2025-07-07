import { Container, Col, Row } from 'react-bootstrap';
import './Testing1.scss';

function Testing1() {

    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <div class="container">
                        <div class="box">Item 1</div>
                        <div class="box">Item 2</div>
                        <div class="box">Item 3</div>
                        <div class="box">Item 4</div>
                    </div>

                </Col>


            </Row>
        </Container>
    )
}
export default Testing1;