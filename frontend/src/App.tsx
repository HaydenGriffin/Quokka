import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
// pages
import Home from './Home';
import Tracks from './Tracks';
import Setlist from './setlist';
import './styles/main.css';
import TopBar from './components/TopBar';
import Dashboard from './dashboard';

export default function App() {
  return (
    <Router>
      <SideBar />
      <TopBar />
      <Switch>
        <Route exact path="/" component={Dashboard}></Route>
        <Route path="/tracks">
          <Tracks />
        </Route>
        <Route path="/setlist">
          <Setlist />
        </Route>
      </Switch>
    </Router>
  );
}
