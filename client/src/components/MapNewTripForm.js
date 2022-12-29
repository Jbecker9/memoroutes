import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../context/user";
import { userCreateRoadTrip } from "../reducers/userSlice";
import "../styles/MapNewTripForm.css"

function MapNewTripForm({ findActiveTrip  }){
    const { setActiveTrip, setStartingPoint, startingPoint, setRenderNewTripForm } = useContext(UserContext)
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.entities)
    const [tripName, setTripName] = useState(startingPoint.name)
    const [locationName, setLocationName] = useState(`${user.username}'s departure #${user.road_trips.length + 1}`)
    console.log(user)

    function handleTripNameChange(event){
        setTripName(event.target.value)
    }

    function handleLocationNameChange(event){
        setLocationName(event.target.value)
    }

    console.log(startingPoint)

    function handleNewTripSubmit(event){
        event.preventDefault()
        const newTripObject = {
          trip_name: tripName,
          departure_attributes: {
            location_name: `${user.username}'s departure #${user.road_trips.length + 1}`,
            city_name: startingPoint.city,
            state_name: startingPoint.state,
            lat: startingPoint.coordinates.lat,
            lng: startingPoint.coordinates.lng
          }
        }
        dispatch(userCreateRoadTrip(newTripObject))
        setRenderNewTripForm(false);
        setActiveTrip(user.road_trips[user.road_trips.length-1]);
        setStartingPoint({
          name: `Starting Point`,
          coordinates: {
              lat: 39.82818518880172,
              lng: -98.57938314610301
            },
          zoom: 5,
          state: "Lebanon",
          city: "Kansas"
      })
      }

    return(
        <div className="MapNewTripForm-div">
             <button onClick={()=>setRenderNewTripForm(false)} > Close Form </button>
            <form onSubmit={handleNewTripSubmit}>
                <p> Road Trip Name: </p>
                <input 
                name="trip_name"
                placeholder="Trip Name..."
                onChange={handleTripNameChange}
                value={startingPoint.name}
                />
                <button onClick={handleNewTripSubmit}> Start Planning! </button>
            </form>
            <div>
              <p> To set the starting point for the route, find and click the location on the map </p>
              <h3> {startingPoint.city}, </h3>
              <h3> {startingPoint.state} </h3>
            </div>
        </div>
    )
}

export default MapNewTripForm