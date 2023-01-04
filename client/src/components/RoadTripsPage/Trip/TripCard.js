import React from "react";
import { useDispatch } from "react-redux";
import { updateLikedTrip } from "../../../reducers/roadTripSlice";
import PitStopContainer from "./PitStopContainer";

function TripCard({ trip, pitStopsTrip, setPitStopsTrip }){
    const dispatch = useDispatch();

    function plusOneLike(){
        fetch(`/road_trips/${trip.id}/update_likes`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json())
            .then((trip_data) => { 
                dispatch(updateLikedTrip(trip_data))
             })
    }

    return(
        <div>
            <h2>{trip.trip_name}</h2>
            <p>{trip.road_trip_distance_miles} miles</p>
            <h4>{trip.departure.city_name}, {trip.departure.state_name} to {trip.destination?.city_name}, {trip.destination?.state_name} </h4> 
            <h5>{trip.pit_stops.length} Pit Stops</h5>
            <div>
            { pitStopsTrip?.id === trip.id ? <PitStopContainer setPitStopsTrip={setPitStopsTrip} pitStops={trip.pit_stops} /> : <button onClick={()=>setPitStopsTrip(trip)}>Show Pit Stops</button> }
            </div>
            <button onClick={plusOneLike}> { trip.user_likes ? trip.user_likes : 0 } Likes! </button> 
        </div>
    )
}

export default TripCard