import React, { useState } from "react";
import "../styles/MapActiveRouteContainer.css"
import MapActiveRouteDestination from "./MapActiveRouteDestination";
import MapDestinationButton from "./MapDestinationButton";

function MapActiveRouteContainer({ startingPoint, activeTrip }){
    
    return(
        <div className="MapActiveRouteContainer-div">
            <h2>{activeTrip.name}</h2>
            <div>
                <h3>{ activeTrip.departure.city.name },</h3>
                <h3>{ activeTrip.departure.state.name }</h3>
            </div>
            <div>
                { activeTrip.destination ? <MapActiveRouteDestination destination={activeTrip.destination} /> : <MapDestinationButton startingPoint={startingPoint} /> }
            </div>
        </div>
    )
}

export default MapActiveRouteContainer