import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchStates = createAsyncThunk("/states/fetchStates", () => {
    return fetch("/states")
            .then( (response) => response.json() )
            .then( (stateData) => stateData )
})


const initialState = {
    entities: [],
    status: "idle"
}

const stateSlice = createSlice({
    name: "states",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchStates.pending](state){
            state.entities = [];
            state.status = "loading";
        },
        [fetchStates.fulfilled](state, action){
            state.entities = action.payload;
            state.status = "idle";
        },
    },
})

// export const {} = stateSlice.actions;

export default stateSlice.reducer