import React, { useState } from 'react';
import Button from './components/Button';
import * as api from './api/api';
import { userInfo } from 'os';

export default function Register() {
  const [UsernameValue, setUsernameValue] = useState<string>('');
  const [EmailValue, setEmailValue] = useState<string>('');
  const [PasswordValue, setPasswordValue] = useState<string>('');
  const [CheckPasswordValue, setCheckPasswordValue] = useState<string>('');

  const newUser = () => {
    let Userinfo: Array<string>;
    Userinfo = [UsernameValue, EmailValue, PasswordValue, CheckPasswordValue];

    for (let element of Userinfo) {
      if (element === '') {
        alert('item empty.');
        break;
      } else {
        //pass
      }
    }
    if (PasswordValue !== CheckPasswordValue) {
      alert("passwords don't match.");
    } else {
      let response = api.user.register(
        EmailValue,
        PasswordValue,
        CheckPasswordValue,
        UsernameValue
      );

      console.log(response);
    }
  };
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-1/2 h-full bg-primary">
          <div className="w-auto h-auto bg-white p-24">
            <h1 className="text-6xl font-bold mr-10">Sign Up</h1>
            <a href="#" className="underline">
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
                onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                  setUsernameValue(ev.target.value)
                }
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
                onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                  setEmailValue(ev.target.value)
                }
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
                onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                  setPasswordValue(ev.target.value)
                }
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
                onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                  setCheckPasswordValue(ev.target.value)
                }
              />
              <br></br>
            </form>
            <div className="flex">
              <Button onClick={newUser}>Sign up</Button>
              <p className="text-gray-500">
                Already have an account?
                <a href="#" className="underline text-black">
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-accent w-1/2 h-full"></div>
      </div>
    </>
  );
}
