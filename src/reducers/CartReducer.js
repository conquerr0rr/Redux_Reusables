import { ADD_CART_SUCCESS, ADD_CART_FAIL, GET_CART_SUCCESS, GET_CART_FAIL } from '../constants/constant';
const CartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_CART_SUCCESS:
        case GET_CART_SUCCESS:
            return [
                ...state,
                action.payload
            ];
        case ADD_CART_FAIL:
        case GET_CART_FAIL:
            return state;
        default:
            return state;
    }
}

export default CartReducer;