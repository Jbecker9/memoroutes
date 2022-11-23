import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { UserContext } from "../context/user";

function MapActiveTripPitStopForm({ findActiveTrip }){
    const { activeTrip, setActiveTrip, setUser, setPitStopForm, startingPoint, setStartingPoint } = useContext(UserContext)
    const dispatch = useDispatch();
    
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
        fetch(`/road_trips/${activeTrip.id}/pit_stops`,{
                method: "POST",
                headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(startingPoint)
                }).then((response)=>response.json())
                    .then((userData) => {
                        setUser(userData);
                        setActiveTrip(findActiveTrip(userData))
                        setPitStopForm(false);
                        setStartingPoint({
                            name: `Starting Point`,
                            coordinates: {
                                lat: 39.82818518880172,
                                lng: -98.57938314610301
                              },
                            zoom: 5,
                            state: "Kansas",
                            city: "Lebanon"
                        })
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