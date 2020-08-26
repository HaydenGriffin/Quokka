import React, { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
// pages
import Home from './Home';
import Tracks from './Tracks';
import Setlist from './setlist';
import './styles/main.css';
import TopBar from './components/TopBar';
import ActivityPanel from './components/ActivityPanel';

const ArtistContext = React.createContext('');

<ArtistContext.Provider value='test'></ArtistContext.Provider>

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
        <Route path="/setlist">
          <Setlist />
        </Route>
      </Switch>
    </Router>
  );
}
