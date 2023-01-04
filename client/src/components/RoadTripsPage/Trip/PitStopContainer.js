import React from "react";
import RoadTripPitStopCard from "./RoadTripPitStopCard";

function PitStopContainer({ pitStops, setPitStopsTrip }){
    console.log(pitStops)

    if (pitStops.length >= 1){
        return(
        <div>
            { pitStops.map((stop) => <RoadTripPitStopCard key={stop.id} stop={stop} />) }
            <button onClick={()=>setPitStopsTrip(null)} > Close Pit Stops </button>
        </div>
        )
    } else {
        return(
        <div>
            <p> No Pit Stops! </p>
            <button onClick={()=>setPitStopsTrip(null)} > Close Pit Stops </button>
        </div>
        )
    }
}

export default PitStopContainer