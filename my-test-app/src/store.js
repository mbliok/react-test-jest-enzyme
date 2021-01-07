import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middlewere = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewere));

export default store; 