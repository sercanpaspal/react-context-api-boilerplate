import React from 'react';

import { DECREMENT } from '../constants/actionTypes';
import { useContextState } from '../context/CounterContext';

export default function IncrementButton(){
    const [{count}, dispatch] = useContextState();

    return (
        <button onClick={() => dispatch({type: DECREMENT})}>Decrement</button>
    )
}