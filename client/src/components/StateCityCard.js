import React from "react";
import StateCityDestinationCard from "./StateCityDestinationCard";
import StateCityStopCard from "./StateCityStopCard";

function StateCityCard({ city, cityDes, cityStop, setCityDes, setCityStop }){
    
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
            <h3>{city.name}</h3>
            <div>
                
                <h4>Pit Stops: { city.pit_stops.length } </h4>
                { city.id === cityStop?.id ? cityStop.pit_stops.map((stop) => <StateCityStopCard key={stop.id} pitStop={stop} /> ) : <button onClick={showPitStops} >Show Pit Stop</button> }
            </div>
            <div>
               
                <h4>Destinations: { city.destinations.length }</h4>
                { city.id === cityDes?.id ? cityDes.destinations.map((destination) => <StateCityDestinationCard key={destination.id} destination={destination} /> ) :  <button onClick={showDestinations} >Show Destinations</button> }
            </div>
        </div>
    )
}

export default StateCityCard