import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { MapPageContext } from "../context/mapPage";
import { updateUserData } from "../reducers/userSlice";

function MapDestinationForm({ setDestinationForm }){
    const { startingPoint, setStartingPoint, activeTrip, setActiveTrip, fillPathContents } = useContext(MapPageContext)
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
                const newActiveTrip = userData.road_trips.find((trip) => trip.id === activeTrip.id)
                fillPathContents(newActiveTrip)
                setActiveTrip(newActiveTrip)
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

export default MapDestinationForm