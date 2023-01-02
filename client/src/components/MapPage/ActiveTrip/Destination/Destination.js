import React, { useState, useContext } from "react";
import { MapPageContext } from "../../../../context/mapPage";
import DestinationForm from "./DestinationForm"
import "../../../../styles/MapActiveTripDestination.css"

function Destination(){
    const { activeTrip, startingPoint } = useContext(MapPageContext)
    const [destinationForm, setDestinationForm] = useState(null)

    if (activeTrip.destination){
        return(
            <div>
                <h4 className="MapActiveTripDestination-destinationText"> Destination: </h4>
                <h3>{ activeTrip.destination.city_name }, { activeTrip.destination.state_name }</h3>
            </div>
        )
    } else {
        return(
            <div>
                <h4 className="MapActiveTripDestination-destinationText"> No Destination! </h4>
                { destinationForm ? <DestinationForm setDestinationForm={setDestinationForm} startingPoint={startingPoint} /> : <button onClick={()=>setDestinationForm(true)} > Add a Destination! </button> }
            </div>
        )
    }

}

export default Destination