import React, { useState } from "react";

const MapPageContext = React.createContext();

function MapPageProvider({ children }) {
    const [activeTrip, setActiveTrip] = useState(null)
    const [pitStopForm, setPitStopForm] = useState(false)
    const [renderNewTripForm, setRenderNewTripForm] = useState(false)
    const [renderUpdatePitStopForm, setRenderUpdatePitStopForm] = useState(false)
    const [path, setPath] = useState([
      {lat: parseFloat(activeTrip?.departure?.lat), lng: parseFloat(activeTrip?.departure?.lng)},
      {lat: parseFloat(activeTrip?.destination?.lat), lng: parseFloat(activeTrip?.destination?.lng)}
    ])
    const [pathStops, setPathStops] = useState(null)
    const [creationSuccessMessage, setCreationSuccessMessage] = useState(null)
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
      fetch(`road_trips/${tripID}`)
        .then((response) => response.json())
        .then((activeTripData) => {
          setActiveTrip(activeTripData)
          fillPathPitStops(activeTripData)
        })
    }

    function fillPathPitStops(route){
      console.log(route)
      let pitStopPath = [{ lat: parseFloat(route.departure.lat), lng: parseFloat(route.departure.lng) }]
      route.pit_stops?.forEach((pitStop) => {
        pitStopPath = [
          ...pitStopPath,
          { lat: parseFloat(pitStop.lat), lng: parseFloat(pitStop.lng) },
        ]
      })
      let pathLength = pitStopPath.length
      if (!route.destination){
        let newDes = { lat: parseFloat(startingPoint.coordinates.lat), lng: parseFloat(startingPoint.coordinates.lng) }
        pitStopPath.splice(pathLength, newDes)
      } else {
        let newDes = { lat: parseFloat(route.destination.lat), lng: parseFloat(route.destination.lng) }
        pitStopPath.splice(pathLength, 0, newDes)
      }
      console.log(pitStopPath)
      setPath(pitStopPath)
    }


    function findActiveTrip(userObj){
      return userObj.road_trips.find((trip) => trip.id === activeTrip.id )
  }

    return <MapPageContext.Provider value={{ fillPathPitStops, creationSuccessMessage, setCreationSuccessMessage, findActiveTrip, showActiveRoadTrip, setActiveTrip, activeTrip, pitStopForm, setPitStopForm, startingPoint, setStartingPoint, renderNewTripForm, setRenderNewTripForm, renderUpdatePitStopForm, setRenderUpdatePitStopForm, path, setPath, pathStops, setPathStops }}>{ children }</MapPageContext.Provider>
};

export { MapPageContext, MapPageProvider };