import React from "react";

function MapDestinationForm({ setDestinationForm, startingPoint }){

    function handleDestinationFormSubmit(event){
        setDestinationForm(false)
    }

    return(
        <div>
            <form onSubmit={handleDestinationFormSubmit}>
                <h3>{startingPoint.city}</h3>
                <h3>{startingPoint.state}</h3>
                <button> Add Destination! </button>
            </form>
        </div>
    )
}

export default MapDestinationForm