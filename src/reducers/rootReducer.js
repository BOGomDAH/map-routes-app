import {combineReducers} from "@reduxjs/toolkit";
import routeReducer from "./routeSlice.js";

const rootReducer = combineReducers({
    route: routeReducer
});

export default rootReducer;