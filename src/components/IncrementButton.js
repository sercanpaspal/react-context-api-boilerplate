import React from 'react';

import { INCREMENT } from '../constants/actionTypes';
import { useContextState } from '../context/CounterContext';

export default function IncrementButton(){
    const [{count}, dispatch] = useContextState();

    return (
        <button onClick={() => dispatch({type: INCREMENT})}>Increment</button>
    )
}