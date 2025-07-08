import { Container, Col, Row } from 'react-bootstrap';
import './Testing.scss';

function Testing() {

    return (
        <Container fluid>
            <Row>
                <Col sm={6}>
                    <div class="search-box">
                        <span class="search-icon">&#128269;</span>
                        <input
                            type="text"
                            placeholder="Search for Products, Brands and More"
                            class="search-input"
                        />
                    </div>

                </Col>

                <Col sm={6}>
                    asdf
                </Col>

            </Row>
        </Container>
    )
}
export default Testing;