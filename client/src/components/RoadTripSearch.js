import React, { useState } from "react";

function RoadTripSearch({ setSearchValue }){

    function fetchRoadTrips(event){
        event.preventDefault()
        fetch(`/road_trips/${event.target.value}`)
            .then((response)=>response.json())
            .then((tripData) => console.log(tripData))
    }
    

    return(
        <div>
                <input onChange={fetchRoadTrips} placeholder="Search..." />
                <button> Submit Search </button>
        </div>
    )
}

export default RoadTripSearch