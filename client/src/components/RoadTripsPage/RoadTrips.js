import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchRoadTripsByLength } from "../../reducers/roadTripSlice";
import RoadTripsContainer from "./RoadTripsContainer";
import RoadTripSearch from "./RoadTripSearch";

function RoadTrips(){
    const [search, setSearch] = useState(false)
    const roadTrips = useSelector((state) => state.roadTrips)
    const dispatch = useDispatch()
    
    function renderFilterByOption(event){
        event.preventDefault()
        let format = event.target.value
        if (format === "Default"){
            setSearch(false)
        } else if (format === "Search"){
            setSearch(true)
        } else {
            setSearch(false)
            dispatch(fetchRoadTripsByLength(format))
        }
    }

    return(
        <div>
            Road Trips Page
            <label>
                Filter by:
                <select onChange={renderFilterByOption}>
                    <option value={"Default"} >Filter by...</option>
                    <option value={"DESC"}> Length: High to Low </option>
                    <option value={"ASC"}> Length: Low to High </option>
                    <option value={"Likes"}> Likes: High to Low </option>
                    <option value={"Search"} >Search</option>
                </select>
            </label>
            { search ? <RoadTripSearch /> : null }
            { roadTrips.entities ? <RoadTripsContainer roadTrips={roadTrips.entities} /> : null }
        </div>
    )
}

export default RoadTrips