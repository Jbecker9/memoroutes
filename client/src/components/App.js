import { useContext, useEffect } from "react";
import { UserContext } from "../context/user";
import "../styles/App.css"
import Login from "./Login";
import NavRoutes from "./NavRoutes";


function App() {
  const { user, fetchLogout } = useContext(UserContext);
  console.log(user)

  useEffect(()=>{
    window.addEventListener('unload', fetchLogout)
  }, [])

  if (!user){
    return <Login />
  } else {
    return <NavRoutes />
  }
    
}

export default App;
