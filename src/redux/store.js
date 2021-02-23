import {combineReducers, createStore} from "redux";
import {booksReducer} from "./booksReducer";

let reducers = combineReducers(
    {
       booksPage: booksReducer
    }
);

let store = createStore(reducers);

export default store;