import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Recap from './pages/Recap';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/schedule">
          <Schedule/>
        </Route>
        <Route exact path="/recap">
          <Recap/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
