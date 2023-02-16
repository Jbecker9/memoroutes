import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../reducers/userSlice";
import "../styles/App.css"
import Login from "./Login";
import NavRoutes from "./NavRoutes";

function App() {
  const user = useSelector((state)=> state.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUser())
  }, [dispatch])

  if (!(user || user.entities?.error)){
    return <NavRoutes />
  } else {
    return <Login />
  }
}

export default App;
