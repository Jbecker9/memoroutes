import React, { useState } from "react";
import RoadTripsCard from "./RoadTripCard";

function RoadTripsContainer({ roadTrips }){
    const [pitStops, setPitStops] = useState(null)
    
    return(
        <div>
            { roadTrips.map((trip) => <RoadTripsCard trip={trip} key={trip.id} /> ) }
        </div>
)}

export default RoadTripsContainer