import {all} from "redux-saga/effects";
import {routeSaga} from "./routeSaga.js";

function* rootSaga() {
    yield all([
        routeSaga()
    ])
}

export default rootSaga;