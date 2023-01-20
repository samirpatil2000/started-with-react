import { useState } from "react";
import CoreServiceContext from "./coreServiceContext";


const CoreServiceState = (props) =>{
    const s1 = {
        name: "Samir"
    }
    const [state,  setState] = useState(s1);
    const update = () =>{
        setState({
            name: "Sam",
            payload: "Payload",
        })
    }
    return (
        <CoreServiceContext.Provider value={{state, update}}>
            {props.children}
        </CoreServiceContext.Provider>
    )
}
export default CoreServiceState;