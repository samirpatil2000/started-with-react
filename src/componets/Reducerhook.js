import React, { useReducer, useState } from 'react'


const initialState = 5;
const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === 'INCREMENT'){
        state += 1;
    } else if (action.type === 'DECREMENT'){
        state -= 1;
    }
    return state;
}

export default function Reducerhook() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>{"Current State = " + state}</p>
            <div>
                <button onClick={() => dispatch({type: "INCREMENT"})}>Inc</button>
                <button onClick={() => dispatch({type: "DECREMENT"})}>Dec</button>
            </div>
        </div>
    )
}
