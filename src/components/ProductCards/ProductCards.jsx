import React from 'react'
import './ProductCards.scss'
import BedImg from '../../assets/images/king-na-rosewood-sheesham-weavekingstorage-1-home-edge-teak-original-imafuyzxph2xheec.jpeg'

const ProductCards = ({ image, price, title }) => {
    return (
        <section id="General-Card">
            <div className="img-container">
                <img src={image} alt="" />
            </div>
            <div className="inner-container">
                <h3 className="title">{title}</h3>
                <p className="price">{price}</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </section>
    )
}

export default ProductCards
