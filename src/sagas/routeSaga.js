import { call, put, takeLatest } from 'redux-saga/effects';
import {fetchRouteData} from "../HTTP-services/OSRM/utils.js";
import {
    fetchPositionsFailure,
    fetchPositionsPending,
    fetchPositionsSuccess,
} from "../reducers/routeSlice.js";

function* fetchRouteSaga(action){
    try {
        const positionsData = yield call(fetchRouteData, action.payload);

        yield put(fetchPositionsSuccess(positionsData));
    } catch (error) {
        yield put(fetchPositionsFailure(error.message))
    }
}

export function* routeSaga() {
    yield takeLatest(fetchPositionsPending.type, fetchRouteSaga);
}