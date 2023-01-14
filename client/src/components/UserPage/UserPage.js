import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MapPageContext } from "../../context/mapPage";
import UserRoadTrips from "./UserRoadTrips/UserRoadTrips";
import "../../styles/UserPage.css"

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
            <h1 className="UserPage-h1">{ user.username }</h1>
            <div className="UserPage-button" onClick={createTripRedirect}> Create a New Trip! </div>
            <div className="UserPage-tripsDiv">
                { showTrips ? user.road_trips.map((trip) => <UserRoadTrips key={trip.id} trip={trip} /> ) : <div className="UserPage-button" onClick={()=>setShowTrips(true)}> Show Road Trips! </div>}
            </div>
        </div>
    )
}

export default UserPage