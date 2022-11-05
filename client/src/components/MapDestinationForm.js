import React, { useContext } from "react";
import { UserContext } from "../context/user";

function MapDestinationForm({ setDestinationForm, startingPoint }){
    const { setUser } = useContext(UserContext)
    const { activeTrip, setActiveTrip } = useContext(UserContext)

    function handleDestinationFormSubmit(event){
        event.preventDefault()
        setDestinationForm(false)
        fetch(`/road_trips/${activeTrip.id}/destinations`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(startingPoint)
        }).then((response)=>response.json())
            .then((userData)=>{
                setUser(userData);
                setActiveTrip(userData.road_trips.find((trip) => trip.id === activeTrip.id))
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