import { combineReducers, configureStore } from "@reduxjs/toolkit";
import matessReducer from "./mates";

const rootReducer = combineReducers({ mates: matessReducer });

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
