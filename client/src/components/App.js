import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/App.css"
import Login from "./Login";
import NavRoutes from "./NavRoutes";
import { showUser } from "../reducers/userSlice.js"

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user);
  console.log(user)

  useEffect(() => {
    dispatch(showUser())
  }, []);

  if (user){
    return <Login  />
  } else {
    return <NavRoutes />
  }
    
}

export default App;
