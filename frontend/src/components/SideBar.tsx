import React, { FC } from 'react';
import { HomeIcon, ArtistIcon, TourIcon } from '../assets/icons/index';
import { NavLink } from 'react-router-dom';
const IconClassName = 'icon';

const Sidebar: FC = () => {
  return (
    <div className="w-16 pt-24 fixed h-screen bg-accent z-10">
      <NavLink
        exact
        to="/"
        className={IconClassName}
        activeClassName="icon-active"
      >
        <HomeIcon />
      </NavLink>
      <NavLink
        to="/artist"
        className={IconClassName}
        activeClassName="icon-active"
      >
        <ArtistIcon />
      </NavLink>
      <TourIcon />
    </div>
  );
};
export default Sidebar;
