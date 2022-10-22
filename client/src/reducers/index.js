import { combineReducers } from "redux";
import usersReducer from "./userSlice";

const rootReducer = combineReducers({
    user: usersReducer
});

export default rootReducer