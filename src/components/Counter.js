import React from 'react';

import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';

import { useContextState } from '../context/CounterContext';

export default function Counter(){
    const [state, dispatch] = useContextState();

    return (
        <div>
            <h1>{state}</h1>

            <IncrementButton />
            <DecrementButton />
        </div>
    );
}