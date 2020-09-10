import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
// pages
import Home from './Home';
import Landing from './Landing';
import Tracks from './Tracks';
import Setlist from './setlist';
import './styles/main.css';
import TopBar from './components/TopBar';

import ActivityPanel from './components/ActivityPanel';
import TourDash from './TourDash';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/Loading';
import Dashboard from './dashboard';

export default function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
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
        <Route path="/tourdashboard" component={TourDash} />
      </Switch>
    </Router>
  );
}
