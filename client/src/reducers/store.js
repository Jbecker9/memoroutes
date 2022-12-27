import { configureStore } from "@reduxjs/toolkit";
import statesReducer from "./stateSlice"
import roadTripsReducer from "./roadTripSlice"
import userReducer from "./userSlice"


const store = configureStore({
    reducer: {
        user: userReducer,
        roadTrips: roadTripsReducer,
        states: statesReducer
    }
});

export default store;