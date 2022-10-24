import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";

function NavBar(){
    const { setUser } = useContext(UserContext)

    function logout(){
        setUser(null)
    };      

    const linkStyles = {
        width: "100%",
        padding: "5px",
        margin: "1px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        cursor: "pointer",
        border: "black"
      };

    return(
        <div className="NavBar-div">
            <Link 
            to="/"
            style={linkStyles}
            >
                Welcome Page
            </Link>
            <Link
            to="/userPage"
            style={linkStyles}
            >
                Profile 
            </Link>
            <div onClick={logout} style={linkStyles}> Logout </div>
        </div>
    )
}

export default NavBar