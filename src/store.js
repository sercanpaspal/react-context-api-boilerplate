import React, { createContext, useContext, useReducer } from 'react';

import { applyMiddleware } from './middleware';

import reducer from './reducer';

export const Context = createContext();

const combinedReducers = (state = {}, action = {}) => Object.assign({}, ...Object.keys(reducer).map(k => ({[k]: reducer[k](state[k], action)})));

export default function Provider({children}){
    const [state, dispatch] = useReducer(combinedReducers, combinedReducers({}));

    return (
        <Context.Provider value={[state, applyMiddleware(dispatch)]}>
            {children}
        </Context.Provider>
    )
};

export const  useStore = () => useContext(Context);