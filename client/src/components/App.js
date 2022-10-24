import { useContext } from "react";
import { UserContext } from "../context/user";
import "../styles/App.css"
import Login from "./Login";
import NavRoutes from "./NavRoutes";


function App() {
  const { user } = useContext(UserContext);

  if (!user){
    return <Login />
  } else {
    return <NavRoutes />
  }
    
}

export default App;
