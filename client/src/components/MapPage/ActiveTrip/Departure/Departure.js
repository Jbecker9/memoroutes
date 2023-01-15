import React, { useContext } from "react";
import { MapPageContext } from "../../../../context/mapPage";
import "../../../../styles/MapActiveTripDeparture.css"

function Departure(){
    const { activeTrip } = useContext(MapPageContext)
    console.log(activeTrip)
    
    return(
        <div className="MapActiveTripDeparture-div">
                <h4 className="MapActiveTripDeparture-departureText">Departure:</h4>
                <h3>{ activeTrip.departure.city_name }, { activeTrip.departure.state_name } </h3>
        </div>
    )
}

export default Departure