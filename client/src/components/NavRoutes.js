import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../reducers/userSlice";

function NavRoutes(){
    const dispatch = useDispatch();

    function logout(event){
        event.preventDefault();
        dispatch(logoutUser());
    };

    return(
        <div className="NavRoutes-div">
            Hello
            <button onClick={logout}> Logout </button>
        </div>
    )
}

export default NavRoutes