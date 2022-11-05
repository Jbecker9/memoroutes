import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";

function MapActiveTripPitStopForm({ startingPoint, setPitStopForm }){
    const { activeTrip } = useContext(UserContext)
    const [pitStopInfo, setPitStopInfo] = useState({
        ...startingPoint,
        location_name: `Pit-Stop #${activeTrip.pit_stops.length + 1}`
    })
    // console.log(pitStopInfo)

    function handleNameChange(event){
        let name = event.target.name
        let value = event.target.value
        setPitStopInfo({
            [name]: value
        })
    }

    function handleFormSubmit(event){
        event.preventDefault()
        fetch(`/road_trips/${activeTrip.id}/pit_stops`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pitStopInfo)
        }).then((response)=>response.json())
            .then((userData) => console.log(userData))
    }

    return(
    <div>
        <button onClick={()=>setPitStopForm(false)}> Close Form </button>
        <form onSubmit={handleFormSubmit} >
            <input name="location_name" value={pitStopInfo.location_name} onChange={handleNameChange} />
            <h3> { startingPoint.city }, { startingPoint.state } </h3>
            <button> Submit Pit-Stop! </button>
        </form>
    </div> 
)}

export default MapActiveTripPitStopForm