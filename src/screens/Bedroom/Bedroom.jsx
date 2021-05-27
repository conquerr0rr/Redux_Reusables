import React from 'react'
import BedroomStyles from './Bedroom.scss'
import ProductCards from '../../components/ProductCards/ProductCards';
import Sidebar from '../../components/Sidebar/Sidebar'
function Bedroom() {
    return (
        <div>
        <h1 className="page-heading">Bedroom</h1>
        <div className="living-container">
            <section id="sidebar">
                <Sidebar />
            </section>
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

export default Bedroom
