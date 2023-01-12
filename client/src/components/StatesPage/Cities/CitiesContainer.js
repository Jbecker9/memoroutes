import React, { useState } from "react";
import CityCard from "./CityCard";
import "../../../styles/CityCard.css"

function CitiesContainer({ cities }){
    const [cityDes, setCityDes] = useState(null)
    const [cityStop, setCityStop] = useState(null)

    return(
        <div className="CityCard-citiesContainer">
            { cities?.map((city) => <CityCard cityDes={cityDes} setCityDes={setCityDes} cityStop={cityStop} setCityStop={setCityStop} city={city} key={city.id} /> ) }
        </div>
    )
}

export default CitiesContainer