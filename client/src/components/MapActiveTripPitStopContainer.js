import React, { useContext } from "react";
import { UserContext } from "../context/user";
import MapActiveTripPitStop from "./MapActiveTripPitStop";
import "../styles/MapActiveTripPitStopContainer.css"

function MapActiveTripPitStopContainer({ findActiveTrip, setStartingPoint }){
    const { activeTrip } = useContext(UserContext)


    return(
        <div className="MapActiveTripPitStopContainer-div">
            { activeTrip.pit_stops.map((pitStop) => <MapActiveTripPitStop findActiveTrip={findActiveTrip} setStartingPoint={setStartingPoint} pitStop={pitStop} key={pitStop.id} /> ) }
        </div>
    )
}

export default MapActiveTripPitStopContainer