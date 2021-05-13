import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';



// THE STORE IS BASICALLY THE GLOBALIZED STATE WHICH ALLOWS FLOW OF DATA THROUGHOUT THE PROJECT

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));
// THE REDUX THUNK ALLOWS US TO WRITE ACTION CREATORS WHICH RETURNS A FUNCTION INSTEAD OF ACTION
export default store;
