import React from "react";

function CityPitStops({ pitStop }){

    return(
        <div>
            { pitStop ? <h5>{ pitStop.location_name }</h5> : <h5>No Pit Stops!</h5> }
        </div>
    )
}

export default CityPitStops