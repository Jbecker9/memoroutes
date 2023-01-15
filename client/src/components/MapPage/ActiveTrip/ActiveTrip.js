import React, { useContext } from "react";
import { MapPageContext } from "../../../context/mapPage";
import Departure from "./Departure/Departure";
import "../../../styles/MapActiveTrip.css"
import Destination from "./Destination/Destination";
import PitStopForm from "./PitStops/PitStopForm";
import PitStopContainer from "./PitStops/PitStopContainer";

function ActiveTrip(){
    const { activeTrip, setActiveTrip, pitStopForm, setPitStopForm, startingPoint, setStartingPoint } = useContext(MapPageContext)
        
    function renderPitStopForm(){
        setPitStopForm(true)
        setStartingPoint({
            ...startingPoint,
            name: `Pit-Stop #${activeTrip.pit_stops.length + 1}`
        })
    }

    function isPitStopArrayEmpty(){
        if (activeTrip.pit_stops <= 0){
            return false
        } else {
            return true
        }
    }
    
    return(
        <div className="MapActiveTrip-div">
                <div className="MapActiveTrip-departureDiv">
                    <Departure />
                </div>
                <div className="MapActiveTrip-titleDiv">
                    <h2>{activeTrip.trip_name}</h2>
                    { activeTrip.road_trip_distance_miles ? <h3>{activeTrip.road_trip_distance_miles} miles (Direct / No Roads)</h3> : null }
                </div>
                <div className="MapActiveTrip-destinationDiv">
                    <Destination />
                </div>
                <div className="MapActiveTrip-closeTripButtonDiv">
                    <button className="MapActiveTrip-closeTripButton" onClick={()=>setActiveTrip(null)}> Close Active Trip </button>
                </div>
                <div>
                    { isPitStopArrayEmpty() ? <PitStopContainer />  : null }
                </div>
                <div className="MapActiveTrip-pitStopFormButtonDiv">  
                    { pitStopForm ? <PitStopForm setPitStopForm={setPitStopForm} /> : <button className="MapActiveTrip-pitStopFormButton" onClick={renderPitStopForm}> Add a Pit Stop! </button> }
                </div>
        </div> 
    )
}

export default ActiveTrip