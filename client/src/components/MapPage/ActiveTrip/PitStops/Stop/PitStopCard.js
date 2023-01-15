import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { MapPageContext } from "../../../../../context/mapPage";
import { updateUserData } from "../../../../../reducers/userSlice";
import "../../../../../styles/MapActiveTripPitStop.css"

function PitStopCard({ pitStop }){
    const { findActiveTrip, fillPathPitStops, setStartingPoint, setRenderUpdatePitStopForm } = useContext(MapPageContext)
    const dispatch = useDispatch();

    function updateStartingPoint(){
        setStartingPoint({
            name: pitStop.location_name,
            coordinates: {
                lat: parseFloat(pitStop.lat),
                lng: parseFloat(pitStop.lng),
            },
            zoom: 13,
            state: pitStop.state_name,
            city: pitStop.city_name
        })
    }

    function handlePitStopDelete(event){
        event.preventDefault()
        fetch(`/road_trips/${pitStop.road_trip_id}/pit_stops/${pitStop.id}`,{
            method: "DELETE"
        }).then((response)=>response.json())
            .then((userData) => {
                dispatch(updateUserData(userData));
                fillPathPitStops(findActiveTrip(userData));
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
                <button className="MapActiveTripPitStop-button" onClick={updateStartingPoint}> Go to Pit Stop! </button>
                <button className="MapActiveTripPitStop-button" id={`pitStopButton_${pitStop.id}`} onClick={handlePitStopFormClick}> Update Pit Stop! </button>
                <button className="MapActiveTripPitStop-deleteButton" onClick={handlePitStopDelete}> Delete Pit Stop </button>
            </div>
        </div>
    )
}

export default PitStopCard