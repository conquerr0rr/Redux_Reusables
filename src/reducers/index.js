import IsloggedReducer from './IsloggedReducer';
import counterReducer from './counterReducer';
import Data from './Data';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counterReducer: counterReducer,
    IsloggedReducer: IsloggedReducer,
    Data: Data,
});

export default rootReducer;