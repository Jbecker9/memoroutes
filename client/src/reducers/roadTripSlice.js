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
        updateLikedTrip(state, action){
            const trip_index = state.entities.findIndex((trip) => trip.id === action.payload.id)
            const newState = state.entities.filter( (trip) => trip.id !== action.payload.id )
            newState.splice(trip_index, 0, action.payload)
            state.entities = newState
        }
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

export const { updateLikedTrip } = roadTripSlice.actions;

export default roadTripSlice.reducer