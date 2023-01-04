import React from "react";

function RoadTripPitStopCard({ stop }){

    return(
        <div>
            <h4>{ stop.location_name }</h4>
            <h5> { stop.stop_city }, { stop.stop_state } </h5>
        </div>
    )
}

export default RoadTripPitStopCard