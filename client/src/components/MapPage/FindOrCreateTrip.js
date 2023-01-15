import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { MapPageContext } from "../../context/mapPage";
import NewTripForm from "./NewTripForm";

function FindOrCreateTrip({ renderActiveTrip, setExistingTripId, handleNewTripFormRender }){
    const { renderNewTripForm } = useContext(MapPageContext)
    const user = useSelector((state) => state.user.entities)


    return(
        <div className="MapPage-selectRouteDiv">
            <h4>Select a Road trip to view on the map</h4>
            <form onSubmit={renderActiveTrip}>
                <select className="MapPage-select" onChange={(event)=>setExistingTripId(event.target.value)}>
                    { user.road_trips?.map((trip) => <option value={trip.id} key={trip.id}>{trip.trip_name}</option>) }
                </select>
                <button className="MapPage-setActiveTripButton">Set Active Trip!</button>
            </form>
            <h4>or</h4>
            { renderNewTripForm ? <NewTripForm /> : <button className="MapPage-newRouteButton" onClick={handleNewTripFormRender}> Create A New Trip! </button> }
        </div>
    )
}

export default FindOrCreateTrip