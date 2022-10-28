import React from "react";

function NewRouteFormDeparture({ startingPoint, setStartingPoint }){

    function handleChange(event){
        console.log(event)
        // fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${event.latLng.lat()},${event.latLng.lng()}&key=AIzaSyDBoExD9NToRJN8IGok7pUCySpw10SRVAE`)
        //     .then((res)=>res.json())
        //     .then((locationData) => { 
        //         setStartingPoint({
        //             coordinates: {
        //                 lat: event.latLng.lat(),
        //                 lng: event.latLng.lng(),
        //             },
        //             zoom: 10,
        //             state: findCityOrState(locationData, "administrative_area_level_1"),
        //             city: findCityOrState(locationData, "locality")
        //     });
        // })
    }
    
    
    
    return(
        <div>
            <div
            placeholder="State"
            name="state"
            value={startingPoint.state}
            onChange={handleChange}
            />
            <div
            placeholder="City"
            name="city"
            value={startingPoint.city}
            onChange={handleChange}
            />  
        </div>
    )
};

export default NewRouteFormDeparture