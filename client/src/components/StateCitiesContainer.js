import React from "react";
import StateCityCard from "./StateCityCard";

function StateCitiesContainer({ cities }){

    console.log(cities)

    return(
        <div>
            { cities?.map((city) => <StateCityCard city={city} key={city.id} /> ) }
        </div>
    )
}

export default StateCitiesContainer