import React, { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton: FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="signup-btn"
      onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
    >
      Sign Up
    </button>
  );
};

export default SignupButton;
