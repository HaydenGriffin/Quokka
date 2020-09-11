import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
// pages
import Landing from './Landing';
import Tracks from './Tracks';
import Setlist from './setlist';
import './styles/main.css';
import TopBar from './components/TopBar';

import TourDash from './TourDashboard';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/Loading';
import Home from './Home';

export default function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Router>
      {isAuthenticated && (
        <>
          <SideBar />
          <TopBar />
        </>
      )}
      <Switch>
        {isAuthenticated ? (
          <Route exact path="/" component={Home}></Route>
        ) : (
          <Route exact path="/" component={Landing}></Route>
        )}

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
