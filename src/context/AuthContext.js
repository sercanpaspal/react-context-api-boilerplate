import React, { createContext, useContext, useReducer } from 'react';

import authReducer from '../reducers/auth';

const initialState = {
    isLoggedIn: false,
    user: null
};

export const AuthContext = createContext();

export default function AuthProvider({children}){
    return (
        <AuthContext.Provider value={useReducer(authReducer, initialState)}>
            {children}
        </AuthContext.Provider>
    )
};

export const useContextState = () => useContext(AuthContext);