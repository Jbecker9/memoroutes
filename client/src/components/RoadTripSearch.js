import React, { useState } from "react";

function RoadTripSearch({ setSearchValue }){
    

    return(
        <div>
                <input onChange={setSearchValue} placeholder="Search..." />
                <button> Submit Search </button>
        </div>
    )
}

export default RoadTripSearch