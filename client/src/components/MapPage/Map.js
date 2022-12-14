import React, { useContext, useState } from "react";
import {  GoogleMap, LoadScript, MarkerClusterer, Polyline, MarkerF } from '@react-google-maps/api'
import "../../styles/MapPage.css"
import NewTripForm from "./NewTripForm";
import { MapPageContext } from "../../context/mapPage";
import ActiveTrip from "./ActiveTrip/ActiveTrip";
import { useSelector } from "react-redux";

function Map(){
    const { activeTrip, setActiveTrip, showActiveRoadTrip, startingPoint, setStartingPoint, setPath, renderNewTripForm, setRenderNewTripForm, path } = useContext(MapPageContext)
    const user = useSelector((state) => state.user.entities)
    const [existingTripId, setExistingTripId] = useState(1)
    
    function findCityOrState(geoInfo, locationType){
       return geoInfo.results[0].address_components.find((addressComponent) => addressComponent.types.includes(locationType)).long_name
    }

    function handleMapClick(event){
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${event.latLng.lat()},${event.latLng.lng()}&key=AIzaSyDBoExD9NToRJN8IGok7pUCySpw10SRVAE`)
            .then((res)=>res.json())
            .then((locationData) => {
                if(activeTrip.departure && !activeTrip.destination){
                    setPath([
                        { lat: parseFloat(activeTrip.departure.lat), lng: parseFloat(activeTrip.departure.lng) },
                        { lat: event.latLng.lat(), lng: event.latLng.lng() }

                    ])
                }
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

    function renderActiveTrip(event){
        event.preventDefault()
        showActiveRoadTrip(existingTripId)
    }

    function handleNewTripFormRender(){
        setRenderNewTripForm(true)
        setActiveTrip(false)
        setStartingPoint({
            ...startingPoint,
            name: `${user.username}'s Road Trip #${user.road_trips.length + 1}`
        })
    }

    const styling = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
        path: path,
        zIndex: 1
      };

    return(
        <div className="MapPage-div">
            Map Page
            <div className="MapPage-selectRouteDiv">
                <form onSubmit={renderActiveTrip}>
                    <select onChange={(event)=>setExistingTripId(event.target.value)}>
                        { user.road_trips?.map((trip) => <option value={trip.id} key={trip.id}>{trip.trip_name}</option>) }
                    </select>
                    <button>Set Active Trip!</button>
                </form>
            </div>
            <div className="MapPage-mapDiv">
                    <LoadScript libraries={Polyline} googleMapsApiKey="AIzaSyDBoExD9NToRJN8IGok7pUCySpw10SRVAE">
                        <GoogleMap
                        id="direction"
                        mapContainerClassName="MapPage-map"
                        center={startingPoint.coordinates}
                        zoom={startingPoint.zoom}
                        onClick={handleMapClick}
                        >
                            { activeTrip?.pit_stops ?
                            <MarkerClusterer >
                                {(clusterer) => 
                                activeTrip?.pit_stops.map((location) => (
                                    <MarkerF key={location.id} position={{ lat: parseFloat(location.lat), lng: parseFloat(location.lng) }} clusterer={clusterer} />
                                ))}
                            </MarkerClusterer> 
                            : null 
                            }
                            { activeTrip?.destination ? <Polyline path={path} options={styling} /> : null }
                            <div className="MapPage-formDiv">
                                { renderNewTripForm ? <NewTripForm /> : <button className="MapPage-newRouteButton" onClick={handleNewTripFormRender}> Create A New Trip! </button> }
                            </div>
                            <div className="MapPage-ActiveTripSideBarDiv">
                                { activeTrip ? <ActiveTrip /> : null }
                            </div>
                        </GoogleMap>
                    </LoadScript>
            </div>
        </div>
    )
}

export default Map