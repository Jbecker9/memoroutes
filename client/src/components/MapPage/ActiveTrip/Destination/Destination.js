import React, { useState, useContext } from "react";
import { MapPageContext } from "../../../../context/mapPage";
import DestinationForm from "./DestinationForm"
import "../../../../styles/MapActiveTripDestination.css"
import { useSelector } from "react-redux";

function Destination(){
    const { activeTrip, startingPoint, setStartingPoint } = useContext(MapPageContext)
    const [destinationForm, setDestinationForm] = useState(null)
    const user = useSelector((state) => state.user.entities)
    console.log(user)

    function showDestinationForm(){
        setDestinationForm(true)
        setStartingPoint({
            ...startingPoint,
            name: `${user.username}'s Destination #${user.destinations.length + 1}`
        })
    }

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
                { destinationForm ? <DestinationForm setDestinationForm={setDestinationForm} startingPoint={startingPoint} /> : <button className="MapActiveTripDestination-button" onClick={()=>showDestinationForm()} > Add a Destination! </button> }
            </div>
        )
    }

}

export default Destination