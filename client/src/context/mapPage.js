import React, { useState } from "react";

const MapPageContext = React.createContext();

function MapPageProvider({ children }) {
    const [activeTrip, setActiveTrip] = useState(null)
    const [pitStopForm, setPitStopForm] = useState(false)
    const [renderNewTripForm, setRenderNewTripForm] = useState(false)
    const [renderUpdatePitStopForm, setRenderUpdatePitStopForm] = useState(false)
    const [path, setPath] = useState([
      {lat: parseInt(activeTrip?.departure?.lat), lng: parseInt(activeTrip?.departure?.lng)},
      {lat: parseInt(activeTrip?.destination?.lat), lng: parseInt(activeTrip?.destination?.lng)}
    ])
    const [pathStops, setPathStops] = useState(null)
    const [startingPoint, setStartingPoint] = useState({
      name: `Starting Point`,
      coordinates: {
          lat: 39.82818518880172,
          lng: -98.57938314610301
        },
      zoom: 5,
      state: "Kansas",
      city: "Lebanon"
    })

    function showActiveRoadTrip(tripID){
      console.log(tripID)
      fetch(`road_trips/${tripID}`)
        .then((response) => response.json())
        .then((activeTripData) => {
          setActiveTrip(activeTripData)
          fillPathContents(activeTripData)
        })
    }

    function fillPathContents(route){
      // console.log(route.destination)
      if (!route.destination){
        console.log("non existant")
        setPath([
          { lat: parseFloat(route.departure.lat), lng: parseFloat(route.departure.lng) },
          { lat: parseFloat(startingPoint.coordinates.lat), lng: parseFloat(startingPoint.coordinates.lng) }
        ])
      } else {
        console.log("no")
        setPath([
          { lat: parseFloat(route.departure.lat), lng: parseFloat(route.departure.lng) },
          { lat: parseFloat(route.destination.lat), lng: parseFloat(route.destination.lng) }
        ])
      }
    }

    return <MapPageContext.Provider value={{ showActiveRoadTrip, setActiveTrip, activeTrip, pitStopForm, setPitStopForm, startingPoint, setStartingPoint, renderNewTripForm, setRenderNewTripForm, renderUpdatePitStopForm, setRenderUpdatePitStopForm, path, setPath, pathStops, setPathStops, fillPathContents }}>{ children }</MapPageContext.Provider>
};

export { MapPageContext, MapPageProvider };