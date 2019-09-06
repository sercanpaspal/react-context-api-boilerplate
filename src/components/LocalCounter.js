import React, { useState } from 'react';


export default function LocalCounter(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Local Counter</h2>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}