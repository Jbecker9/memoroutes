import React, { useContext } from "react";
import { UserContext } from "../context/user";
import "../styles/MapNewTripForm.css"

function MapNewTripForm({ setActiveTrip, setRenderNewTripForm, setStartingPoint, startingPoint }){
    const { setUser } = useContext(UserContext)

    function handleNameChange(event){
        let name = event.target.name
        let value = event.target.value
        setStartingPoint({
            [name]: value
        })
    }

    function handleNewTripSubmit(event){
        event.preventDefault()
        fetch("/road_trips",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(startingPoint)
        })
          .then((response)=>response.json())
          .then((userData)=>{
            console.log(userData)
            setUser(userData);
            setRenderNewTripForm(false);
            setActiveTrip(userData.road_trips[userData.road_trips.length-1]);
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