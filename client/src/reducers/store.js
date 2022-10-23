import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userSlice";

const store = configureStore({
    reducer: {
        user: usersReducer,
        // devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    }
});

export default store;