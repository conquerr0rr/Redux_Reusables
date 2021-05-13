import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { newLogin } from '../../actions/User';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const dispatch = useDispatch();
    const [loginDetails, setloginDetails] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(newLogin(loginDetails));
    }

    return (
        <div className="parent-container">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="form-data">
                        <div className="form-field">
                            <label htmlFor="">Email</label>
                            <input onChange={
                                (e) => {
                                    setloginDetails({
                                        ...loginDetails,
                                        email: e.target.value
                                    })
                                }} type="email" required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="">Password</label>
                            <input onChange={
                                (e) => {
                                    setloginDetails({
                                        ...loginDetails,
                                        password: e.target.value
                                    })
                                }} type="password" required />
                        </div>
                        <span>Forgot Password?</span>
                        <button>Login</button>
                        <h5>Not Registered?
                            <Link className="link" to="/register">Register Here</Link>
                        </h5>
                    </div>

                </form>
                <div className="login-heading"></div>
                <div className="login-form-container"></div>
            </div>
        </div >
    )
}

export default Login;
