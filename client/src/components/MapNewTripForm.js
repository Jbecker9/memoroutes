import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import "../styles/MapNewTripForm.css"

function MapNewTripForm({ setActiveTrip, setNewTripFormRender }){
    const { user } = useContext(UserContext)
    const [newTrip, setNewTrip] = useState({
        name: `${user.username}'s Road Trip #${user.road_trips.length + 1}`
    })

    function handleNameChange(event){
        let value = event.target.value
        setNewTrip({
            name: value
        })
    }

    function handleNewTripSubmit(event){
        event.preventDefault()
        fetch("/road_trips",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newTrip)
        })
          .then((response)=>response.json())
          .then((RoadTripData)=>{
            setActiveTrip(RoadTripData);
            setNewTrip({name: `${user.username}'s Road Trip #${user.road_trips.length + 1}`});
        })
      }

    return(
        <div className="MapNewTripForm-div">
            <form onSubmit={handleNewTripSubmit}>
                <input 
                name="name"
                placeholder="Trip Name..."
                value={newTrip.name}
                onChange={handleNameChange}
                />
                <button onClick={handleNewTripSubmit}> Start Planning! </button>
            </form>
            <button onClick={()=>setNewTripFormRender(false)} > Close Form </button>
        </div>
    )
}

export default MapNewTripForm