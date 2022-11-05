import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import MapActiveTripDeparture from "./MapActiveTripDeparture";
import "../styles/MapActiveTrip.css"
import MapActiveTripDestination from "./MapActiveTripDestination";
import MapActiveTripPitStopForm from "./MapActiveTripPitStopForm";

function MapActiveTrip({ startingPoint }){
    const { activeTrip } = useContext(UserContext)
    const [pitStopForm, setPitStopForm] = useState(false)

    return(
        <div className="MapActiveTrip-div">
                <div className="MapActiveTrip-titleDiv">
                    <h2>{activeTrip.name}</h2>
                </div>
                <MapActiveTripDeparture />
                <div className="MapActiveTrip-destinationDiv">
                    <MapActiveTripDestination startingPoint={startingPoint} />
                </div>
                <div className="MapActiveTrip-pitStop" >  
                    { pitStopForm ? <MapActiveTripPitStopForm startingPoint={startingPoint} setPitStopForm={setPitStopForm} /> : <button onClick={()=>setPitStopForm(true)}> Add a Pit Stop! </button> }
                </div>
        </div> 
    )
}

export default MapActiveTrip