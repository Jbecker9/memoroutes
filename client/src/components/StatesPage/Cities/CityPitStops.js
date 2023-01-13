import React from "react";

function CityPitStops({ pitStops }){

    return(
        <div>
            { pitStops.length > 0 ? pitStops.map((stop) => <h5 key={stop.id}>{ stop.location_name }</h5> )  : <h5>No Pit Stops!</h5> }
        </div>
    )
}

export default CityPitStops