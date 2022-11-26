import React, { useState } from "react";
import RoadTripCard from "./RoadTripCard";

function RoadTripsContainer({ roadTrips }){
    const [pitStopsTrip, setPitStopsTrip] = useState(null)
    
    return(
        <div>
            { roadTrips.map((trip) => <RoadTripCard pitStopsTrip={pitStopsTrip} setPitStopsTrip={setPitStopsTrip} trip={trip} key={trip.id} /> ) }
        </div>
)}

export default RoadTripsContainer