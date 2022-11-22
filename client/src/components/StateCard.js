import React from "react";
import StateCitiesContainer from "./StateCitiesContainer";

function StateCard({ state, setActiveState, activeState }){

    return(
        <div onClick={()=>setActiveState(state.id)}>
            <h2>{state.name}</h2>
            { activeState === state.id ? <StateCitiesContainer cities={state.cities} /> : null }
        </div>
    )
}

export default StateCard