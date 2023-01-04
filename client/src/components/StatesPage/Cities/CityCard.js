import React from "react";
import CityDestination from "./CityDestination";
import CityPitStops from "./CityPitStops";

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
        <div>
            <h3>{city.city_name}</h3>
            <div>
                <h4>Pit Stops: { city.pit_stops.length } </h4>
                { city.id === cityStop?.id ? cityStop.pit_stops.map((stop) => <CityPitStops key={stop.id} pitStop={stop} /> ) : <button onClick={showPitStops} >Show Pit Stop</button> }
            </div>
            <div>
               
                <h4>Destinations: { city.destinations.length }</h4>
                { city.id === cityDes?.id ? cityDes.destinations.map((destination) => <CityDestination key={destination.id} destination={destination} /> ) :  <button onClick={showDestinations} >Show Destinations</button> }
            </div>
        </div>
    )
}

export default CityCard