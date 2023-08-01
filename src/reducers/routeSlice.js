import { createSlice } from "@reduxjs/toolkit";

const name = 'route'

const initialState = {
    data: null,
    loading: false,
    error: null,
}

const routeSlice = createSlice({
    name,
    initialState,
    reducers: {
        fetchPositionsPending: (state,) => {
            state.error = null;
            state.loading = true;
        },
        fetchPositionsSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchPositionsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { fetchPositionsPending, fetchPositionsSuccess, fetchPositionsFailure } = routeSlice.actions;

export default routeSlice.reducer;