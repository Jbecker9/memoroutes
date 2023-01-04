import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { MapPageContext } from "../../../context/mapPage";
import { updateUserData } from "../../../reducers/userSlice";

function PitStopCard({ trip, pitStop }){
    const { setPath, setActiveTrip, setRenderUpdatePitStopForm, setStartingPoint, setUser } = useContext(MapPageContext)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleStopUpdateRedirect(){
        setActiveTrip(trip)
        setRenderUpdatePitStopForm(pitStop)
        setStartingPoint({
            name: pitStop.location_name,
            coordinates: {
                lat: parseInt(pitStop.lat),
                lng: parseInt(pitStop.lng)
            },
            city: pitStop.city_name,
            state: pitStop.state_name,
            zoom: 7
        })
        setPath([
            {lat: parseInt(trip?.departure?.lat), lng: parseInt(trip?.departure?.lng)},
            {lat: parseInt(trip?.destination?.lat), lng: parseInt(trip?.destination?.lng)}
          ])
        navigate("/map")
    }

    function handlePitStopDelete(event){
        event.preventDefault()
        fetch(`/road_trips/${pitStop.road_trip_id}/pit_stops/${pitStop.id}`,{
            method: "DELETE"
        }).then((response)=>response.json())
            .then((userData) => {
                dispatch(updateUserData(userData));
            })
    }

    return(
        <div>
            <h2>{ pitStop.location_name }</h2>
            <h3> { pitStop.city_name }, { pitStop.state_name } </h3>
            <button onClick={handleStopUpdateRedirect}> Update Pit-Stop! </button>
            <button onClick={handlePitStopDelete}> Delete Pit-Stop </button>
        </div>
    )
}

export default PitStopCard