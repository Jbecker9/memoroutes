import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";

function MapActiveTripPitStopForm({ setStartingPoint, startingPoint, setPitStopForm }){
    const { activeTrip, setActiveTrip, setUser } = useContext(UserContext)

    function handleNameChange(event){
        let name = event.target.name
        let value = event.target.value
        setStartingPoint({
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
                    body: JSON.stringify(startingPoint)
                }).then((response)=>response.json())
                    .then((userData) => {
                        setUser(userData);
                        setPitStopForm(false);
                    })
    }
            
    return(
    <div>
        <button onClick={()=>setPitStopForm(false)}> Close Form </button>
        <form onSubmit={handleFormSubmit} >
            <input name="name" value={startingPoint.name} onChange={handleNameChange} />
            <h3> { startingPoint.city }, { startingPoint.state } </h3>
            <button> Submit Pit-Stop! </button>
        </form>
    </div> 
)}

export default MapActiveTripPitStopForm