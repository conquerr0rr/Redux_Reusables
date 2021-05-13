import IsloggedReducer from './IsloggedReducer';
import counterReducer from './counterReducer';
import Data from './Data';
import User from './User'
import itemReducer from './itemReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counterReducer: counterReducer,
    IsloggedReducer: IsloggedReducer,
    User: User,
    Data: Data,
    itemReducer:itemReducer
});

export default rootReducer;