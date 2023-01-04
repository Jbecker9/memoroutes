import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRoadTripsSearch } from "../../reducers/roadTripSlice";

function RoadTripSearch(){
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch();

    function searchRoadTrips(event){
        event.preventDefault()
        dispatch(fetchRoadTripsSearch(searchValue))
    }
    
    return(
        <div>
            <form onSubmit={searchRoadTrips}>
                <input onChange={(event)=>setSearchValue(event.target.value)} placeholder="Search with Trip Name..." />
                <button> Submit Search!</button>
            </form>
        </div>
    )
}

export default RoadTripSearch