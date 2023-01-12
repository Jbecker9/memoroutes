import React from "react";

function CityDestination({ destination, city }){

    console.log(city)


    return(
        <div>
            <h5>{ city.destination ? destination.location_name : "No Destination's!" }</h5>
        </div>
    )
}

export default CityDestination