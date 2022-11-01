import React from "react";

function UserPageTrip({ trip }){
    console.log(trip)

    return(
        <div>
            <h2>{ trip.name }</h2>
            <h4>{ trip.departure.city }</h4>
        </div>
    )
}

export default UserPageTrip