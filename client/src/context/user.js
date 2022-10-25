import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch("/me")
          .then((r)=>r.json())
            .then((user) => {
              { user.error ? setUser(null) : setUser(user) }
            })
      }, []);

    function fetchLogout(){
      fetch("/logout", {
        method: "DELETE"
      }).then(()=> setUser(null))
    }

    return <UserContext.Provider value={{ user, setUser, fetchLogout }}>{ children }</UserContext.Provider>
};

export { UserContext, UserProvider };