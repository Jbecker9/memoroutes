import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "react";
import roadTripsReducer from "./roadTripSlice"

const store = configureStore({
    reducer: {
        roadTrips: roadTripsReducer
    }
});

export default store;