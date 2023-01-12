import React, { useState } from "react";
import TripCard from "./Trip/TripCard";
import "../../styles/RoadTripsPage.css"

function RoadTripsContainer({ roadTrips }){
    const [pitStopsTrip, setPitStopsTrip] = useState(null)
    return(
        <div className="RoadTripsPage-container">
            { roadTrips.map((trip) => <TripCard pitStopsTrip={pitStopsTrip} setPitStopsTrip={setPitStopsTrip} trip={trip} key={trip.id} /> ) }
        </div>
)}

export default RoadTripsContainer