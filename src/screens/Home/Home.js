import React, { useEffect } from 'react';
import './Home.scss'
import sofaImg from '../../assets/images/5-sofa-png-image-thumb.png';
import { useDispatch } from 'react-redux'
import { readData } from '../../actions/Data'

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readData());
    }, [dispatch]);
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
                    <div className="box">
                        <span>Sofas & Armchairs</span>
                        <img src={sofaImg} />
                    </div>
                    <div className="box">
                        <span>Furniture</span>
                        <img src={sofaImg} />
                    </div>
                    <div className="box">
                        <span>Lighting</span>
                        <img src={sofaImg} />
                    </div>
                    <div className="box">
                        <span>Soft Furnishings</span>
                        <img src={sofaImg} />
                    </div>
                    <div className="box">
                        <span>Kitchen</span>
                        <img src={sofaImg} />
                    </div>
                    <div className="box">
                        <span>Home Accesories</span>
                        <img src={sofaImg} />
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


            </section>
        </main>
    );
}

export default Home;