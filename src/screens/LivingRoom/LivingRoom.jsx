import React from 'react'
import './LivingRoom.scss'
import ProductCards from '../../components/ProductCards/ProductCards';

function LivingRoom() {
    return (
        <div>
            <h1 className="page-heading">Living Room</h1>
            <div className="living-container">
                <section id="sidebar"></section>
                <section id="main">
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                </section>
            </div>
        </div>
    )
}

export default LivingRoom
