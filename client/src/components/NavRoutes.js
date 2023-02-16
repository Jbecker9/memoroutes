import React, { useContext, useState } from "react";
import WelcomePage from "./WelcomePage";
import { Route, Routes } from "react-router-dom"
import UserPage from "./UserPage/UserPage";
import NavBar from "./NavBar";
import "../styles/NavRoutes.css";
import Map from "./MapPage/Map";
import RoadTrips from "./RoadTripsPage/RoadTrips";
import States from "./StatesPage/States";
import { MapPageContext } from "../context/mapPage";
import CreationSuccessPopUp from "./CreationSuccessPopUp";

function NavRoutes(){
    const [showMenu, setShowMenu] = useState(null)
    const { creationSuccessMessage } = useContext(MapPageContext)

    return(
        <div className="NavRoutes-div" id="navRoutesID">
            <div className="NavRoutes-navBarContainer">
                <div className="NavRoutesMenuButton" onClick={()=>setShowMenu(!showMenu)} > { showMenu ? "Close Menu" : "Menu" } </div>

                { showMenu ? <NavBar setShowMenu={setShowMenu} /> : null }
            </div>
            <div>
                { creationSuccessMessage ? <CreationSuccessPopUp /> : null }
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