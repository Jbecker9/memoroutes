import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loginError, setLoginError] = useState(null)
    const [activeTrip, setActiveTrip] = useState(null)
    const [pitStopForm, setPitStopForm] = useState(false)
    const [renderNewTripForm, setRenderNewTripForm] = useState(false)
    const [renderUpdatePitStopForm, setRenderUpdatePitStopForm] = useState(false)
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

    return <UserContext.Provider value={{ user, setUser, fetchLogout, setActiveTrip, activeTrip, loginError, pitStopForm, setPitStopForm, startingPoint, setStartingPoint, renderNewTripForm, setRenderNewTripForm, renderUpdatePitStopForm, setRenderUpdatePitStopForm }}>{ children }</UserContext.Provider>
};

export { UserContext, UserProvider };