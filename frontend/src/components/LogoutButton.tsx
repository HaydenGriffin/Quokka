import React, { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogoutIcon } from '../assets/icons/index';

const LogoutButton: FC = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="w-16 h-16 mr-2"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      <LogoutIcon />
    </button>
  );
};

export default LogoutButton;
