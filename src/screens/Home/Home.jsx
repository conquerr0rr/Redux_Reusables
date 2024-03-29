import React, { useEffect } from 'react';
import './Home.scss'
import sofaImg from '../../assets/images/5-sofa-png-image-thumb.png';
import BedImg from '../../assets/images/King-Size-Bed-PNG.png';
import DiningImg from '../../assets/images/Dining-Table-PNG-Image.png';
import tableImg from '../../assets/images/table.png';
import lampImg from '../../assets/images/lamp.png';
import furnitureImg from '../../assets/images/furniture.png';
import kitchenImg from '../../assets/images/kitchen.png';
import diningImg from '../../assets/images/dining.png';

import { useDispatch, useSelector } from 'react-redux'
import { readData } from '../../actions/Data';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readData());
    }, [dispatch]);

    const items = useSelector((state) => state.Data);
    return (
        <main>
            <section id="slider">
                <div className="data">
                    <h1>Flash Sale</h1>
                    <h2>Upto 70% off</h2>
                    <button>Shop Now</button>
                </div>
            </section>
            <section id="explore">
                <h1>NEW IN STORE</h1>
                <div className="explore-text">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasdgfte gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, conseteturasddwre sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                et justo duo dolores et ea rebum.</p>
                </div>

                <div className="explore-boxes">

                    {/* <div className="box">
                        <span>Sofas & Armchairs</span>
                        <img alt="sofa" src={sofaImg} />
                    </div> */}
                    {items.map((items) => (
                        <div className="box" key={items._id}>
                            <span >{items.firstname} {items.lastname}</span>
                            <img alt="sofa" src={sofaImg} />
                        </div>
                    ))
                    }

                    <div className="box">
                        <span>Furniture</span>
                        <img alt="sofa" src={sofaImg} />
                    </div>
                    <div className="box">
                        <span>Table</span>
                        <img alt="sofa" src={tableImg} />
                    </div>
                    <div className="box">
                        <span>Lighting</span>
                        <img alt="sofa" src={lampImg} />
                    </div>
                    <div className="box">
                        <span>Soft Furnishings</span>
                        <img alt="sofa" src={furnitureImg} />
                    </div>
                    <div className="box">
                        <span>Kitchen</span>
                        <img alt="sofa" src={kitchenImg} />
                    </div>
                    <div className="box">
                        <span>Home Accesories</span>
                        <img alt="sofa" src={diningImg} />
                    </div>

                </div>
            </section>
            <section id="information">
                <div className="information-text">
                    <h1>Inspiration Ideas</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea.</p>
                    <button>KNOW MORE</button>
                </div>
            </section>
            <section id="hot-deals">
                <h1>Clearance Deals</h1>
                <p>Upto 50% off</p>

                <div className="deals-row">
                    <div className="deal-box">
                        <div className="img-container">
                        <img alt="" src={sofaImg} />
                        </div>
                        <h3>Dining Tables</h3>
                        <button>Shop Now</button>
                    </div>
                    <div className="deal-box">
                        <div className="img-container">
                        <img alt="" src={BedImg} />
                        </div>
                        <h3>Queen Bed</h3>
                        <button>Shop Now</button>
                    </div>
                    <div className="deal-box">
                        <div className="img-container">
                        <img alt="" src={DiningImg} />
                        </div>
                        <h3>Dining Tables</h3>
                        <button>Shop Now</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;