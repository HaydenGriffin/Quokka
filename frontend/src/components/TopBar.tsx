import React, { FC } from 'react';
import Searchbar from './search';
import Avatar from './AvatarIcon';
import { ReactComponent as LogoutICon } from '../assets/icons/log-out.svg';
import { ReactComponent as BellIcon } from '../assets/icons/bell.svg';
import Breadcrumbs from './Breadcrumbs';
const TopBar: FC = () => {
  return (
    <header className="pr-12 pt-2 h-24 bg-white">
      <div className="flex float-right items-center w-2/4">
        <Breadcrumbs title="name">
          <li>
            <a href="/">Matt's Artists</a>
          </li>
          <li>Ed Sheeran</li>
        </Breadcrumbs>
        <Searchbar />
        <Avatar />
        <BellIcon className="w-16 h-16 mr-2" />
        <LogoutICon className="w-16 h-16" />
      </div>
    </header>
  );
};
export default TopBar;
