import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUser = createAsyncThunk("user/fetchUser", () => {
    return fetch('/me')
            .then((response) => response.json())
            .then((userData) => userData)
})

export const createUser = createAsyncThunk("user/createUser", (newUserObject) => {
    return fetch('/signup', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(newUserObject)
    })
        .then((response) => response.json())
        .then( newUserData => newUserData )
})

export const logInUser = createAsyncThunk( "user/logInUser", (userObject) => {
    return  fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObject)
    }).then((r)=>r.json())
        .then(userData => console.log(userData))
})

export const logOutUser = createAsyncThunk( "user/logOutUser", () => {
    return fetch('/logout',{
        method: "DELETE"
    })
    .then((response) => response.json())
})

const initialState = {
    entities: [],
    status: "idle"
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUser.pending](state){
            state.status = "loading...";
        },
        [fetchUser.fulfilled](state, action){
            state.entities = action.payload
            state.status = "idle";
        },
        [logInUser.pending](state){
            state.status = "loading...";
        },
        [logInUser.fulfilled](state, action){
            state.entities = action.payload
            state.status = "idle";
        },
        [logOutUser.pending](state){
            state.status = "loading...";
        },
        [logOutUser.fulfilled](state){
            state.entities = [];
            state.status = "idle";
        }
    }
})

export default userSlice.reducer