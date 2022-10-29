import React, { useState } from "react";

function MapDepartureButton({ startingPoint }){
    const [locationName, setLocationName] = useState("Home")

    function onSubmit(){
        fetch("/departures")
    }
    
    return(
        <div>
            <form>
                <input 
                value={locationName}
                onChange={(e)=>setLocationName(e.target.value)}
                />
                <h3>{startingPoint.city},</h3>
                <h4>{startingPoint.state}</h4>
                <button> Submit Departure </button>
            </form>
        </div>
    );
};

export default MapDepartureButton