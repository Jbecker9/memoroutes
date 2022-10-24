import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const showUser = createAsyncThunk("user/showUser", () => {
    return fetch("/me").then((r)=>r.json()).then((user) => user)
})

export const loginUser = createAsyncThunk("/user/loginUser", (userData) => {
    return fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    }).then((r)=>r.json())
        .then((user) => user)
});

export const logoutUser = createAsyncThunk("/user/logoutUser", () => {
    return fetch("/logout",{
        method: "DELETE"
    }).then((r)=>r.json()).then((user) => user)
});

export const createNewUser = createAsyncThunk("/user/createNewUser", (newUserData) => {
    return fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserData)
    }).then((r)=>r.json())
        .then((user) => user)
});

const initialState = {
    entities: [],
    status: "idle"
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userCheck(state){
            state.status = "idle"
        },
    },
    extraReducers: {
        [showUser.pending](state){
            state.status = "loading";
        },
        [showUser.fulfilled](state, action){
            state.entities = action.payload;
            state.status = "idle";
        },
        [loginUser.pending](state){
            state.status = "loading";
        },
        [loginUser.fulfilled](state, action){
            state.entities = action.payload;
            state.status = "idle";
        },
        [createNewUser.pending](state){
            state.status = "loading";
        },
        [createNewUser.fulfilled](state, action){
            state.entities = action.payload;
            state.status = "idle";
        },
        [logoutUser.pending](state){
            state.status = "loading"
        },
        [logoutUser.fulfilled](state){
            state.entities = null
            state.status = "idle"
        }
    },
});

export const { userCheck } = userSlice.actions;

export default userSlice.reducer