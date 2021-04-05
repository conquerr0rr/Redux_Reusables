import React, { useState } from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { newRegister } from '../../actions/User';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const dispatch = useDispatch();
    const [FormData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(newRegister(FormData));
        console.log(FormData);
    }

    const toggleButton = () => {
        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
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
            <div className="register-container">

                <form onSubmit={handleSubmit}>
                    <h2>Register</h2>
                    <div className="form-row">
                        <div className="form-data">
                            <div className="form-field">
                                <label htmlFor="">First name</label>
                                <input type="text" name="firstname" required
                                    onChange={(e) => setFormData({
                                        ...FormData,
                                        firstname: e.target.value
                                    })} />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">Email</label>
                                <input type="email" required name="email"
                                    onChange={(e) => setFormData({
                                        ...FormData,
                                        email: e.target.value
                                    })} />
                            </div>

                        </div>
                        <div className="form-data">
                            <div className="form-field">
                                <label htmlFor="">Last name</label>
                                <input type="text" required
                                    onChange={(e) => {
                                        setFormData({
                                            ...FormData,
                                            lastname: e.target.value
                                        })
                                    }} />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">Password</label>
                                <input type="password" required
                                    onChange={(e) => setFormData({
                                        ...FormData,
                                        password: e.target.value
                                    })} />
                            </div>
                        </div>
                    </div>
                    <div className="form-button-row">
                        <div className="form-data">
                            <button type="submit">Register</button>
                            <h5>Already Registered?
                            <Link className="link" to="/login">Login Here</Link>
                            </h5>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Register;
