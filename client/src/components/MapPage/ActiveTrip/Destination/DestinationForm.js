import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { MapPageContext } from "../../../../context/mapPage";
import { updateUserData } from "../../../../reducers/userSlice";

function DestinationForm({ setDestinationForm }){
    const { startingPoint, setStartingPoint, activeTrip, setActiveTrip, fillPathPitStops, findActiveTrip } = useContext(MapPageContext)
    const dispatch = useDispatch();
    console.log(startingPoint)

    function handleDestinationNameChange(event){
        setStartingPoint({
            name: event.target.value,
            ...startingPoint
        })
    }

    function handleDestinationFormSubmit(event){
        event.preventDefault()
        const newDestinationObj = {
            location_name: startingPoint.name,
            city_name: startingPoint.city,
            state_name: startingPoint.state,
            lat: startingPoint.coordinates.lat,
            lng: startingPoint.coordinates.lng
        }
        setDestinationForm(false)
        fetch(`/road_trips/${activeTrip.id}/destinations`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDestinationObj)
        }).then((response)=>response.json())
            .then((userData)=>{
                dispatch(updateUserData(userData))
                fillPathPitStops(findActiveTrip(userData))
            })
    }

    return(
        <div>
            <form onSubmit={handleDestinationFormSubmit}>
                <input onChange={handleDestinationNameChange} placeholder="Destination Name..."/>
                <button> Add {startingPoint.city}, {startingPoint.state} as a Destination! </button>
            </form>
        </div>
    )
}

export default DestinationForm