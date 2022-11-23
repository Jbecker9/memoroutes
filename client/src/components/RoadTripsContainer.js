import React, { useState } from "react";
import RoadTripCard from "./RoadTripCard";

function RoadTripsContainer({ roadTrips }){
    const [pitStopsTripId, setPitStopsTripId] = useState(null)
    
    return(
        <div>
            { roadTrips.map((trip) => <RoadTripCard pitStopsTripId={pitStopsTripId} setPitStopsTripId={setPitStopsTripId} trip={trip} key={trip.id} /> ) }
        </div>
)}

export default RoadTripsContainer