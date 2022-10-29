import React, { useState } from "react";
import "../styles/MapActiveRouteContainer.css"
import MapDepartureButton from "./MapDepartureButton";

function MapActiveRouteContainer({ startingPoint, activeTrip }){
    const [showDepartureButton, setShowDepartureButton] = useState(false)

    return(
        <div className="MapActiveRouteContainer-div">
            <h2>{activeTrip.name}</h2>
            { showDepartureButton ? <MapDepartureButton startingPoint={startingPoint} /> : <button onClick={()=>setShowDepartureButton(true)}>Create Departure</button> }
            {/* <button>Add a Pit Stop</button> */}
            {/* <button>Create Departure</button> */}
        </div>
    )
}

export default MapActiveRouteContainer