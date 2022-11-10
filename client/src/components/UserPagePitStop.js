import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/user";

function UserPagePitStop({ trip, pitStop }){
    const { setActiveTrip, setRenderUpdatePitStopForm, setStartingPoint, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    function handleStopUpdateRedirect(){
        setActiveTrip(trip)
        setRenderUpdatePitStopForm(pitStop)
        console.log(pitStop)
        setStartingPoint({
            name: pitStop.location_name,
            coordinates: {
                lat: parseInt(pitStop.lat),
                lng: parseInt(pitStop.lng)
            },
            city: pitStop.stop_city,
            state: pitStop.stop_state,
            zoom: 7
        })
        navigate("/mapPage")
    }

    function handlePitStopDelete(event){
        event.preventDefault()
        fetch(`/road_trips/${pitStop.road_trip_id}/pit_stops/${pitStop.id}`,{
            method: "DELETE"
        }).then((response)=>response.json())
            .then((userData) => {
                setUser(userData);
            })
    }

    return(
        <div>
            <h2>{ pitStop.location_name }</h2>
            <h3> { pitStop.stop_city }, { pitStop.stop_state } </h3>
            <button onClick={handleStopUpdateRedirect}> Update Pit-Stop! </button>
            <button onClick={handlePitStopDelete}> Delete Pit-Stop </button>
        </div>
    )
}

export default UserPagePitStop