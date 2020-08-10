import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './Home';
import './styles/main.css';

export default function App() {
  return (
    <Router>
      <SideBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

function About() {
  return (
    <div className="pt-20">
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="pt-20">
      <h2>Dashboard</h2>
    </div>
  );
}
