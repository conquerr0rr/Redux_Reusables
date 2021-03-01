import types from '../actions/types'
const Data = (state = [], action) => {
    switch (action.type) {
        case types.CREATE_DATA:
            return [...state, action.payload];
        case types.READ_DATA:
            return action.payload;
        case types.UPDATE_DATA:
            return state;
        case types.DELETE_DATA:
            return state.filter((data) => data._id !== action.payload);

        default:
            return state;
    }
}

export default Data;
