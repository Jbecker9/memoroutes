import React from "react";

function UserPagePitStop({ pitStop }){

    return(
        <div>
            <h2>{ pitStop.location_name }</h2>
            <h3> { pitStop.stop_city }, { pitStop.stop_state } </h3>
        </div>
    )
}

export default UserPagePitStop