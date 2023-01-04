import React, { useState } from "react";
import WelcomePage from "./WelcomePage";
import { Route, Routes } from "react-router-dom"
import UserPage from "./UserPage";
import NavBar from "./NavBar";
import "../styles/NavRoutes.css";
import Map from "./MapPage/Map";
import RoadTrips from "./RoadTripsPage/RoadTrips";
import States from "./StatesPage/States";

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
                <Route path="/map" element={<Map />} />
                <Route path="/roadTrips" element={<RoadTrips />} />
                <Route path="/states" element={<States />} />
            </Routes>
        </div>
    )
}

export default NavRoutes