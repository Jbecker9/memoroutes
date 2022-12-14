import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { MapPageContext } from "../../../../../context/mapPage";
import { updateUserData } from "../../../../../reducers/userSlice";
import "../../../../../styles/MapActiveTripPitStopUpdateForm.css"

function PitStopUpdateForm(){
    const { findActiveTrip, startingPoint, setStartingPoint, setUser, setActiveTrip, setRenderUpdatePitStopForm, renderUpdatePitStopForm } = useContext(MapPageContext)
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
        const updatedTrip = {
            location_name: startingPoint.name,
            lat: startingPoint.coordinates.lat,
            lng: startingPoint.coordinates.lng,
            city_name: startingPoint.city,
            state_name: startingPoint.state
        }
        fetch(`/road_trips/${renderUpdatePitStopForm.road_trip_id}/pit_stops/${renderUpdatePitStopForm.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTrip)
        }).then((response)=>response.json())
            .then((userData) => {
                dispatch(updateUserData(userData))
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

export default PitStopUpdateForm