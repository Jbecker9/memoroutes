import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import "../styles/MapNewTripForm.css"

function MapNewTripForm({ findActiveTrip  }){
    const { setUser, user, setActiveTrip, setStartingPoint, startingPoint, setRenderNewTripForm } = useContext(UserContext)
    const [tripName, setTripName] = useState(startingPoint.name)
    console.log(user)

    function handleNameChange(event){
        setTripName(event.target.value)
    }

    console.log(startingPoint)

    function handleNewTripSubmit(event){
        event.preventDefault()
        const newTripObject = {
          trip_name: tripName,
          city_name: startingPoint.city,
          state_name: startingPoint.state,
          departure_lat: startingPoint.coordinates.lat,
          departure_lng: startingPoint.coordinates.lng

        }
        fetch("/road_trips",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newTripObject)
        })
          .then((response)=>response.json())
          .then((userData)=>{
            // console.log(userData)
            setUser(userData);
            setRenderNewTripForm(false);
            setActiveTrip(userData.created_trips[userData.created_trips.length-1]);
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
          })
      }

    return(
        <div className="MapNewTripForm-div">
             <button onClick={()=>setRenderNewTripForm(false)} > Close Form </button>
            <form onSubmit={handleNewTripSubmit}>
                <p> Road Trip Name: </p>
                <input 
                name="name"
                placeholder="Trip Name..."
                onChange={handleNameChange}
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