import { combineReducers } from "redux";
import roadTripsReducer from "./roadTripSlice";
import statesReducer from "./stateSlice";

export default combineReducers({
    statesReducer,
    roadTripsReducer
})