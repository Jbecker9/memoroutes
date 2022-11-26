import React from "react";

function StateCityStopCard({ pitStop }){

    return(
        <div>
            <h5>{ pitStop.location_name }</h5>
            <p>{ pitStop.stop_city }, { pitStop.stop_state }</p>
        </div>
    )
}

export default StateCityStopCard