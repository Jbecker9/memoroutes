import React, { useState } from "react";
import "../styles/MapActiveRouteContainer.css"
import MapActiveRouteDestination from "./MapActiveRouteDestination";
import MapDestinationButton from "./MapDestinationButton";

function MapActiveRouteContainer({ setActiveTrip, startingPoint, activeTrip }){
    console.log(activeTrip)
    
    return(
        <div className="MapActiveRouteContainer-div">
            <h2>{activeTrip.name}</h2>
            <div>
                <h3>{ activeTrip.departure.departure_city },</h3>
                <h3>{ activeTrip.departure.departure_state }</h3>
            </div>
            <div>
                { activeTrip.destination ? <MapActiveRouteDestination destination={activeTrip.destination} /> : <MapDestinationButton setActiveTrip={setActiveTrip} activeTrip={activeTrip} startingPoint={startingPoint} /> }
            </div>
        </div>
    )
}

export default MapActiveRouteContainer