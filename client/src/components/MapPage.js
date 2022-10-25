import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import "../styles/MapPage.css"
import NewRouteForm from "./NewRouteForm";

function MapPage(){
    const [showNewRouteForm, setShowRouteForm] = useState(false)

    const defaultProps = {
        center: {
            lat: 39.82818518880172,
            lng: -98.57938314610301
          },
          zoom: 5
    }

    return(
        <div className="MapPage-div">
            <div className="MapPage-map">
                <button className="MapPage-newRouteButton" onClick={()=>setShowRouteForm(true)}> Create a new Route! </button>
                { showNewRouteForm ? <NewRouteForm /> : null }
                <GoogleMapReact
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                bootstrapURLKeys={{ key: "AIzaSyDBoExD9NToRJN8IGok7pUCySpw10SRVAE" }}
                />
            </div>
        </div>
    )
}

export default MapPage