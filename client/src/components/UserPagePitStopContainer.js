import React from "react";
import UserPagePitStop from "./UserPagePitStop";

function UserPagePitStopContainer({ setPitStopClick, pitStops }){

    return(
        <div>
            { pitStops.map((pitStop) => <UserPagePitStop pitStop={pitStop} key={pitStop.id} /> ) }
            <button onClick={()=>setPitStopClick(false)}> Close Pit Stops </button>
        </div>
    )
}

export default UserPagePitStopContainer