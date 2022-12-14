import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../reducers/userSlice";
import "../styles/NavBar.css"

function NavBar(){
    const dispatch = useDispatch();

    function logout(){
        dispatch(logOutUser())
    }

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
        backgroundColor: "white",
        borderRadius: "5px",
        boxShadow: "0px 0px 5px rgb(121, 121, 121)",
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
            to="/map"
            style={linkStyles}
            >
                Map
            </Link>
            <Link
            to="/roadTrips"
            style={linkStyles}
            >
                Discover Road Trips
            </Link>
            <Link
            to="/states"
            style={linkStyles}
            >
                Search by State
            </Link>
            <Link
            to="/userPage"
            style={linkStyles}
            >
                Profile 
            </Link>
            <div onClick={()=>logout()} className="NavBar-logOutButton"> Logout </div>
        </div>
    )
}

export default NavBar