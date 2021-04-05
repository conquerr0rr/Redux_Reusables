import React, { useEffect } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = () => {
        localStorage.setItem('token', 'abcd');
        let variable = localStorage.getItem('token');
        console.log(variable);
        sessionStorage.setItem('token', 'abcd');
        document.cookie = "sample text";
    };
    useEffect(() => {
        handleLogin();
    }, []);
    return (
        <div className="parent-container">
            <div className="login-container">
                <form>
                    <h2>Login Form</h2>
                    <div className="form-data">
                        <div className="form-field">
                            <label htmlFor="">Username</label>
                            <input type="username" required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="">Password</label>
                            <input type="password" required />
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

export default Login
