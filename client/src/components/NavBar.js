import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../reducers/userSlice";
import "../styles/NavBar.css"

function NavBar({ setShowMenu }){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logout(){
        dispatch(logOutUser())
        navigate("/")
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
            onClick={()=>setShowMenu(false)}
            >
                Welcome Page
            </Link>
            <Link
            to="/map"
            style={linkStyles}
            onClick={()=>setShowMenu(false)}
            >
                Map
            </Link>
            <Link
            to="/roadTrips"
            style={linkStyles}
            onClick={()=>setShowMenu(false)}

            >
                Discover Road Trips
            </Link>
            <Link
            to="/states"
            style={linkStyles}
            onClick={()=>setShowMenu(false)}
            >
                Search by State
            </Link>
            <Link
            to="/userPage"
            style={linkStyles}
            onClick={()=>setShowMenu(false)}
            >
                Profile 
            </Link>
            <div onClick={()=>logout()} className="NavBar-logOutButton"> Logout </div>
        </div>
    )
}

export default NavBar