import React, { useContext } from "react";
import { UserContext } from "../context/user";
import "../styles/MapActiveTripPitStop.css"

function MapActiveTripPitStop({ findActiveTrip, setStartingPoint, pitStop }){
    const { setUser, setActiveTrip } = useContext(UserContext)

    function showPitStop(){
        console.log(pitStop)
        setStartingPoint({
            name: pitStop.name,
            coordinates: {
                lat: parseInt(pitStop.lat),
                lng: parseInt(pitStop.lng),
            },
            zoom: 15,
            state: pitStop.stop_state,
            city: pitStop.stop_city
        })
    }

    function handlePitStopDelete(){
        fetch(`/road_trips/${pitStop.road_trip_id}/pit_stops/${pitStop.id}`,{
            method: "DELETE"
        }).then((response)=>response.json())
            .then((userData) => {
                setUser(userData);
                setActiveTrip(findActiveTrip(userData));
            })
    }

    return(
        <div className="MapActiveTripPitStop-div">
            <h3 className="MapActiveTripPitStop-textSpacing">{ pitStop.location_name }</h3>
            <h5 className="MapActiveTripPitStop-textSpacing">{ pitStop.stop_city },</h5>
            <h5 className="MapActiveTripPitStop-textSpacing">{ pitStop.stop_state }</h5>
            <button onClick={showPitStop}> Go to Pit Stop! </button>
            <button onClick={handlePitStopDelete}> Delete Pit Stop </button>
        </div>
    )
}

export default MapActiveTripPitStop