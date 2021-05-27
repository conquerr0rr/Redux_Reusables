import React from 'react'
import './Sidebar.scss'

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <h3 className="filter-heading">APPLY FILTERS</h3>
            <hr />
            <div className="category-container">
                <h4 className="category-heading">PRICE</h4>
                <ul>
                    <li>
                        <input type="checkbox" value="abcd" name="" id="" />
                        <p>Under ₹ 5000</p>
                    </li>
                    <li>
                        <input type="checkbox" value="abcd" name="" id="" />
                        <p>₹ 10000 to ₹ 20000</p>
                    </li>
                    <li>
                        <input type="checkbox" value="abcd" name="" id="" />
                        <p>₹ 20000 to ₹ 30000</p>
                    </li>
                    <li>
                        <input type="checkbox" value="abcd" name="" id="" />
                        <p>Over ₹ 30000 </p>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="category-container">
                <h4 className="category-heading">PRICE</h4>
                <ul>
                    <li>
                        <input type="checkbox" value="abcd" name="" id="" />
                        <p>Under ₹ 5000</p>
                    </li>
                    <li>
                        <input type="checkbox" value="abcd" name="" id="" />
                        <p>₹ 10000 to ₹ 20000</p>
                    </li>
                    <li>
                        <input type="checkbox" value="abcd" name="" id="" />
                        <p>₹ 20000 to ₹ 30000</p>
                    </li>
                    <li>
                        <input type="checkbox" value="abcd" name="" id="" />
                        <p>Over ₹ 30000 </p>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="category-container">
                <h4 className="category-heading">PRICE</h4>
                <ul>
                    <li>
                        <input type="checkbox" value="abcd" name="" id="" />
                        <p>Under ₹ 5000</p>
                    </li>
                    <li>
                        <input type="checkbox" value="abcd" name="" id="" />
                        <p>₹ 10000 to ₹ 20000</p>
                    </li>
                    <li>
                        <input type="checkbox" value="abcd" name="" id="" />
                        <p>₹ 20000 to ₹ 30000</p>
                    </li>
                    <li>
                        <input type="checkbox" value="abcd" name="" id="" />
                        <p>Over ₹ 30000 </p>
                    </li>
                </ul>
            </div>
            <hr />
        </div>
    )
}

export default Sidebar
