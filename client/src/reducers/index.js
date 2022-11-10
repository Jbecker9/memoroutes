import { combineReducers } from "redux";
import roadTripsReducer from "./roadTripSlice";

const rootReducer = combineReducers({
    roadTrips: roadTripsReducer
});

export default rootReducer