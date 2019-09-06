import React from 'react';

import LocalCounter from './LocalCounter';
import Counter from './Counter';
import ToggleThemeButton from './ToggleThemeButton';

export default function Home(){
    return (
        <div>
            <h1>Home</h1>

            <ToggleThemeButton />

            <Counter />

            <Counter />

            <LocalCounter />
        </div>
    )
}