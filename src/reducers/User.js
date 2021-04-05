import { REGISTER_FAIL, REGISTER_SUCCESS } from '../constants/constant.js';
const User = (state = [], action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return [...state, action.payload];
        case REGISTER_FAIL:
            return action.payload;
        default:
            return state;
    }

}
export default User;