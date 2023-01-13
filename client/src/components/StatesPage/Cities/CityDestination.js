import React from "react";

function CityDestination({ destinations }){

    return(
        <div>
            { destinations.length > 0 ? destinations.map((destination) => <h5 key={destination.id}>{destination.location_name}</h5> ) : <h5>No Destinations!</h5> }
        </div>
    )
}

export default CityDestination