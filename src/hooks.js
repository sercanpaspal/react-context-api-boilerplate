import { useReducer } from 'react';
import { applyMiddleware } from './middleware';

export const useMiddlewareReducer = (reducer, initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return [state, applyMiddleware(dispatch)];
}