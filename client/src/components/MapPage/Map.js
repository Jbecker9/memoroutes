import React, { useContext, useState } from "react";
import {  GoogleMap, LoadScript, MarkerClusterer, Polyline, MarkerF } from '@react-google-maps/api'
import "../../styles/MapPage.css"
import { MapPageContext } from "../../context/mapPage";
import ActiveTrip from "./ActiveTrip/ActiveTrip";
import { useSelector } from "react-redux";
import FindOrCreateTrip from "./FindOrCreateTrip";

function Map(){
    const { activeTrip, setActiveTrip, showActiveRoadTrip, startingPoint, setStartingPoint, setPath, setRenderNewTripForm, path } = useContext(MapPageContext)
    const user = useSelector((state) => state.user.entities)
    const [existingTripId, setExistingTripId] = useState(setTimeout(() => findExistingRoadTrips(), 1000))
    
    function findCityOrState(geoInfo, locationType){
       return geoInfo.results[0].address_components.find((addressComponent) => addressComponent.types.includes(locationType)).long_name
    }

    function findExistingRoadTrips(){
        if (user.road_trips){
            return user.road_trips[0].id
        } else {
            return 0
        }
    }

    function handleMapClick(event){
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${event.latLng.lat()},${event.latLng.lng()}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
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
            <div className="MapPage-ActiveTripSideBarDiv">
                                { activeTrip ? <ActiveTrip /> : <FindOrCreateTrip renderActiveTrip={renderActiveTrip} setExistingTripId={setExistingTripId} handleNewTripFormRender={handleNewTripFormRender} /> }
            </div>
                    <LoadScript libraries={Polyline} googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
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
                        </GoogleMap>
                    </LoadScript>
        </div>
    )
}

export default Map