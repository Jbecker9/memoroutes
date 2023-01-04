import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MapPageContext } from "../../context/mapPage";
import UserRoadTrips from "./UserRoadTrips/UserRoadTrips";

function UserPage(){
    const { setRenderNewTripForm, setPitStopForm, setStartingPoint, setActiveTrip, startingPoint } = useContext(MapPageContext)
    const user = useSelector((state) => state.user.entities)
    const navigate = useNavigate()
    const [showTrips, setShowTrips] = useState(null)
    console.log(user)

    function createTripRedirect(){
        setPitStopForm(false)
        setActiveTrip(null)
        setStartingPoint({
            ...startingPoint,
            name: `${user.username}'s Road Trip #${user.road_trips.length + 1}`
        })
        setRenderNewTripForm(true)
        navigate('/map')
    }

    return(
        <div>
            User Page
            <h1>{ user.username }</h1>
            <button onClick={createTripRedirect}> Create Trip! </button>
            
            <div>
                { showTrips ? user.road_trips.map((trip) => <UserRoadTrips key={trip.id} trip={trip} /> ) : <button onClick={()=>setShowTrips(true)}> Show Road Trips! </button>}
            </div>
        </div>
    )
}

export default UserPage