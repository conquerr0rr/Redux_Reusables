import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

// THE STORE IS BASICALLY THE GLOBALIZED STATE WHICH ALLOWS FLOW OF DATA THROUGHOUT THE PROJECT

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
// THE REDUX THUNK ALLOWS US TO WRITE ACTION CREATORS WHICH RETURNS A FUNCTION INSTEAD OF ACTION
export default store;
