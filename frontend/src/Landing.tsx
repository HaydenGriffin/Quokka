import React from 'react';
import SignupButton from './components/SignupButton';

export default function Landing() {
  return (
    <>
      <div className="w-screen h-screen absolute bg-darkgrey z-20">
        <div className="pl-16 pt-48">
          <h1 className="text-white font-medium m-0 p-0 text-3xl">Quokka</h1>
          <h1 className="text-white font-black text-6xl uppercase m-0">
            Tour Workflow
          </h1>
          <p className="text-white text-xl">
            Keep up to date with Tour progress, from concept to production.
          </p>
          <SignupButton />
          <p className="text-white">
            Already have an account?{' '}
            <a href="#" className="underline">
              Log in
            </a>
          </p>
        </div>
        <img src="Ed-Landing.jpg" alt="" />
      </div>
    </>
  );
}
