import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loginError, setLoginError] = useState(null)
    const [activeTrip, setActiveTrip] = useState(null)

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

    return <UserContext.Provider value={{ user, setUser, fetchLogout, setActiveTrip, activeTrip, loginError }}>{ children }</UserContext.Provider>
};

export { UserContext, UserProvider };