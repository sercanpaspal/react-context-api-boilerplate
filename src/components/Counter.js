import React from 'react';

import { INCREMENT, DECREMENT } from '../constants/actionTypes';
import { useStore } from '../store';

export default function Counter(){
    const [state, dispatch] = useStore();

    return (
        <div>
            <h2>Global Counter</h2>
            <h3>{state.counter}</h3>

            <button onClick={() => dispatch({type: INCREMENT})}>Increment</button>
            <button onClick={() => dispatch({type: DECREMENT})}>Decrement</button>
        </div>
    );
}