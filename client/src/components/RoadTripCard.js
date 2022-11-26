import React from "react";
import RoadTripPitStops from "./RoadTripPitStops";

function RoadTripsCard({ trip, pitStopsTrip, setPitStopsTrip }){

    return(
        <div>
            <h2>{trip.name}</h2>
            <p>{trip.road_trip_distance_miles} miles</p>
            <h4>{trip.departure.departure_city}, {trip.departure.departure_state} to {trip.destination.destination_city}, {trip.destination.destination_state} </h4> 
            <h5>{trip.pit_stops.length} Pit Stops</h5>
            <div>
            { pitStopsTrip?.id === trip.id ? <RoadTripPitStops setPitStopsTrip={setPitStopsTrip} pitStops={trip.pit_stops} /> : <button onClick={()=>setPitStopsTrip(trip)}>Show Pit Stops</button> }
            </div>
            <button> Add to your Trips! </button>
        </div>
    )
}

export default RoadTripsCard