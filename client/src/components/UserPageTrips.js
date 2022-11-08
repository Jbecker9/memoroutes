import React, { useState } from "react";
import UserPagePitStopContainer from "./UserPagePitStopContainer";
import "../styles/UserPageTrip.css"


function UserPageTrip({ trip }){
    const [pitStopClick, setPitStopClick] = useState(false)
    
    return(
        <div className="UserPageTrip-tripCardDiv" >
            <h2 className="UserPageTrip-tripTitleH2">{ trip.name }</h2>
                <button className="UserPageTrip-deleteTripButton"> Delete Trip </button>
            <div className="UserPageTrip-tripCardTripContents">
                <div className="UserPageTrip-tripCardDeparture">
                    <h4>{ trip.departure.departure_city },</h4>
                    <h4>{ trip.departure.departure_state }</h4>
                </div>
                <div className="UserPageTrip-tripCardDestination">
                    { trip.destination ? 
                        <div>
                            <h4>{ trip.destination.destination_city },</h4>
                            <h4>{ trip.destination.destination_state }</h4>
                        </div> 
                    :   
                        <h4> No destination </h4> 
                    }
                </div>
            </div>
            <div className="UserPageTrip-pitStopsDiv">
                {pitStopClick ? <UserPagePitStopContainer setPitStopClick={setPitStopClick} pitStops={trip.pit_stops} /> : <button className="UserPageTrip-showPitStopsButton" onClick={()=>setPitStopClick(true)}> Show Pit Stops </button> }
            </div>
        </div>
    )
}

export default UserPageTrip