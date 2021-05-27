import React, { Component, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


const PrivateRoute = ({ children }) => {
    // const auth = useSelector(state => state.auth)
    // const [isAuthenticated, setIsAuthenticated] = useState();

    useEffect(() => {
        let token = localStorage.getItem('token');
        console.log(token);

    }, []);
    return (
        <div>

        </div>
    )
}

export default PrivateRoute;

