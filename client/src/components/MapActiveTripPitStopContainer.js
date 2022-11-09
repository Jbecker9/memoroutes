import React, { useContext } from "react";
import { UserContext } from "../context/user";
import MapActiveTripPitStop from "./MapActiveTripPitStop";
import "../styles/MapActiveTripPitStopContainer.css"
import MapActiveTripPitStopUpdateForm from "./MapActiveTripPitStopUpdateForm";

function MapActiveTripPitStopContainer({ findActiveTrip }){
    const { activeTrip, renderUpdatePitStopForm, setRenderUpdatePitStopForm } = useContext(UserContext)

    return(
        <div className="MapActiveTripPitStopContainer-div">
            { renderUpdatePitStopForm ? <MapActiveTripPitStopUpdateForm findActiveTrip={findActiveTrip} /> : 
            <div className="MapActiveTripPitStopContainer-gridDiv">
            { activeTrip.pit_stops.map((pitStop) => <MapActiveTripPitStop findActiveTrip={findActiveTrip} pitStop={pitStop} key={pitStop.id} /> ) }
            </div> }
        </div>
    )
}

export default MapActiveTripPitStopContainer