import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MapPageContext } from "../../context/mapPage";
import { updateUserData } from "../../reducers/userSlice";
import "../../styles/MapNewTripForm.css"

function NewTripForm(){
    const { setActiveTrip, setStartingPoint, startingPoint, setRenderNewTripForm, fillPathContents } = useContext(MapPageContext)
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.entities)
    const [tripName, setTripName] = useState(startingPoint.name)
    const [locationName, setLocationName] = useState(`${user.username}'s departure #${user.road_trips.length + 1}`)

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
            location_name: locationName,
            city_name: startingPoint.city,
            state_name: startingPoint.state,
            lat: startingPoint.coordinates.lat,
            lng: startingPoint.coordinates.lng
          }
        }
        fetch('/road_trips', {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newTripObject)
      })
      .then((response)=>response.json())
      .then((userData) => {
        setActiveTrip(userData.road_trips[userData.road_trips.length - 1])
        dispatch(updateUserData(userData))
        setRenderNewTripForm(false);
        setStartingPoint({
          name: `Starting Point`,
          coordinates: {
              lat: 39.82818518880172,
              lng: -98.57938314610301
            },
          zoom: 5,
          city: "Lebanon",
          state: "Kansas"
      })
      })}

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
                <input 
                name="location_name"
                placeholder="Location Name..."
                onChange={handleLocationNameChange}
                value={locationName}
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

export default NewTripForm