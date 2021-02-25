import React from 'react'
import './Layout.scss'

// ICONS
import briefcaseIcon from '../../assets/icons/briefcase-solid.svg'
import contactIcon from '../../assets/icons/contact_support-24px.svg'
import navigationIcon from '../../assets/icons/navigation-24px.svg'
import userIcon from '../../assets/icons/user-solid.svg'
import basketIcon from '../../assets/icons/shopping_basket-24px.svg'
import searchIcon from '../../assets/icons/search-24px.svg'

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <div className="headertop">

                    <div className="logo">
                        <span>Maynooth</span>
                    </div>

                    <div className="searchbar">
                        <button>
                            <img src={searchIcon} />
                        </button>
                        <input type="text" placeholder="Search for Products and Inspiration" />

                    </div>

                    <div className="navitems">
                        <ul>
                            <li>
                                <img src={navigationIcon} />
                                <p>Showroom</p>
                            </li>
                            <li>
                                <img src={contactIcon} />
                                <p>Contact</p>
                            </li>
                            <li>
                                <img src={userIcon} />
                                <p>Account</p>
                            </li>
                            <li>
                                <img src={basketIcon} />
                                <p>Basket</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="headerbottom">
                    <ul>
                        <li>Living Room</li>
                        <li>Bedroom</li>
                        <li>Kitchen & Dining</li>
                    </ul>
                </div>
            </header>
            {children}
            <footer>
                <section className="ft-main">
                    <div className="ft-main-item">
                        <h2 className="ft-title">About</h2>
                        <ul>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Customers</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Resources</h2>
                        <ul>
                            <li><a href="#">Docs</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">eBooks</a></li>
                            <li><a href="#">Webinars</a></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Contact</h2>
                        <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Sales</a></li>
                            <li><a href="#">Advertise</a></li>
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
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-github"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </section>

                <section className="ft-legal">
                    <ul className="ft-legal-list">
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li>&copy; 2019 Copyright Nowrap Inc.</li>
                    </ul>
                </section>
            </footer>
        </>
    )
}

export default Layout
