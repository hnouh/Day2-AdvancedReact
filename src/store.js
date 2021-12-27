import { createStore, combineReducers } from "redux";
import counter from './reducers/counter'
import user from './reducers/user'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({ counter,user });
const store = createStore(reducers,composeWithDevTools());
export default store;
