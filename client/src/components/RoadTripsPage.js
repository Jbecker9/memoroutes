import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

function RoadTripsPage(){
    const roadTrips = useSelector((state) => state.roadTrips)
    const dispatch = useDispatch()
    
    function renderFilterByOption(event){
        switch(event.target.value){
            case "Length-Desc":
        }
    }

    console.log(roadTrips)

    return(
        <div>
            <form>
                <input placeholder="Search..." />
                <button> Submit Search </button>
            </form>
                <label>
                    Filter by:
                    <select onChange={renderFilterByOption}>
                        <option value={"Length-Desc"}>Length: High to Low</option>
                        <option>Length: Low to High</option>
                        <option>Most Popular</option>
                    </select>
                </label>
        </div>
    )
}

export default RoadTripsPage