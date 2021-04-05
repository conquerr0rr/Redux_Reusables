import { REGISTER_FAIL, REGISTER_SUCCESS } from '../constants/constant.js';
import * as api from '../api/index';
import { toast } from "react-toastify";

export const newRegister = (FormData) => async (dispatch) => {
    try {
        const user = await api.register(FormData);
        console.log(user.data);
        if (user.status === 200) {
            toast.success('🦄 Wow so easy!', {
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
        else {
            toast.error("Invalid inputs! Register failed");
            dispatch({
                type: REGISTER_FAIL,
                payload: user.data.message
            });
        }
    } catch (error) {
        console.log(error);
    }
}