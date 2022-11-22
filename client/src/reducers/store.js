import { configureStore } from "@reduxjs/toolkit";
import statesReducer from "./stateSlice"
import roadTripsReducer from "./roadTripSlice"

const store = configureStore({
    reducer: {
        states: statesReducer,
        roadTrips: roadTripsReducer
    }
});

export default store;