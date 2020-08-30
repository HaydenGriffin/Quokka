import React from 'react';
import Button from './components/Button';

export default function Register() {
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-1/2 h-full bg-primary">
          <div className="w-auto h-auto bg-white p-24">
            <h1 className="text-6xl font-bold mr-10">Sign Up</h1>
            <a href="#" className="underline">
              {' '}
              guest log in
            </a>
            <form action="POST">
              <label htmlFor="uname" className="subtitle text-lg">
                Username
              </label>
              <br></br>
              <input
                type="text"
                name="uname"
                required
                className="bg-primary mb-3"
              />
              <br></br>
              <label htmlFor="mail" className="subtitle text-lg">
                Email
              </label>
              <br></br>
              <input
                type="email"
                name="mail"
                required
                className="bg-primary mb-3"
              />
              <br></br>
              <label htmlFor="pwd" className="subtitle text-lg">
                Password
              </label>
              <br></br>
              <input
                type="password"
                name="pwd"
                required
                className="bg-primary mb-3"
              />
              <br></br>
              <label htmlFor="Rpwd" className="subtitle text-lg">
                Re-type Passsword
              </label>
              <br></br>
              <input
                type="password"
                name="Rpwd"
                required
                className="bg-primary mb-3"
              />
              <br></br>
            </form>
            <div className="flex">
              <Button>Sign up</Button>
              <p className="text-gray-500">
                Already have an account?
                <a href="#" className="underline text-black">
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-accent w-1/2 h-full">hello</div>
      </div>
    </>
  );
}
