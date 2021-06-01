import { ADD_CART_SUCCESS, ADD_CART_FAIL } from '../constants/constant';
import * as api from '../api/index'

export const AddCartItem = (CartDetails) => async (dispatch) => {
    try {
        let res = await api.addProductToCart(CartDetails);
        console.log(res)
        dispatch({
            type: ADD_CART_SUCCESS,
            payload: res.data.data
        })
    } catch (error) {
        dispatch({
            type: ADD_CART_FAIL
        });
    }
}
