import React, { useContext } from "react";
import { MapPageContext } from "../../../../context/mapPage";
import PitStopCard from "./Stop/PitStopCard";
import "../../../../styles/MapActiveTripPitStopContainer.css"
import PitStopUpdateForm from "./Stop/PitStopUpdateForm";

function PitStopContainer(){
    const { activeTrip, renderUpdatePitStopForm, setRenderUpdatePitStopForm } = useContext(MapPageContext)

    return(
        <div className="MapActiveTripPitStopContainer-div">
            { renderUpdatePitStopForm ? <PitStopUpdateForm /> : 
            <div >
            { activeTrip.pit_stops.map((pitStop) => <PitStopCard pitStop={pitStop} key={pitStop.id} /> ) }
            </div> }
        </div>
    )
}

export default PitStopContainer