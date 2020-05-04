import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { loadingReducer } from './reducers/loadingReducer';
import { checkoutReducer } from './reducers/checkoutReducer';

const reducers = combineReducers({ 
  loadingReducer, checkoutReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;