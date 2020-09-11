import React, { FC } from 'react';
import Searchbar from './search';
import Avatar from './AvatarIcon';
import { ReactComponent as BellIcon } from '../assets/icons/bell.svg';
import Breadcrumbs from './Breadcrumbs';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

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
        <Searchbar />
        <Avatar picture={picture} />
        <BellIcon className="w-16 h-16 mr-2" />
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </header>
  );
};
export default TopBar;
