import React from "react";
import CitiesContainer from "./Cities/CitiesContainer";

function StateCard({ state, setActiveState, activeState }){

    return(
        <div onClick={()=>setActiveState(state.id)}>
            <h2>{state.state_name}</h2>
            { activeState === state.id ? <CitiesContainer cities={state.cities} /> : null }
        </div>
    )
}

export default StateCard