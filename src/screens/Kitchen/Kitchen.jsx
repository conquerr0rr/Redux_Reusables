import React from 'react'
import './Kitchen.scss'
import ProductCards from '../../components/ProductCards/ProductCards';
import Sidebar from '../../components/Sidebar/Sidebar'
function Kitchen() {
    return (
        <div>
            <h1 className="page-heading">KITCHEN</h1>
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

export default Kitchen
