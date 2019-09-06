import React from 'react';
import logo from './logo.svg';
import './App.css';

import LocalCounter from './components/LocalCounter';
import Counter from './components/Counter';
import ToggleThemeButton from './components/ToggleThemeButton';

import { useStore } from './store';

function App() {
  const { theme } = useStore();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>{theme.state ? 'Light' : 'Dark'}</h2>

        <ToggleThemeButton />

        <Counter />
        
        <Counter />

        <LocalCounter />
      </header>
    </div>
  );
}

export default App;
