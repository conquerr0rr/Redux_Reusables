import IsloggedReducer from './IsloggedReducer';
import counterReducer from './counterReducer';
import Data from './Data';
import User from './User'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counterReducer: counterReducer,
    IsloggedReducer: IsloggedReducer,
    User:User,
    Data: Data,
});

export default rootReducer;