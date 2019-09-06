import React from 'react';

import { TOGGLE_THEME } from '../constants/actionTypes';
import { useStore } from '../store';

export default function ToggleThemeButton(){
    const { theme } = useStore();

    return (
        <button onClick={() => theme.dispatch({type: TOGGLE_THEME})}>Change Theme</button>
    )
}