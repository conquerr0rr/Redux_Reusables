import {
    GET_SINGLE_ITEM_SUCCESS,
    GET_SINGLE_ITEM_FAIL,
    GET_ALL_ITEMS_FAIL,
    GET_ALL_ITEMS_SUCCESS,
    GET_ITEMS_BY_CATEGORY_FAIL,
    GET_ITEMS_BY_CATEGORY_SUCCESS,
    DELETE_ITEM_FAIL,
    DELETE_ITEM_SUCCESS,
    UPDATE_ITEM_FAIL,
    UPDATE_ITEM_SUCCESS,
    CREATE_ITEM_SUCCESS,
    CREATE_ITEM_FAIL
} from '../constants/constant';

let initialState = {
    loader: true,
    Items: []
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ITEMS_SUCCESS:
        case GET_ITEMS_BY_CATEGORY_SUCCESS:
        case GET_SINGLE_ITEM_SUCCESS:
            return {
                ...state,
                Items: action.payload,
                loader: false
            };
        case CREATE_ITEM_SUCCESS:
            return {
                ...state,
                Items: [
                    ...state.Items,
                    action.payload
                ],
                loader: false
            }
        case DELETE_ITEM_SUCCESS:
            return state;

        case GET_ALL_ITEMS_FAIL:
        case GET_SINGLE_ITEM_FAIL:
        case GET_ITEMS_BY_CATEGORY_FAIL:
        case DELETE_ITEM_FAIL:
        case CREATE_ITEM_FAIL:
            return state;
        default:
            return state;
    }

}

export default itemReducer;