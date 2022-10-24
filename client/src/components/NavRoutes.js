import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../reducers/userSlice";

function NavRoutes(){
    const dispatch = useDispatch();
    const user = useSelector((state) => state.entities)

    function logout(){
        dispatch(logoutUser());
        console.log(user)
    };

    return(
        <div className="NavRoutes-div">
            Hello
            <button onClick={()=>logout()}> Logout </button>
        </div>
    )
}

export default NavRoutes