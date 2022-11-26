import React, { useState } from "react";
import StateCityCard from "./StateCityCard";

function StateCitiesContainer({ cities }){
    const [cityDes, setCityDes] = useState(null)
    const [cityStop, setCityStop] = useState(null)

    return(
        <div>
            { cities?.map((city) => <StateCityCard cityDes={cityDes} setCityDes={setCityDes} cityStop={cityStop} setCityStop={setCityStop} city={city} key={city.id} /> ) }
        </div>
    )
}

export default StateCitiesContainer