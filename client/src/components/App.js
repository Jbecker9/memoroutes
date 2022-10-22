import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/App.css"
import Login from "./Login";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user)

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((user) => dispatch({ type: "users/get", payload: user }));
  }, []);

  return (
    <div className="App-Div">
      { user ? <Login /> : null }
    </div>
  );
}

export default App;
