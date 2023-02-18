import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../reducers/userSlice";
import "../styles/App.css"
import Login from "./Login";
import NavRoutes from "./NavRoutes";
// import * as dotenv from 'dotenv'

function App() {
  const user = useSelector((state)=> state.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUser())
  }, [dispatch])

  console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)

  if (!user && user.entities?.error){
    return <Login />
  } else {
    return <NavRoutes />
  }
}

export default App;
