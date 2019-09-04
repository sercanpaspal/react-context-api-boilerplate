import React, { useReducer, createContext } from 'react';

import AuthProvider from './context/AuthContext';
import CounterProvider from './context/CounterContext';

export default ({children}) => (
    <AuthProvider>
        <CounterProvider>
            {children}
        </CounterProvider>
    </AuthProvider>
);