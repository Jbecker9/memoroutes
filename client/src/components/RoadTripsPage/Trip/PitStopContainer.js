import React from "react";
import RoadTripPitStopCard from "./RoadTripPitStopCard";
import "../../../styles/TripCard.css"

function PitStopContainer({ pitStops, setPitStopsTrip }){

    if (pitStops.length >= 1){
        return(
        <div>
            { pitStops.map((stop) => <RoadTripPitStopCard key={stop.id} stop={stop} />) }
            <div className="TripCard-closePitStopsButton" onClick={()=>setPitStopsTrip(null)} > Close Pit Stops </div>
        </div>
        )
    } else {
        return(
        <div>
            <p> No Pit Stops! </p>
            <div className="TripCard-closePitStopsButton" onClick={()=>setPitStopsTrip(null)} > Close Pit Stops </div>
        </div>
        )
    }
}

export default PitStopContainer