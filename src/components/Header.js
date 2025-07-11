
import { Col, Row, } from 'react-bootstrap';
import './Header.scss'

function Header() {
    return (
        <div className="">
            <Row className="p-top p-bottom header">
                <Col className='logo col-1_5 '>
                    <img src="./images/logo.png"></img>
                </Col>

                <Col sm={6} className='header_main_search '>
                    <div class="search-box">
                        <span class="search-icon">&#128269;</span>
                        <input
                            type="text"
                            placeholder="Search for Products, Brands and More"
                            class="search-input"
                        />
                    </div>



                </Col>
                <Col className="col-4_5">
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
                        <div class="nav-item"><i class="fa-solid fa-cart-shopping"></i> Cart</div>
                        <div class="nav-item"><i class="fa-solid fa-store"></i> Become a Seller</div>
                        <div class="nav-item"><i class="fa-solid fa-ellipsis-vertical"></i></div>

                    </div>
                </Col>
            </Row>

        </div>

    )
}

export default Header;

