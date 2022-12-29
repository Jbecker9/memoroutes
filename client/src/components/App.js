import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, logOutUser } from "../reducers/userSlice";
import "../styles/App.css"
import Login from "./Login";
import NavRoutes from "./NavRoutes";


function App() {
  const user = useSelector((state)=> state.user);
  const dispatch = useDispatch();
  console.log(user)

  useEffect(()=>{
    dispatch(fetchUser())
    // window.addEventListener('unload', dispatch())
  }, [dispatch])

  if (!user || user.entities?.error){
    return <Login />
  } else {
    return <NavRoutes />
  }
    
}

export default App;
