import { useReducer, useState } from "react";
import CoreServiceContext from "./coreServiceContext";

const initialState = {
    name: "Samir"
}

const CoreServiceState = (props) =>{
    
    const [state,  globalDispatch] = useReducer(reducer, initialState);
    
    return (
        <CoreServiceContext.Provider value={{state, globalDispatch}}>
            {props.children}
        </CoreServiceContext.Provider>
    )
}

function reducer(state, action) {
    if (action.type === "ADD"){
        return {
            ...state,
            name2: "ADD-SAM"
        };
    } else if (action.type === "SUB"){
        return {
            ...state,
            name2: "SUB-SAM"
        };
    }
    return state
}


export default CoreServiceState;