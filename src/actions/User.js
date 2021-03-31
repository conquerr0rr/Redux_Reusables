import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_FAIL, REGISTER_SUCCESS } from '../constants/constant.js';
import * as api from '../api/index';

export const register = (FormData) => async (dispatch) => {
    try {
        const { user } = await api.register(FormData);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: user
        });
    } catch (error) {
        dispatch({
            type:REGISTER_FAIL
        });
        console.log(error.message);
    }
}