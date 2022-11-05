import React, { useContext } from "react";
import { UserContext } from "../context/user";
import "../styles/MapActiveTripDeparture.css"

function MapActiveTripDeparture(){
    const { activeTrip } = useContext(UserContext)
    
    return(
        <div className="MapActiveTripDeparture-div">
            <div>
                <h4>Departure:</h4>
                <h3>{ activeTrip.departure.departure_city }, { activeTrip.departure.departure_state } </h3>
            </div>
        </div>
    )
}

export default MapActiveTripDeparture