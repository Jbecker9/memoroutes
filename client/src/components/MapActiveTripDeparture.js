import React, { useContext } from "react";
import { UserContext } from "../context/user";
import "../styles/MapActiveTripDeparture.css"

function MapActiveTripDeparture(){
    const { activeTrip } = useContext(UserContext)
    
    return(
        <div className="MapActiveTripDeparture-div">
                <h4 className="MapActiveTripDeparture-departureText">Departure:</h4>
                <h3>{ activeTrip.departure.city_name }, { activeTrip.departure.state_name } </h3>
        </div>
    )
}

export default MapActiveTripDeparture