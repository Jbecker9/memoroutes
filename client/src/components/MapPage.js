import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, LoadScript } from '@react-google-maps/api'
import "../styles/MapPage.css"
import NewRouteForm from "./NewRouteForm";

function MapPage(){
    const [showNewRouteForm, setShowRouteForm] = useState(false)
    const [startingPoint, setStartingPoint] = useState({
        coordinates: {
            lat: 39.82818518880172,
            lng: -98.57938314610301
          },
          zoom: 5
    })

    function handleMapClick(event){
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${event.latLng.lat()},${event.latLng.lng()}&key=AIzaSyDBoExD9NToRJN8IGok7pUCySpw10SRVAE`)
            .then((res)=>res.json())
            .then((locationData) => console.log(locationData.results))
        setStartingPoint({
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        })
        console.log(event)
    }

    return(
        <div className="MapPage-div">
            <div className="MapPage-map">
                <button className="MapPage-newRouteButton" onClick={()=>setShowRouteForm(true)}> Create a new Route! </button>
                { showNewRouteForm ? <NewRouteForm /> : null }
                <LoadScript googleMapsApiKey="AIzaSyDBoExD9NToRJN8IGok7pUCySpw10SRVAE">
                    <GoogleMap
                    mapContainerClassName="MapPage-map"
                    center={startingPoint.coordinates}
                    zoom={startingPoint.zoom}
                    onClick={handleMapClick}
                    >

                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    )
}

export default MapPage