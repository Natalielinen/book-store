import {combineReducers, createStore} from "redux";
import {booksReducer} from "./booksReducer";
import {booksItemReducer} from "./booksItemReducer";

let reducers = combineReducers(
    {
        booksPage: booksReducer,
        booksItem: booksItemReducer
    }
);

let store = createStore(reducers);

export default store;