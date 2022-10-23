import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/App.css"
import Login from "./Login";
import NavRoutes from "./NavRoutes";
import { showUser } from "../reducers/userSlice.js"

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user.entities);

  useEffect(() => {
    dispatch(showUser())
  }, [dispatch]);

  return (
    <div className="App-Div">
      { user ? <NavRoutes /> : <Login /> }
    </div>
  );
}

export default App;
