import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import MapDestinationForm from "./MapDestinationForm"

function MapActiveTripDestination({ startingPoint }){
    const { activeTrip } = useContext(UserContext)
    const [destinationForm, setDestinationForm] = useState(null)

    if (activeTrip.destination){
        return(
            <div>
                <h4> Destination: </h4>
                <h3>{ activeTrip.destination.destination_city }, { activeTrip.destination.destination_state }</h3>
            </div>
        )
    } else {
        return(
            <div>
                <h4> No Destination! </h4>
                { destinationForm ? <MapDestinationForm setDestinationForm={setDestinationForm} startingPoint={startingPoint} /> : <button onClick={()=>setDestinationForm(true)} > Add a Destination! </button> }
            </div>
        )
    }

}

export default MapActiveTripDestination