import React from "react";
import CityDestination from "./CityDestination";
import CityPitStops from "./CityPitStops";
import "../../../styles/CityCard.css"

function CityCard({ city, cityDes, cityStop, setCityDes, setCityStop }){
    
    function showDestinations(){
        setCityStop(null)
        setCityDes(city)
    }

    function showPitStops(){
        setCityDes(null)
        setCityStop(city)
    }

    return(
        <div className="CityCard-div">
            <h3>{city.city_name}</h3>
            <div className="CityCard-buttonDiv">
                { city.id === cityStop?.id ? cityStop.pit_stops.map((stop) => <CityPitStops key={stop.id} pitStop={stop} cityStop={city} /> ) : <div onClick={showPitStops} >Show { city.pit_stops.length } Pit Stops</div> }
            </div>
            <div className="CityCard-buttonDiv">
                { city.id === cityDes?.id ? cityDes.destinations.map((destination) => <CityDestination key={destination.id} destination={destination} cityDes={city} /> ) :  <div onClick={showDestinations} >Show { city.destinations.length } Destinations</div> }
            </div>
        </div>
    )
}

export default CityCard