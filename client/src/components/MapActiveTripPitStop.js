import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import "../styles/MapActiveTripPitStop.css"

function MapActiveTripPitStop({ findActiveTrip, pitStop }){
    const { setUser, setActiveTrip, setStartingPoint, startingPoint, setRenderUpdatePitStopForm } = useContext(UserContext)

    function updateStartingPoint(){
        setStartingPoint({
            name: pitStop.location_name,
            coordinates: {
                lat: parseInt(pitStop.lat),
                lng: parseInt(pitStop.lng),
            },
            zoom: 5,
            state: pitStop.stop_state,
            city: pitStop.stop_city
        })
    }
    
    function showPitStop(){
        updateStartingPoint()
        setStartingPoint({
            ...startingPoint,
            zoom: 13
        })
    }

    function handlePitStopDelete(event){
        event.preventDefault()
        fetch(`/road_trips/${pitStop.road_trip_id}/pit_stops/${pitStop.id}`,{
            method: "DELETE"
        }).then((response)=>response.json())
            .then((userData) => {
                setUser(userData);
                setActiveTrip(findActiveTrip(userData));
            })
    }

    function handlePitStopFormClick(){
        updateStartingPoint()
        setRenderUpdatePitStopForm(pitStop)
    }

    return(
        <div className="MapActiveTripPitStop-div">
            <div>
                <h3 className="MapActiveTripPitStop-textSpacing">{ pitStop.location_name }</h3>
                <h5 className="MapActiveTripPitStop-textSpacing">{ pitStop.stop_city },</h5>
                <h5 className="MapActiveTripPitStop-textSpacing">{ pitStop.stop_state }</h5>
                <button onClick={showPitStop}> Go to Pit Stop! </button>
                <button id={`pitStopButton_${pitStop.id}`} onClick={handlePitStopFormClick}> Update Pit Stop! </button>
                <button onClick={handlePitStopDelete}> Delete Pit Stop </button>
            </div>
        </div>
    )
}

export default MapActiveTripPitStop