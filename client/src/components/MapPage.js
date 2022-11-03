import React, { useContext, useState } from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import "../styles/MapPage.css"
import MapNewTripForm from "./MapNewTripForm";
import MapActiveRouteContainer from "./MapActiveRouteContainer";
import { UserContext } from "../context/user";

function MapPage(){
    const { user } = useContext(UserContext)
    const [activeTrip, setActiveTrip] = useState(null)
    const [existingTripId, setExistingTripId] = useState(1)
    const [renderNewTripForm, setRenderNewTripForm] = useState(false)
    const [startingPoint, setStartingPoint] = useState({
        name: `${user.username}'s Road Trip #${user.road_trips.length + 1}`,
        coordinates: {
            lat: 39.82818518880172,
            lng: -98.57938314610301
          },
        zoom: 5,
        state: "Kansas",
        city: "Lebanon"
    })
    console.log(user)

    function populatedTripsCheck(){
        if(user.road_trips.length <= 0){
            return []
        } else {
            return user.road_trips[0].id
        }
    }

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
        console.log(event.target.value)
        setExistingTripId(event.target.value)
    }

    function handleExistingTripFormSubmit(event){
        event.preventDefault();
        fetch(`/road_trips/${existingTripId}`)
            .then((response)=> response.json())
            .then((tripData) => setActiveTrip(tripData))
    }

    return(
        <div>
            <form onSubmit={handleExistingTripFormSubmit}>
                <select onChange={handleExistingTripOptionChange} className="MapPage-selectExistingTrip" >
                    { user.road_trips.map((roadTrip) => <option label={roadTrip.name} value={roadTrip.id} key={roadTrip.id} />) }
                </select>
                <button> Set Active Trip! </button>
            </form>
            <div className="MapPage-div">
                <div className="MapPage-mapContainer">
                    <LoadScript googleMapsApiKey="AIzaSyDBoExD9NToRJN8IGok7pUCySpw10SRVAE">
                        <GoogleMap
                        mapContainerClassName="MapPage-map"
                        center={startingPoint.coordinates}
                        zoom={startingPoint.zoom}
                        onClick={handleMapClick}
                        >
                            <div>
                                <div className="MapPage-formDiv">
                                    { renderNewTripForm ? <MapNewTripForm startingPoint={startingPoint} setRenderNewTripForm={setRenderNewTripForm} setActiveTrip={setActiveTrip} setStartingPoint={setStartingPoint} /> : <button className="MapPage-newRouteButton" onClick={()=>setRenderNewTripForm(true)}> Create A New Trip! </button> }
                                </div>
                                { activeTrip ? <MapActiveRouteContainer startingPoint={startingPoint} activeTrip={activeTrip} /> : <button> Make Trip Options Here </button> }
                            </div>
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </div>
    )
}

export default MapPage