import React, { useContext } from "react";
import { MapPageContext } from "../context/mapPage";
import MapActiveTripDeparture from "./MapActiveTripDeparture";
import "../styles/MapActiveTrip.css"
import MapActiveTripDestination from "./MapActiveTripDestination";
import MapActiveTripPitStopForm from "./MapActiveTripPitStopForm";
import MapActiveTripPitStopContainer from "./MapActiveTripPitStopContainer";

function MapActiveTrip({ findActiveTrip }){
    const { activeTrip, user, pitStopForm, setPitStopForm, startingPoint, setStartingPoint } = useContext(MapPageContext)

    console.log(activeTrip)
    
    function renderPitStopForm(){
        setPitStopForm(true)
        setStartingPoint({
            ...startingPoint,
            name: `Pit-Stop #${findActiveTrip(user).pit_stops.length + 1}`
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
                <div className="MapActiveTrip-titleDiv">
                    <h2>{activeTrip.trip_name}</h2>
                </div>
                <div className="MapActiveTrip-departureDiv">
                {/* <MapActiveTripDeparture /> */}
                </div>
                <div className="MapActiveTrip-destinationDiv">
                    {/* <MapActiveTripDestination /> */}
                </div>
                <div className="MapActiveTrip-pitStopFormButton" >  
                    {/* { pitStopForm ? <MapActiveTripPitStopForm findActiveTrip={findActiveTrip} setPitStopForm={setPitStopForm} /> : <button onClick={renderPitStopForm}> Add a Pit Stop! </button> } */}
                </div>
                <div>
                    {/* { isPitStopArrayEmpty() ? <MapActiveTripPitStopContainer findActiveTrip={findActiveTrip} />  : null } */}
                </div>
        </div> 
    )
}

export default MapActiveTrip