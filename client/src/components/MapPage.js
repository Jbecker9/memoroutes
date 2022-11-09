import React, { useContext, useState } from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import "../styles/MapPage.css"
import MapNewTripForm from "./MapNewTripForm";
import { UserContext } from "../context/user";
import MapActiveTrip from "./MapActiveTrip";

function MapPage(){
    const { user, activeTrip, setActiveTrip, startingPoint, setStartingPoint, renderNewTripForm, setRenderNewTripForm } = useContext(UserContext)
    const [existingTripId, setExistingTripId] = useState(1)
    

    function findCityOrState(geoInfo, locationType){
       return geoInfo.results[0].address_components.find((addressComponent) => addressComponent.types.includes(locationType)).long_name
    }

    function handleMapClick(event){
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${event.latLng.lat()},${event.latLng.lng()}&key=AIzaSyDBoExD9NToRJN8IGok7pUCySpw10SRVAE`)
            .then((res)=>res.json())
            .then((locationData) => { 
                setStartingPoint({
                    name: startingPoint.name,
                    coordinates: {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng(),
                    },
                    zoom: 10,
                    state: findCityOrState(locationData, "administrative_area_level_1"),
                    city: findCityOrState(locationData, "locality")
            });
            
        })
    }

    function handleExistingTripOptionChange(event){
        setExistingTripId(event.target.value)
    }

    function handleExistingTripFormSubmit(event){
        event.preventDefault();
        fetch(`/road_trips/${existingTripId}`)
            .then((response)=> response.json())
            .then((tripData) => {
                setActiveTrip(tripData)
                setRenderNewTripForm(false)
            })
    }

    function handleNewTripFormRender(){
        setRenderNewTripForm(true)
        setActiveTrip(false)
        setStartingPoint({
            ...startingPoint,
            name: `${user.username}'s Road Trip #${user.road_trips.length + 1}`
        })
    }

    return(
        <div className="MapPage-div">
            <div className="MapPage-selectRouteDiv">
            <form onSubmit={handleExistingTripFormSubmit}>
                <select onChange={handleExistingTripOptionChange} className="MapPage-selectExistingTrip" >
                    { user.road_trips.map((roadTrip) => <option label={roadTrip.name} value={roadTrip.id} key={roadTrip.id} />) }
                </select>
                <button> Set Active Trip! </button>
            </form>
            </div>
            <div className="MapPage-mapDiv">
                    <LoadScript googleMapsApiKey="AIzaSyDBoExD9NToRJN8IGok7pUCySpw10SRVAE">
                        <GoogleMap
                        mapContainerClassName="MapPage-map"
                        center={startingPoint.coordinates}
                        zoom={startingPoint.zoom}
                        onClick={handleMapClick}
                        >
                            <div className="MapPage-formDiv">
                                { renderNewTripForm ? <MapNewTripForm /> : <button className="MapPage-newRouteButton" onClick={handleNewTripFormRender}> Create A New Trip! </button> }
                            </div>
                            <div className="MapPage-ActiveTripSideBarDiv">
                                { activeTrip ? <MapActiveTrip /> : null }
                            </div>
                        </GoogleMap>
                    </LoadScript>
            </div>
        </div>
    )
}

export default MapPage