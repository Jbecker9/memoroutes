import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/user";

function UserPagePitStop({ trip, pitStop }){
    const { user, setActiveTrip, setPitStopForm, setStartingPoint, startingPoint } = useContext(UserContext)
    const navigate = useNavigate()

    function handleStopUpdateRedirect(){
        setActiveTrip(trip)
        navigate("/mapPage")
    }

    return(
        <div>
            <h2>{ pitStop.location_name }</h2>
            <h3> { pitStop.stop_city }, { pitStop.stop_state } </h3>
            <button onClick={handleStopUpdateRedirect}> Update Pit-Stop! </button>
        </div>
    )
}

export default UserPagePitStop