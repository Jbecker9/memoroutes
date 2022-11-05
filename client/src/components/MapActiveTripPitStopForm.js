import React from "react";

function MapActiveTripPitStopForm({ setPitStopForm }){

    return(
    <div>
        <button onClick={()=>setPitStopForm(false)}> Close Form </button>
        <form>
            <input name="location_name" />
        </form>
    </div> 
)}

export default MapActiveTripPitStopForm