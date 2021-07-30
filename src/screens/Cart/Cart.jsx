import React, { useEffect } from 'react'
import './Cart.scss';
import { Link } from 'react-router-dom';
import sofaImg from '../../assets/images/5-sofa-png-image-thumb.png'
import Bed from '../../assets/images/King-Size-Bed-PNG.png'
import DiningTable from '../../assets/images/Dining-Table-PNG-Image.png'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCartItems } from '../../actions/Cart'

const Cart = () => {
    const dispatch = useDispatch();
    let UserId = localStorage.getItem('token')
    console.log(UserId);
    useEffect(() => {
        dispatch(GetAllCartItems())
    }, []);

    const CartData = useSelector(state => state.CartReducer);
    console.log(CartData)
    return (
        <section id="shopping-container">
            <h1 className="main-heading">ORDER SUMMARY</h1>

            <div className="content-container">

                {/* <div className="cart-item">
                    <h3 className="item-number">1</h3>
                    <div className="item-img">
                        <img src={sofaImg} alt={sofaImg} />
                    </div>
                    <h3 className="item-heading">Sofa Set for 3 person</h3>
                    <div className="item-quantity">
                        <button><span>-</span></button>
                        <h4>1</h4>
                        <button><span>+</span></button>
                    </div>
                    <div className="item-pricing">
                        <h4>50 rs</h4>
                    </div>
                </div> */}



              <div className="cart-item">
                    <h3 className="item-number">1</h3>
                    <div className="item-img">
                        <img src={sofaImg} alt={sofaImg} />
                    </div>
                    <h3 className="item-heading">Sofa Set for 3 person</h3>
                    <div className="item-quantity">
                        <button><span>-</span></button>
                        <h4>1</h4>
                        <button><span>+</span></button>
                    </div>
                    <div className="item-pricing">
                        <h4>50000 rs</h4>
                    </div>
                </div>
                {/* <div className="cart-item">
                    <h3 className="item-number">2</h3>
                    <div className="item-img">
                        <img src={Bed} alt={sofaImg} />
                    </div>
                    <h3 className="item-heading">Double bed King size</h3>
                    <div className="item-quantity">
                        <button><span>-</span></button>
                        <h4>1</h4>
                        <button><span>+</span></button>
                    </div>
                    <div className="item-pricing">
                        <h4>15000 rs</h4>
                    </div>
                </div> */}
                {/* <div className="cart-item">
                    <h3 className="item-number">3</h3>
                    <div className="item-img">
                        <img src={DiningTable} alt={sofaImg} />
                    </div>
                    <h3 className="item-heading">Dining Table set including chairs</h3>
                    <div className="item-quantity">
                        <button><span>-</span></button>
                        <h4>1</h4>
                        <button><span>+</span></button>
                    </div>
                    <div className="item-pricing">
                        <h4>8050 rs</h4>
                    </div>
                </div>  */}
                <a href="https://api.razorpay.com/v1/payment_links/">
                <button className="checkout-button">Proceed To Checkout -{'>'}</button>
                </a>
            </div>
            {/* <div className="empty-container">
                <h2>Whoops! Your cart is currently empty.</h2>
            </div> */}

        </section>
    )
}

export default Cart;
