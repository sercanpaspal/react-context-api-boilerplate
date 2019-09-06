import React from 'react';

import { Link } from 'react-router-dom';

import { useStore } from '../store';

export default function Header(){
    const { theme } = useStore();
    
    return (
        <header>
            <h2>Theme: {theme.state ? 'Light' : 'Dark'}</h2>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    )
}