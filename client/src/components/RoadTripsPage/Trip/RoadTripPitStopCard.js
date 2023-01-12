import React from "react";

function RoadTripPitStopCard({ stop }){

    return(
        <div>
            <h4>{ stop.location_name }</h4>
            <h5> { stop.city_name }, { stop.state_name } </h5>
        </div>
    )
}

export default RoadTripPitStopCard