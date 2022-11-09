import React, { useContext } from "react";
import { UserContext } from "../context/user";
import "../styles/MapActiveTripPitStopUpdateForm.css"

function MapActiveTripPitStopUpdateForm({ findActiveTrip }){
    const { startingPoint, setStartingPoint, setUser, setActiveTrip, setRenderUpdatePitStopForm, renderUpdatePitStopForm } = useContext(UserContext)

    function handleNameChange(event){
        let name = event.target.name
        let value = event.target.value
        setStartingPoint({
            ...startingPoint,
            [name]: value
        })
    }

    function handleFormSubmit(event){
        event.preventDefault()
        const updatedTrip = {
            location_name: startingPoint.name,
            lat: startingPoint.coordinates.lat,
            lng: startingPoint.coordinates.lng,
            city: startingPoint.city,
            state: startingPoint.state
        }
        fetch(`/road_trips/${renderUpdatePitStopForm.road_trip_id}/pit_stops/${renderUpdatePitStopForm.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTrip)
        }).then((response)=>response.json())
            .then((userData) => {
                setUser(userData)
                setActiveTrip(findActiveTrip(userData))
                setRenderUpdatePitStopForm(false)
            })
    }

    return(
        <div className="MapActiveTripPitStopUpdateForm-div">
            <form onSubmit={handleFormSubmit} >
                <input name="name" value={startingPoint.name} onChange={handleNameChange} />
                <h3> { startingPoint.city }, { startingPoint.state } </h3>
                <button> Update Pit-Stop! </button>
            </form>
                <button onClick={()=>setRenderUpdatePitStopForm(false)}> Close Form </button>
        </div>
    )
}

export default MapActiveTripPitStopUpdateForm