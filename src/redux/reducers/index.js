import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import fetchReducer from "./Fetch";

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    fetch:fetchReducer,
});

export default reducers;