import React, { useContext, useState } from "react";
import PitStopsContainer from "./PitStopsContainer";
import "../../../styles/UserPageTrip.css"
import { MapPageContext } from "../../../context/mapPage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserData } from "../../../reducers/userSlice";


function UserRoadTrips({ trip }){
    const [pitStopClick, setPitStopClick] = useState(false)
    const { setPath, setActiveTrip, setStartingPoint, fillPathContents } = useContext(MapPageContext)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    function renderActiveTrip(){
        setActiveTrip(trip)
        fillPathContents(trip)
        setStartingPoint({
            name: trip.trip_name,
            coordinates: {
                lat: parseInt(trip.departure.lat),
                lng: parseInt(trip.departure.lng)
            },
            city: trip.departure.city_name,
            state: trip.departure.state_name,
            zoom: 5
        })
        setPath([
            {lat: parseInt(trip?.departure?.lat), lng: parseInt(trip?.departure?.lng)},
            {lat: parseInt(trip?.destination?.lat), lng: parseInt(trip?.destination?.lng)}
          ])
        navigate("/map")
    }

    function handleDeleteTrip(){
        fetch(`/road_trips/${trip.id}`,{
            method: "DELETE"
        }).then((response) => response.json())
            .then((userData) => dispatch(updateUserData(userData)))
    }
    
    return(
        <div className="UserPageTrip-tripCardDiv" >
            <h2 className="UserPageTrip-tripTitleH2">{ trip.trip_name }</h2>
            <h4>{ trip.user_likes ? trip.user_likes : 0 } Likes</h4>
                <h4>{ trip.road_trip_distance_miles }</h4>
                <button onClick={handleDeleteTrip} className="UserPageTrip-deleteTripButton"> Delete Trip </button>
                <button onClick={renderActiveTrip} > Set your Active Trip and start your Journey! </button>
            <div className="UserPageTrip-tripCardTripContents">
                <div className="UserPageTrip-tripCardDeparture">
                    <h4>{ trip.departure.city_name },</h4>
                    <h4>{ trip.departure.state_name }</h4>
                </div>
                <div className="UserPageTrip-tripCardDestination">
                    { trip.destination ? 
                        <div>
                            <h4>{ trip.destination.city_name },</h4>
                            <h4>{ trip.destination.state_name }</h4>
                        </div> 
                    :   
                        <h4> No destination </h4> 
                    }
                </div>
            </div>
            <div className="UserPageTrip-pitStopsDiv">
                {pitStopClick ? <PitStopsContainer trip={trip} setPitStopClick={setPitStopClick} pitStops={trip.pit_stops} /> : <button className="UserPageTrip-showPitStopsButton" onClick={()=>setPitStopClick(true)}> Show Pit Stops </button> }
            </div>
        </div>
    )
}

export default UserRoadTrips