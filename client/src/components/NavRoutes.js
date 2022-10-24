import React, { useState } from "react";
import WelcomePage from "./WelcomePage";
import { Route, Routes } from "react-router-dom"
import UserPage from "./UserPage";
import NavBar from "./NavBar";
import "../styles/NavRoutes.css";


function NavRoutes(){
    const [showMenu, setShowMenu] = useState(null)

    return(
        <div className="NavRoutes-div">
            <div className="NavRoutes-navBarContainer">
                <div className="NavRoutesMenuButton" onClick={()=>setShowMenu(!showMenu)} > { showMenu ? "Close Menu" : "Menu" } </div>
                { showMenu ? <NavBar /> : null }
            </div>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/userPage" element={<UserPage />} />
            </Routes>
        </div>
    )
}

export default NavRoutes