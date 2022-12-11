import React, { useContext } from "react";
import { UserContext } from "../context/user";

function MapDestinationForm({ setDestinationForm }){
    const { setUser, startingPoint } = useContext(UserContext)
    const { activeTrip, setActiveTrip } = useContext(UserContext)
    console.log(startingPoint)

    function handleDestinationFormSubmit(event){
        event.preventDefault()
        const newDestinationObj = {
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
                setUser(userData);
                setActiveTrip(userData.created_trips.find((trip) => trip.id === activeTrip.id))
            })
    }

    return(
        <div>
            <form onSubmit={handleDestinationFormSubmit}>
                <button> Add {startingPoint.city}, {startingPoint.state} as a Destination! </button>
            </form>
        </div>
    )
}

export default MapDestinationForm