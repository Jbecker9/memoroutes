import React, { useState } from "react";
import CityCard from "./CityCard";

function CitiesContainer({ cities }){
    const [cityDes, setCityDes] = useState(null)
    const [cityStop, setCityStop] = useState(null)

    return(
        <div>
            { cities?.map((city) => <CityCard cityDes={cityDes} setCityDes={setCityDes} cityStop={cityStop} setCityStop={setCityStop} city={city} key={city.id} /> ) }
        </div>
    )
}

export default CitiesContainer