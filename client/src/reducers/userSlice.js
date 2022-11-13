import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchUser = createAsyncThunk("roadTrips/fetchUser", () => {
    return fetch('/me')
            .then( (response) => {
                if (response.ok){
                    console.log("yes")
                } else {
                    console.log("no")
                }
            })
            .then((userData) => userData)
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
            state.status = "loading";
        },
        [fetchUser.fulfilled](state, action){
            state.entities = action.payload
            state.status = "idle"
        }
    }
})