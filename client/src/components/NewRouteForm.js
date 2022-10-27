import React from "react";

function NewRouteForm({ startingPoint, setStartingPoint }){

    function handleChange(event){
        let name = event.target.name
        let value = event.target.value
        setStartingPoint({
            [name]: value
        })
    }

    return(
        <div>
          Hello
          <form>
            <input 
            placeholder="State"
            name="state"
            value={startingPoint.state}
            onChange={handleChange}
            />
            <input 
            placeholder="City"
            name="city"
            value={startingPoint.city}
            onChange={handleChange}
            />
          </form>
        </div>
    )
}

export default NewRouteForm