import React, { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton: FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="text-white underline"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
