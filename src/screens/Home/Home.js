import React from 'react';
import './Home.scss'
import { useSelector, useDispatch } from 'react-redux';
import Increment from '../../actions/Increment';
import Decrement from '../../actions/Decrement';
const Home = () => {
    const counter = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>I am home</h1>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(Increment())}>+</button>
            <button onClick={() => dispatch(Decrement())}>-</button>
        </div>
    );
}

export default Home;