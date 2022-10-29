import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import "../styles/MapNewTripForm.css"

function MapNewTripForm({ setActiveTrip, setRenderNewTripForm }){
    const { user, setUser } = useContext(UserContext)
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
          .then((userData)=>{
            setUser(userData);
            setRenderNewTripForm(false);
            setActiveTrip(userData.road_trips[userData.road_trips.length-1]);
            setNewTrip({name: `${userData.username}'s Road Trip #${userData.road_trips.length + 1}`});
          })
      }

    return(
        <div className="MapNewTripForm-div">
            <form onSubmit={handleNewTripSubmit}>
                <input 
                name="name"
                placeholder="Trip Name..."
                onChange={handleNameChange}
                value={newTrip.name}
                />
                <button onClick={handleNewTripSubmit}> Start Planning! </button>
            </form>
            <button onClick={()=>setRenderNewTripForm(false)} > Close Form </button>
        </div>
    )
}

export default MapNewTripForm