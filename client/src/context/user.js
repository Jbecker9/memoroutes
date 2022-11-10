import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loginError, setLoginError] = useState(null)
    const [activeTrip, setActiveTrip] = useState(null)
    const [pitStopForm, setPitStopForm] = useState(false)
    const [renderNewTripForm, setRenderNewTripForm] = useState(false)
    const [renderUpdatePitStopForm, setRenderUpdatePitStopForm] = useState(false)
    const [path, setPath] = useState([
      {lat: parseInt(activeTrip?.departure.lat), lng: parseInt(activeTrip?.departure.lng)},
      {lat: parseInt(activeTrip?.destination.lat), lng: parseInt(activeTrip?.destination.lng)}
    ])
    const [pathStops, setPathStops] = useState(activeTrip?.pit_stops?.map((stop) => { return { lat: parseInt(stop.lat), lng: parseInt(stop.lng) } }))
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

    useEffect(() => {
        fetch("/me")
          .then((r)=>{
            if (r.ok){
              return r.json()
            } else {
              throw new Error("User not found")
            }
          }).then((userData)=>setUser(userData))
            .catch((error)=> setLoginError(error))
      }, []);

    function fetchLogout(){
      fetch("/logout", {
        method: "DELETE"
      }).then(()=> setUser(null))
    }

    function fillPathContents(route){
      setPath([
        { lat: parseInt(route.departure.lat), lng: parseInt(route.departure.lng) },
        { lat: parseInt(route.destination?.lat), lng: parseInt(route.destination?.lng) }
      ])
      setPathStops(activeTrip?.pit_stops?.map((stop) => { return { lat: parseInt(stop.lat), lng: parseInt(stop.lng) } }))
    }

    return <UserContext.Provider value={{ user, setUser, fetchLogout, setActiveTrip, activeTrip, loginError, pitStopForm, setPitStopForm, startingPoint, setStartingPoint, renderNewTripForm, setRenderNewTripForm, renderUpdatePitStopForm, setRenderUpdatePitStopForm, path, setPath, pathStops, setPathStops, fillPathContents }}>{ children }</UserContext.Provider>
};

export { UserContext, UserProvider };