import React, { createContext, useContext, useReducer } from 'react';

import { applyMiddleware } from './middleware';

import reducer from './reducer';

export const Context = createContext();

export default function Provider({children}){
    const value = Object.assign({}, ...Object.keys(reducer).map(k => ({[k]: useReducer.apply(null, reducer[k])})));

    Object.keys(value).forEach(vKey => {
        let [state, dispatch] = value[vKey];
        value[vKey] = {state, dispatch: applyMiddleware(dispatch)}
    });

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
};

export const  useStore = () => useContext(Context);