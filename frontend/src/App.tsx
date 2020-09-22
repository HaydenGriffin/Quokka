import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './styles/main.css';

import {
  Landing,
  Tracks,
  Setlist,
  Home,
  Artist,
  TourDashboard,
} from './pages/index';
import { SideBar, Loading, TopBar, PrivateRoute } from './components/index';

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
          <Route exact path="/" component={Home} />
        ) : (
          <Route exact path="/" component={Landing} />
        )}
        <PrivateRoute path="/tracks" component={Tracks} />
        <PrivateRoute path="/artist" component={Artist} />
        <PrivateRoute path="/setlist" component={Setlist} />
        <PrivateRoute path="/tourdashboard" component={TourDashboard} />
      </Switch>
    </Router>
  );
}
