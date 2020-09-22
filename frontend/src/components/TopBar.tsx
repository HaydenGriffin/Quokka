import React, { FC } from 'react';
import {
  SearchBar,
  Avatar,
  Breadcrumbs,
  LoginButton,
  LogoutButton,
} from './index';
import { BellIcon } from '../assets/icons/index';
import { useAuth0 } from '@auth0/auth0-react';

const TopBar: FC = () => {
  const { user, isAuthenticated } = useAuth0();
  const { name, picture } = user;

  return (
    <header className="pr-12 pt-2 h-24 bg-white">
      <div className="flex float-right items-center w-2/4">
        <Breadcrumbs title="name">
          <li>
            <a href="/">{name}'s Artists</a>
          </li>
          <li>Ed Sheeran</li>
        </Breadcrumbs>
        <SearchBar />
        <Avatar picture={picture} />
        <BellIcon className="w-16 h-16 mr-2" />
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </header>
  );
};
export default TopBar;
