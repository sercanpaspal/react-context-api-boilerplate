import React, { createContext, useContext } from 'react';

import { useMiddlewareReducer } from '../hooks';

import counterReducer from '../reducers/counter';

const initialState = 0;

export const CounterContext = createContext();

export default function CounterProvider({children}){
    return (
        <CounterContext.Provider value={useMiddlewareReducer(counterReducer, initialState)}>
            {children}
        </CounterContext.Provider>
    )
};

export const  useContextState = () => useContext(CounterContext);