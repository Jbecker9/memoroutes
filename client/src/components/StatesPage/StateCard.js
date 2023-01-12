import React from "react";
import CitiesContainer from "./Cities/CitiesContainer";
import "../../styles/StateCard.css"

function StateCard({ state, setActiveState, activeState }){

    return(
        <div className="StateCard-div" onClick={()=>setActiveState(state.id)}>
            <h2 className="StateCard-h2">{state.state_name}</h2>
            { activeState === state.id ? <CitiesContainer cities={state.cities} /> : null }
        </div>
    )
}

export default StateCard