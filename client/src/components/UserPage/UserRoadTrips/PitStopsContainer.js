import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MapPageContext } from "../../../context/mapPage";
import PitStopCard from "./PitStopCard";
import UserPagePitStop from "./PitStopCard";

function PitStopsContainer({ trip, setPitStopClick, pitStops }){
const { setPath, setActiveTrip, setPitStopForm, setStartingPoint, startingPoint } = useContext(MapPageContext)
const navigate = useNavigate();

    function updateRedirect(){
        setActiveTrip(trip)
        setPitStopForm(true)
        navigate('/map')
        setPath([
            {lat: parseInt(trip?.departure?.lat), lng: parseInt(trip?.departure?.lng)},
            {lat: parseInt(trip?.destination?.lat), lng: parseInt(trip?.destination?.lng)}
          ])
        setStartingPoint({
            ...startingPoint,
            name: `Pit-Stop #${trip.pit_stops.length + 1}`
        })
    }

    return(
        <div>
            <button onClick={updateRedirect}> Add a New Pit-Stop! </button>
            { pitStops.map((pitStop) => <PitStopCard trip={trip} pitStop={pitStop} key={pitStop.id} /> ) }
            <button onClick={()=>setPitStopClick(false)}> Close Pit Stops </button>
        </div>
    )
}

export default PitStopsContainer