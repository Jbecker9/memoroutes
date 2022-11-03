import React from "react";

function MapActiveRouteDestination({ destination }){

    return(
        <div>
            <h3>{ destination.city.name }</h3>
            <h3>{ destination.state.name }</h3>
        </div>
    )
}

export default MapActiveRouteDestination