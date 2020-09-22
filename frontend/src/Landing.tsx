import React from 'react';
import { SignupButton, LoginButton } from './components/index';
import EdLanding from './assets/images/Ed-Landing.jpg';

export default function Landing() {
  return (
    <div className="w-screen h-screen absolute bg-darkgrey z-20 flex">
      <div className="px-16 pt-48 w-1/2">
        <h1 className="text-white font-medium m-0 p-0 text-3xl">Quokka</h1>
        <h1 className="text-white font-black text-6xl uppercase m-0">
          Tour Workflow
        </h1>
        <p className="text-white text-xl">
          Keep up to date with Tour progress, from concept to production.
        </p>
        <SignupButton />
        <p className="text-white">
          Already have an account?
          <LoginButton />
        </p>
      </div>
      <img src={EdLanding} alt="" className="w-1/2" />
    </div>
  );
}
