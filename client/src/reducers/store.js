import { configureStore } from "@reduxjs/toolkit";
import roadTripsReducer from "./roadTripSlice"

const store = configureStore({
    reducer: {
        roadTrips: roadTripsReducer
    }
});

export default store;