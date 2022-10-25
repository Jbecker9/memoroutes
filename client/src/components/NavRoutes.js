import React, { useState } from "react";
import WelcomePage from "./WelcomePage";
import { Route, Routes } from "react-router-dom"
import UserPage from "./UserPage";
import NavBar from "./NavBar";
import "../styles/NavRoutes.css";
import MapPage from "./MapPage";
import RoadTripsPage from "./RoadTripsPage";
import StatesPage from "./StatesPage";


function NavRoutes(){
    const [showMenu, setShowMenu] = useState(null)

    return(
        <div className="NavRoutes-div">
            <div className="NavRoutes-navBarContainer">
                <div className="NavRoutesMenuButton" onClick={()=>setShowMenu(!showMenu)} > { showMenu ? "Close Menu" : "Menu" } </div>
                { showMenu ? <NavBar /> : null }
            </div>
            <Routes>
                <Route index element={<WelcomePage />} />
                <Route path="/userPage" element={<UserPage />} />
                <Route path="/mapPage" element={<MapPage />} />
                <Route path="/roadTripsPage" element={<RoadTripsPage />} />
                <Route path="/statesPage" element={<StatesPage />} />
            </Routes>
        </div>
    )
}

export default NavRoutes