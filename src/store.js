import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { loadingReducer } from './reducers/loadingReducer';

const reducers = combineReducers({ 
  loadingReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;