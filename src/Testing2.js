import { Container, Col, Row } from 'react-bootstrap';
import './Testing2.scss';

function Testing2() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <button class="login-btn">Login</button>
                </Col>
            </Row>
        </Container>
    )
}
export default Testing2;