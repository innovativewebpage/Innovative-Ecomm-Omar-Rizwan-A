import { Container, Col, Row } from 'react-bootstrap';
import './Testing3.scss';

function Testing3() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <div class="navbar">
                        <div class="nav-item">
                            <i class="fa-regular fa-user"></i>
                            Login
                            <i class="fa-solid fa-chevron-down dropdown-arrow"></i>
                        </div>
                        <div class="nav-item">
                            <i class="fa-solid fa-cart-shopping"></i>
                            Cart
                        </div>
                        <div class="nav-item">
                            <i class="fa-solid fa-store"></i>
                            Become a Seller
                        </div>
                        <div class="nav-item">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Testing3;