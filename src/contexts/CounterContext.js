import React, { createContext, useContext, useReducer } from 'react';

import counterReducer from '../reducers/counter';

const initialState = 0;

export const CounterContext = createContext();

export default function CounterProvider({children}){
    return (
        <CounterContext.Provider value={useReducer(counterReducer, initialState)}>
            {children}
        </CounterContext.Provider>
    )
};

export const  useContextState = () => useContext(CounterContext);