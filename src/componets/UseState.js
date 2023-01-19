import React, { useState } from 'react'

export default function UseState() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <div>
                <button onClick={() => setCount(count + 1)} >Inc</button>
                <button onClick={() => setCount(count - 1)}>Dec</button>
            </div>
        </div>
    )
}
