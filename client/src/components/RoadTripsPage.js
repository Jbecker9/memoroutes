import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchRoadTrips } from "../reducers/roadTripSlice";
import RoadTripSearch from "./RoadTripSearch";

function RoadTripsPage(){
    const [search, setSearch] = useState(false)
    const [searchValue, setSearchValue] = useState(null)
    const roadTrips = useSelector((state) => state.roadTrips)
    const dispatch = useDispatch()

    console.log(roadTrips)
    
    function renderFilterByOption(event){
        event.preventDefault()
        let format = event.target.value
        if (format === "Default"){
            setSearch(false)
        } else if (format === "Search"){
            setSearch(true)
        } else {
            setSearch(false)
            dispatch(fetchRoadTrips(format))
        }
    }

    return(
        <div>
            <label>
                Filter by:
                <select onChange={renderFilterByOption}>
                    <option value={"Default"} >Filter by...</option>
                    <option value={"DESC"}> Length: High to Low </option>
                    <option value={"ASC"}> Length: Low to High </option>
                    <option value={"Search"} >Search</option>
                    {/* <option value={"Popular"}>Most Popular</option> */}
                </select>
            </label>
            { search ? <RoadTripSearch setSearchValue={setSearchValue}/> : null }
        </div>
    )
}

export default RoadTripsPage