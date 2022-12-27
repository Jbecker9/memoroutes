import { combineReducers } from "redux";
import roadTripsReducer from "./roadTripSlice";
import statesReducer from "./stateSlice";
import userReducer from "./userSlice";

export default combineReducers({
    userReducer,
    roadTripsReducer,
    statesReducer
})