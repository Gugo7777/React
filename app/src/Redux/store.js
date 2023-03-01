import { combineReducers, createStore } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

const allReducers = combineReducers({
    conter: counterReducer,
    logged: loggedReducer,
});

const store = createStore(allReducers);

export default store;