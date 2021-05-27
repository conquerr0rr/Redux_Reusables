import React, { useEffect } from 'react'
import './LivingRoom.scss'
import ProductCards from '../../components/ProductCards/ProductCards';
import Sidebar from '../../components/Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../actions/Item';

const LivingRoom = (props) => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])


    const Items = useSelector(state => state.itemReducer.Items.data);
    console.log(Items)

    return (
        <div>
            <h1 className="page-heading">Living Room</h1>
            <div className="living-container">
                <section id="sidebar">
                    <Sidebar />
                </section>
                <section id="main">
                    {Items && Items.map((item) => (
                        <ProductCards 
                        key={item._id}
                        title={item.title}
                        price={item.price}
                        image={`http://localhost:9000/uploads/${item.image}`} />
                    ))
                    }
                </section>
            </div>
        </div>
    )
}

export default LivingRoom
