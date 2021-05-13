import { READ_DATA, CREATE_DATA, UPDATE_DATA, DELETE_DATA} from  '../constants/constant'
const Data = (state = [], action) => {
    switch (action.type) {
        case CREATE_DATA:
            return [
                ...state, 
                action.payload
            ];
        case READ_DATA:
            return action.payload;
        case UPDATE_DATA:
            return state;
        case DELETE_DATA:
            return state.filter((data) => data._id !== action.payload);

        default:
            return state;
    }
}

export default Data;
