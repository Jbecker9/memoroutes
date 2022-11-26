import React from "react";

function StateCityDestinationCard({ destination }){

    return(
        <div>
            <h5>{ destination.destination_city }, { destination.destination_state }</h5>
        </div>
    )
}

export default StateCityDestinationCard