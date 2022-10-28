import React, { useState } from "react";
import "../styles/NewRouteForm.css"
import NewRouteFormDeparture from "./NewRouteFormDeparture";

function NewRouteForm({ startingPoint, setStartingPoint }){
  const [newTrip, setNewTrip] = useState(null)

    function handleChange(event){
        let name = event.target.name
        let value = event.target.value
        setStartingPoint({
            [name]: value
        })
    }

    function handleTripNameChange(event){
      setNewTrip({ name: event.target.default })
    }

    return(
        <div className="NewRouteForm-div">
          Hello
          <form>
            <input 
            placeholder="Trip Name..."
            name="trip_name"
            onChange={handleTripNameChange}
            />
            { newTrip ? <NewRouteFormDeparture startingPoint={startingPoint} setStartingPoint={setStartingPoint} /> : null }
          </form>
        </div>
    )
}

export default NewRouteForm