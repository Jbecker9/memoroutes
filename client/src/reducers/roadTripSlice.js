import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRoadTrips = createAsyncThunk("roadTrips/fetchRoadTrips", (format) => {
    return fetch(`/road_trips/filter_by_length/${format}`)
            .then((response)=>response.json())
            .then((roadTripData) => roadTripData)
})

export const fetchRoadTripsSearch = createAsyncThunk("roadTrips/fetchRoadTripsSearch", (tripName) => {
    return fetch(`/road_trips/search/${tripName}`)
            .then((response)=>response.json())
            .then((roadTripData) => roadTripData)
})

const initialState = {
    entities: [],
    status: "idle"
};

const roadTripSlice = createSlice({
    name: "roadTrips",
    initialState,
    reducers: {
        getRoadTrips(state){
            state.status = "idle"
        },
    },
    extraReducers: {
        [fetchRoadTrips.pending](state){
            state.entities = [];
            state.status = "loading";
        },
        [fetchRoadTrips.fulfilled](state, action){
            state.entities = action.payload;
            state.status = "idle";
        },
        [fetchRoadTripsSearch.pending](state){
            state.entities = [];
            state.status = "loading";
        },
        [fetchRoadTripsSearch.fulfilled](state, action){
            state.entities = action.payload;
            state.status = "idle";
        },
    },
});

// export const {} = roadTripSlice.actions;

export default roadTripSlice.reducer