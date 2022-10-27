import React, { useState } from "react";
import { GoogleMap, InfoWindow, LoadScript } from '@react-google-maps/api'
import "../styles/MapPage.css"
import NewRouteForm from "./NewRouteForm";

function MapPage(){
    const [showNewRouteForm, setShowNewRouteForm] = useState(false)
    const [startingPoint, setStartingPoint] = useState({
        coordinates: {
            lat: 39.82818518880172,
            lng: -98.57938314610301
          },
          zoom: 5,
          state: "",
          city: ""
    })

    function findCityState(geoInfo, locationType){
       return geoInfo.results[0].address_components.find((addressComponent) => addressComponent.types.includes(locationType)).long_name
    }

    function handleMapClick(event){
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${event.latLng.lat()},${event.latLng.lng()}&key=AIzaSyDBoExD9NToRJN8IGok7pUCySpw10SRVAE`)
            .then((res)=>res.json())
            .then((locationData) => { 
                setStartingPoint({
                    coordinates: {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng(),
                    },
                    zoom: 10,
                    state: findCityState(locationData, "administrative_area_level_1"),
                    city: findCityState(locationData, "locality")
            });
            setShowNewRouteForm(true)
        })
    }

    return(
        <div className="MapPage-div">
            <div className="MapPage-map">
                <LoadScript googleMapsApiKey="AIzaSyDBoExD9NToRJN8IGok7pUCySpw10SRVAE">
                    { showNewRouteForm ? <NewRouteForm startingPoint={startingPoint} setStartingPoint={setStartingPoint} /> : null }
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