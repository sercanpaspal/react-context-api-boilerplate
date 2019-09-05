import React from 'react';

import { DECREMENT } from '../constants/actionTypes';
import { useContextState } from '../contexts/CounterContext';

export default function IncrementButton(){
    const [, dispatch] = useContextState();

    return (
        <button onClick={() => dispatch({type: DECREMENT})}>Decrement</button>
    )
}