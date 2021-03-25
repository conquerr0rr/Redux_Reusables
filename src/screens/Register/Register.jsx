import React from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="parent-container">
            <div className="register-container">
                <form>
                    <h2>Register</h2>
                    <div className="form-data">
                        <div className="form-field">
                            <label htmlFor="">Username</label>
                            <input type="username" required/>
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

export default Register;
