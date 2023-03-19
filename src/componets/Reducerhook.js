import React, { useContext, useReducer, useState } from 'react'
import coreServiceContext from '../context/coreServiceContext';
import CoreServiceState from '../context/CoreServiceState';

const initialState = 5;


export default function Reducerhook() {
    const coreServiceContextObject = useContext(coreServiceContext);
    const reducer = (state, action) => {
        if (action.type === 'INCREMENT'){
            state += 1;
        } else if (action.type === 'DECREMENT'){
            state -= 1;
        } else if (action.type === 'CORE_SERVICE'){
            coreServiceContextObject.globalDispatch({type: "ADD"})
        }
        return state;
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>{"Current State = " + state}, {coreServiceContextObject.state.name} {coreServiceContextObject.state.name2}</p>
            <div>
                <button onClick={() => dispatch({type: "INCREMENT"})}>Inc</button>
                <button onClick={() => dispatch({type: "DECREMENT"})}>Dec</button>
                <button onClick={() => dispatch({type: "CORE_SERVICE"})}>Core Service</button>
            </div>
        </div>
    )
}
