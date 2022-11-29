import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import UserPageTrips from "./UserPageTrips"

function UserPage(){
    const { user, setRenderNewTripForm, setPitStopForm, setStartingPoint, setActiveTrip, startingPoint } = useContext(UserContext)
    const navigate = useNavigate()
    // console.log(user)

    function createTripRedirect(){
        setPitStopForm(false)
        setActiveTrip(null)
        setStartingPoint({
            ...startingPoint,
            name: `${user.username}'s Road Trip #${user.road_trips.length + 1}`
        })
        setRenderNewTripForm(true)
        navigate('/mapPage')
    }

    return(
        <div>
            <h1>{ user.username }</h1>
            <button onClick={createTripRedirect}> Create Trip! </button>
            <div>
                { user.created_trips.map((trip) => <UserPageTrips key={trip.id} trip={trip} /> ) }
            </div>
        </div>
    )
}

export default UserPage