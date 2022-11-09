import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import UserPagePitStop from "./UserPagePitStop";

function UserPagePitStopContainer({ trip, setPitStopClick, pitStops }){
const { setActiveTrip, setPitStopForm, setStartingPoint, startingPoint } = useContext(UserContext)
const navigate = useNavigate()

    function updateRedirect(){
        setActiveTrip(trip)
        setPitStopForm(true)
        navigate('/mapPage')
        setStartingPoint({
            ...startingPoint,
            name: `Pit-Stop #${trip.pit_stops.length + 1}`
        })
    }

    return(
        <div>
            <button onClick={updateRedirect}> Add a New Pit-Stop! </button>
            { pitStops.map((pitStop) => <UserPagePitStop trip={trip} pitStop={pitStop} key={pitStop.id} /> ) }
            <button onClick={()=>setPitStopClick(false)}> Close Pit Stops </button>
        </div>
    )
}

export default UserPagePitStopContainer