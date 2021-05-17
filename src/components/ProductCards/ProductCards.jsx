import React from 'react'
import './ProductCards.scss'
import BedImg from '../../assets/images/king-na-rosewood-sheesham-weavekingstorage-1-home-edge-teak-original-imafuyzxph2xheec.jpeg'

const ProductCards = () => {
    return (
        <section id="General-Card">
               <div className="img-container">
                    <img src={BedImg} alt="" />
                </div>
            <div className="inner-container">
                <h3 className="title">Yolo solid wooden bed 6ft</h3>
                <p className="price">11500 rs</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </section>
    )
}

export default ProductCards
