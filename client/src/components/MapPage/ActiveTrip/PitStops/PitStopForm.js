import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { MapPageContext } from "../../../../context/mapPage";
import { updateUserData } from "../../../../reducers/userSlice";
import "../../../../styles/PitStopForm.css"

function PitStopForm(){
    const { findActiveTrip, activeTrip, setActiveTrip, setUser, fillPathPitStops, setPitStopForm, startingPoint, setStartingPoint } = useContext(MapPageContext)
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
        const newPitStopObject = {
            location_name: startingPoint.name,
            city_name: startingPoint.city,
            state_name: startingPoint.state,
            lat: startingPoint.coordinates.lat,
            lng: startingPoint.coordinates.lng
        }
        fetch(`/road_trips/${activeTrip.id}/pit_stops`,{
                method: "POST",
                headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newPitStopObject)
                }).then((response)=>response.json())
                    .then((userData) => {
                        dispatch(updateUserData(userData));
                        fillPathPitStops(findActiveTrip(userData))
                        setPitStopForm(false);
                        setStartingPoint({
                            name: `Starting Point`,
                            coordinates: {
                                lat: 39.82818518880172,
                                lng: -98.57938314610301
                              },
                            zoom: 4,
                            state: "Kansas",
                            city: "Lebanon"
                        })
                    })
    }
            
    return(
    <div className="PitStopForm-div">
        <form onSubmit={handleFormSubmit} >
            <h2> Add A Pit Stop! </h2>
            <p>Click and hold at the desired location on the map below</p>
            <label>Input Location Name:
            <input name="name" value={startingPoint.name} onChange={handleNameChange} />
            </label>
            <h3> { startingPoint.city }, { startingPoint.state } </h3>
            <button className="PitStopForm-submitButton"> Submit Pit-Stop! </button>
        </form>
        <button className="PitStopForm-closeButton" onClick={()=>setPitStopForm(false)}> Close Form </button>
    </div> 
)}

export default PitStopForm