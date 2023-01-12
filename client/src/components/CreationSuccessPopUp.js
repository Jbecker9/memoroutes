import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { MapPageContext } from "../context/mapPage";
import "../styles/CreationSuccessPopUp.css"

function CreationSuccessPopUp(){
    const user = useSelector((state) => state.user)
    const { setCreationSuccessMessage } = useContext(MapPageContext)
    console.log(user)

    return(
        <div className="CreationSuccessPopUp-div">
            <div>
                <h2> { user.entities.username } Created! </h2>
                <button className="CreationSuccesPopUp-closeButton" onClick={()=>setCreationSuccessMessage(false)}> Close Message </button>
            </div>
        </div>
)}

export default CreationSuccessPopUp