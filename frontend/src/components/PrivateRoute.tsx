import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Loading } from './index';

type PrivateRouteProps = {
  path: string;
  component: FC;
  exact?: boolean;
};

const PrivateRoute: FC<PrivateRouteProps> = ({
  path,
  component,
  exact,
  ...args
}: PrivateRouteProps) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    exact
    {...args}
  />
);

export default PrivateRoute;
