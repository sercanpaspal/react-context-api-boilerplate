import React from 'react';

import { INCREMENT } from '../constants/actionTypes';
import { useContextState } from '../contexts/CounterContext';

export default function IncrementButton(){
    const [, dispatch] = useContextState();

    return (
        <button onClick={() => dispatch({type: INCREMENT})}>Increment</button>
    )
}