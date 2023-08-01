import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer.js";
import rootSaga from "../sagas/index.js";

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(middleware)
    )
});

sagaMiddleware.run(rootSaga)

export default store;