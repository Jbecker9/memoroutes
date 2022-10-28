import React, { useContext } from "react";
import { UserContext } from "../context/user";
import UserPageTrips from "./UserPageTrips"

function UserPage(){
    const { user } = useContext(UserContext)
    console.log(user)


    return(
        <div>
            <div>
                { user.road_trips.map((trip) => <UserPageTrips key={trip.id} trip={trip} /> ) }
            </div>
        </div>
    )
}

export default UserPage