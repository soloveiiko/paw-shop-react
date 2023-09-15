import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import openAuthReducer from './authForm/reducer';
import openCartReducer from './cartForm/reducer';

const rootReducer = combineReducers({
  auth: openAuthReducer,
  cart: openCartReducer,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
