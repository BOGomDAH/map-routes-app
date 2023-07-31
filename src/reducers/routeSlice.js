import { createSlice } from "@reduxjs/toolkit";

const routeSlice = createSlice({
    name: 'route',
    initialState: {
        selectedRoute: [[59.84660399, 30.29496392],[59.82934196, 30.42423701],[59.83567701, 30.38064206]],
        positions: null
    },
    reducers: {
        setSelectedRoute: (state, action) => {
            state.selectedRoute = action.payload;
        },
        setPositions: (state, action) => {
            state.positions = action.payload;
        }
    }
});

export const { setSelectedRoute, setPositions } = routeSlice.actions;
export default routeSlice.reducer;