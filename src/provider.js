import React from 'react';

import CounterProvider from './contexts/CounterContext';

export default ({children}) => (
    <CounterProvider>
        {children}
    </CounterProvider>
);