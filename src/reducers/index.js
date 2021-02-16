import IsloggedReducer from './IsloggedReducer';
import counterReducer  from './counterReducer';
import { combineReducers } from 'redux';

const rootReducer  = combineReducers ({
    counterReducer : counterReducer,
    IsloggedReducer : IsloggedReducer
});

export default rootReducer;