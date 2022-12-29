import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRoadTripsByLength = createAsyncThunk("roadTrips/fetchRoadTripsByLength", (format) => {
    return fetch(`/road_trips/filter_by_length/${format}`)
            .then((response)=>response.json())
            .then((roadTripData) => roadTripData)
})

export const fetchRoadTripsSearch = createAsyncThunk("roadTrips/fetchRoadTripsSearch", (tripName) => {
    return fetch(`/road_trips/search/${tripName}`)
            .then((response)=>response.json())
            .then((roadTripData) => roadTripData)
})

// export const fetchActiveRoadTrip = createAsyncThunk("roadTrips/fetchActiveRoadTrip", (tripId) => {
//     return fetch(`road`)
// })

const initialState = {
    entities: [],
    status: "idle"
};

const roadTripSlice = createSlice({
    name: "roadTrips",
    initialState,
    reducers: {
        addRoadTrip(state, action){
            state.entities.push(action.payload)
        },
        updateTrip(state, action){
            // const roadTripIndex = state.entities.findIndex((trip) => trip.id === action.payload.id)
            
        },
    },
    extraReducers: {
        [fetchRoadTripsByLength.pending](state){
            state.entities = [];
            state.status = "loading";
        },
        [fetchRoadTripsByLength.fulfilled](state, action){
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
        }
    },
});

// export const {} = roadTripSlice.actions;

export default roadTripSlice.reducer