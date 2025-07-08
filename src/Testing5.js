import { Container, Col, Row } from 'react-bootstrap';
import './Testing5.scss';

function Testing5() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <div class="navbar">
                        <div class="nav-item login">
                            <div class="login-button">
                                <i class="fa-regular fa-user"></i>
                                Login
                                <i class="fa-solid fa-chevron-up dropdown-arrow"></i>
                            </div>

                            <div class="dropdown">
                                <div class="dropdown-header">
                                    <span>New customer?</span>
                                    <b>Sign Up</b>
                                </div>
                                <div class="dropdown-item"><i class="fa-regular fa-user"></i> My Profile</div>
                                <div class="dropdown-item"><i class="fa-solid fa-crown"></i> Flipkart Plus Zone</div>
                                <div class="dropdown-item"><i class="fa-solid fa-box"></i> Orders</div>
                                <div class="dropdown-item"><i class="fa-regular fa-heart"></i> Wishlist</div>
                                <div class="dropdown-item"><i class="fa-solid fa-gift"></i> Rewards</div>
                                <div class="dropdown-item"><i class="fa-regular fa-credit-card"></i> Gift Cards</div>
                            </div>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}
export default Testing5;