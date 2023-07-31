import { combineReducers, configureStore } from "@reduxjs/toolkit";
import routeReducer from "./routeSlice";

const rootReducer = combineReducers({
    route: routeReducer
});

export const store = configureStore({
    reducer: rootReducer
});