import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";
import "../styles/NavBar.css"

function NavBar(){
    const { setUser } = useContext(UserContext)

    function logout(){
        setUser(null)
    };

    const linkStyles = {
        width: "97%",
        padding: "5px",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textDecoration: "none",
        cursor: "pointer",
        texAtlign: "center",
        border: "2px solid rgb(192, 192, 192)",
        borderRadius: "5px",
        boxShadow: "0px 0px 5px rgb(121, 121, 121)",
      };

    const activeLinkStyles = {
        backgroundColor: "rgb(192, 192, 192)"
    }

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
            <Link
            to="/mapPage"
            style={linkStyles}
            >
                Map 
            </Link>
            <Link
            to="/roadTripsPage"
            style={linkStyles}
            >
                Road Trips
            </Link>
            <div onClick={logout} className="NavBar-logOutButton"> Logout </div>
        </div>
    )
}

export default NavBar