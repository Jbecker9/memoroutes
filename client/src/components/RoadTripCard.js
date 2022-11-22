import React from "react";

function RoadTripsCard({ trip }){

    return(
        <div>
            <h2>{trip.name}</h2>
            <p>{trip.road_trip_distance_miles} miles</p>
            <h4>{trip.departure.departure_city}, {trip.departure.departure_state} to {trip.destination.destination_city}, {trip.destination.destination_state} </h4> 
            <h5>{trip.pit_stops.length} Pit Stops</h5>
            <button>Show Pit Stops</button>
        </div>
    )
}

export default RoadTripsCard