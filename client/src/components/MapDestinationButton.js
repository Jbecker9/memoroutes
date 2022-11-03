import React, { useState } from "react";
import MapDestinationForm from "./MapDestinationForm";

function MapDestinationButton({ startingPoint }){
    const [destinationForm, setDestinationForm] = useState(null)

    return(
        <div>
            <h4> No Destination! </h4>
            { destinationForm ? <MapDestinationForm setDestinationForm={setDestinationForm} startingPoint={startingPoint} /> : <button onClick={()=>setDestinationForm(true)} > Add a Destination! </button> }
        </div>
    )
}

export default MapDestinationButton