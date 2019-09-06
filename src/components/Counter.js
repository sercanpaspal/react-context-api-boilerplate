import React from 'react';

import { INCREMENT, DECREMENT } from '../constants/actionTypes';
import { useStore } from '../store';

export default function Counter(){
    const { counter } = useStore();

    return (
        <div>
            <h2>Global Counter</h2>
            <h3>{counter.state}</h3>

            <button onClick={() => counter.dispatch({type: INCREMENT})}>Increment</button>
            <button onClick={() => counter.dispatch({type: DECREMENT})}>Decrement</button>
        </div>
    );
}