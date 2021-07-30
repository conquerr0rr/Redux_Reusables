import React, { useState } from 'react'
import './Layout.scss'
import { Link } from 'react-router-dom';

// ICONS
import contactIcon from '../../assets/icons/contact_support-24px.svg'
import navigationIcon from '../../assets/icons/navigation-24px.svg'
import userIcon from '../../assets/icons/user-solid.svg'
import basketIcon from '../../assets/icons/shopping_basket-24px.svg'
import searchIcon from '../../assets/icons/search-24px.svg'

const Layout = ({ children }) => {
    const [search, setSearch] = useState('');
    return (
        <>
            <header>
                <div className="headertop">
                    <Link to="/">
                        <div className="logo">
                            <span>
                                <span className="yellow-text">R</span>
                                ena
                                <span className="yellow-text">R</span>t
                            </span>
                        </div>
                    </Link>

                    <div className="searchbar">

                        <input type="text" placeholder="Search for products and inspiration" onChange={event => setSearch(event.target.value)} />

                        <button>
                            <img alt="Search" src={searchIcon} />
                        </button>

                    </div>

                    <div className="navitems">
                        <ul>
                            <li>
                                <img alt="Navigation" src={navigationIcon} />
                                <p>Showroom</p>
                            </li>
                            <li>
                                <img alt="contact" src={contactIcon} />
                                <p>About Us</p>
                            </li>
                            <Link to="/login">
                                <li>
                                    <img alt="user" src={userIcon} />
                                    <p>Login</p>
                                </li>
                            </Link>
                            <Link to="/cart">
                                <li>
                                    <img alt="Cart" src={basketIcon} />
                                    <p>Cart</p>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>

                <div className="headerbottom">
                    <ul>
                        {/* WILL ONLY BE SHOWN WHEN MOUSE IS HOVERED ON HEADING */}
                        <Link to="/livingroom">
                            <li>Living Room</li>
                        </Link>
                        <Link to="/bedroom">
                            <li>Bedroom</li>
                        </Link>
                        <Link to="/kitchen">
                            <li>Kitchen & Dining</li>
                        </Link>
                    </ul>

                </div>


            </header>

            {children}
            <footer>
                <section className="ft-main">
                    <div className="ft-main-item">
                        <h2 className="ft-title">About</h2>
                        <ul>
                            <li>Services</li>
                            <li>Portfolio</li>
                            <li>Pricing</li>
                            <li>Customers</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Resources</h2>
                        <ul>
                            <li>Docs</li>
                            <li>Blog</li>
                            <li>eBooks</li>
                            <li>Webinars</li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Contact</h2>
                        <ul>
                            <li>Help</li>
                            <li>Sales</li>
                            <li>Advertise</li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Stay Updated</h2>
                        <p>Subscribe to our newsletter to get our latest news.</p>
                        <form>
                            <input type="email" name="email" placeholder="Enter email address" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                </section>

                <section className="ft-social">
                    <ul className="ft-social-list">
                        <li><i className="fab fa-facebook"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-github"></i></li>
                        <li><i className="fab fa-linkedin"></i></li>
                        <li><i className="fab fa-youtube" ></i></li>
                    </ul>
                </section>

                <section className="ft-legal">
                    <ul className="ft-legal-list">
                        <li>Terms &amp; Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </section>
            </footer>
        </>
    )
}

export default Layout
