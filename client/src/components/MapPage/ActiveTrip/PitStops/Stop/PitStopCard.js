import React, { useContext } from "react";
import { MapPageContext } from "../../../../../context/mapPage";
import "../../../../../styles/MapActiveTripPitStop.css"

function PitStopCard({ pitStop }){
    const { findActiveTrip, setUser, setActiveTrip, setStartingPoint, startingPoint, setRenderUpdatePitStopForm } = useContext(MapPageContext)

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
                <h5 className="MapActiveTripPitStop-textSpacing">{ pitStop.city_name },</h5>
                <h5 className="MapActiveTripPitStop-textSpacing">{ pitStop.state_name }</h5>
                <button onClick={showPitStop}> Go to Pit Stop! </button>
                <button id={`pitStopButton_${pitStop.id}`} onClick={handlePitStopFormClick}> Update Pit Stop! </button>
                <button onClick={handlePitStopDelete}> Delete Pit Stop </button>
            </div>
        </div>
    )
}

export default PitStopCard