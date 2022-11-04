import React from "react";

function MapActiveRouteDestination({ destination }){

    return(
        <div>
            <h3>{ destination.destination_city }</h3>
            <h3>{ destination.destination_state }</h3>
        </div>
    )
}

export default MapActiveRouteDestination