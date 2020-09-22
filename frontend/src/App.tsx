import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// pages
import Landing from './Landing';
import Tracks from './Tracks';
import Setlist from './Setlist';
import Home from './Home';
import Artist from './Artist';
import TourDash from './TourDashboard';
// components
import { SideBar, Loading, TopBar } from './components/index';
// styles
import './styles/main.css';

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
        <Route path="/tracks" component={Tracks} />
        <Route path="/artist" component={Artist} />
        <Route path="/setlist" component={Setlist} />
        <Route path="/tourdashboard" component={TourDash} />
      </Switch>
    </Router>
  );
}
