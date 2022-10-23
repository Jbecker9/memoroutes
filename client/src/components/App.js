import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/App.css"
import Login from "./Login";
import NavRoutes from "./NavRoutes";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user)

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((user) => dispatch({ type: "users/get", payload: user }));
  }, [dispatch]);

  console.log(user)

  return (
    <div className="App-Div">
      { user ? <Login /> : <NavRoutes /> }
    </div>
  );
}

export default App;
