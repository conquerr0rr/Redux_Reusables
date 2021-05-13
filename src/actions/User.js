import { REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/constant.js';
import * as api from '../api/index';
import { toast } from "react-toastify";

export const newRegister = (FormData) => async (dispatch) => {
    try {
        const user = await api.register(FormData);
        console.log(user.data);
        // IF STATUS CODE RECIEVED IS 200 THEN GIVE TOAST MESSAGE WITH A DISPATCH TYPE
        if (user.status === 200) {
            toast.success('Registered Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            dispatch({
                type: REGISTER_SUCCESS,
                payload: user
            });
        }
    }
 catch (error) {
        toast.error("Register failed");
        dispatch({
            type: REGISTER_FAIL,
        });
        console.log(error);
    }
};

export const newLogin = (loginDetails) => async (dispatch) => {
    try {
        let loginResponse = await api.login(loginDetails);
        console.log(loginResponse);
        if (loginResponse.status === 200) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: loginResponse
            })
            toast.success('Login Successful', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            localStorage.setItem('token', loginResponse.data.token);
        }
    } catch (error) {
        toast.error('Login Failed');
        dispatch({
            type: LOGIN_FAIL,
        })
        console.log(error);
    }
}