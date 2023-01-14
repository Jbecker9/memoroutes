import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStates } from "../../reducers/stateSlice";
import StateCard from "./StateCard";

function States(){
    const dispatch = useDispatch();
    const states = useSelector((state) => state.states)
    const [activeState, setActiveState] = useState(null)

    useEffect(() => {
        dispatch(fetchStates())
    },[dispatch])
    
    return(
        <div>
            { states.entities?.map((state) => <StateCard setActiveState={setActiveState} activeState={activeState} state={state} key={state.id} /> ) }
        </div>
    )
}

export default States