import React, { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton: FC = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="btn-primary"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
