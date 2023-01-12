import React from "react";
import { useDispatch } from "react-redux";
import { updateLikedTrip } from "../../../reducers/roadTripSlice";
import PitStopContainer from "./PitStopContainer";
import "../../../styles/TripCard.css"

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
        <div className="TripCard-div">
            <h2 className="TripCard-h2">{trip.trip_name}</h2>
            {trip.road_trip_distance_miles? <p>{trip.road_trip_distance_miles} miles</p> : null }
            <h4>{trip.departure.city_name}, {trip.departure.state_name} to { trip.destination ? `${trip.destination.city_name}, ${trip.destination.state_name}` : "No Destination!" } </h4>
            <div>
            { pitStopsTrip?.id === trip.id ? <PitStopContainer setPitStopsTrip={setPitStopsTrip} pitStops={trip.pit_stops} /> : <div className="TripCard-pitStopButton" onClick={()=>setPitStopsTrip(trip)}>Show {trip.pit_stops.length} Pit Stops <i className="fa-regular fa-rv"></i> </div> }
            </div>
            <div onClick={plusOneLike} className="TripCard-likeButton"> <i className="fa-regular fa-thumbs-up"></i> { trip.user_likes ? trip.user_likes : 0 } Likes! </div> 
        </div>
    )
}

export default TripCard