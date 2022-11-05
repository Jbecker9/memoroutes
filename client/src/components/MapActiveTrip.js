import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import MapActiveTripDeparture from "./MapActiveTripDeparture";
import "../styles/MapActiveTrip.css"
import MapActiveTripDestination from "./MapActiveTripDestination";
import MapActiveTripPitStopForm from "./MapActiveTripPitStopForm";

function MapActiveTrip({ setStartingPoint, startingPoint }){
    const { activeTrip, user } = useContext(UserContext)
    const [pitStopForm, setPitStopForm] = useState(false)
    console.log(user)

    function findActiveTrip(){
        return user.road_trips.find((trip) => trip.id === activeTrip.id )
    }

    function renderPitStopForm(){
        setPitStopForm(true)
        setStartingPoint({
            ...startingPoint,
            name: `Pit-Stop #${findActiveTrip().pit_stops.length + 1}`
        })
    }
    
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
                    { pitStopForm ? <MapActiveTripPitStopForm setStartingPoint={setStartingPoint} startingPoint={startingPoint} setPitStopForm={setPitStopForm} /> : <button onClick={renderPitStopForm}> Add a Pit Stop! </button> }
                </div>
        </div> 
    )
}

export default MapActiveTrip