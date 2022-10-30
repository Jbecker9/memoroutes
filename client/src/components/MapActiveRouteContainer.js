import React from "react";
import "../styles/MapActiveRouteContainer.css"

function MapActiveRouteContainer({ activeTrip }){
    console.log(activeTrip)

    return(
        <div className="MapActiveRouteContainer-div">
            <h2>{activeTrip.name}</h2>
        </div>
    )
}

export default MapActiveRouteContainer