import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';

import Layout from './components/Layout';

function App() {

    return (
        <div className="app">
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
