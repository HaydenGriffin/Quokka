import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './Home';
import Tracks from './Tracks';
import './styles/main.css';
import TopBar from './components/TopBar';
import ActivityPanel from './components/ActivityPanel';

export default function App() {
  return (
    <Router>
      <ActivityPanel />
      <SideBar />
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tracks">
          <Tracks />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

function Dashboard() {
  return (
    <div className="pt-20">
      <h2>Dashboard</h2>
    </div>
  );
}
