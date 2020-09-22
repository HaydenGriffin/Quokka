import React, { FC } from 'react';
import { HomeIcon, ArtistIcon, TourIcon } from '../assets/icons/index';
const IconClassName = 'icon';

const Sidebar: FC = () => {
  return (
    <div className="w-16 pt-24 fixed h-screen bg-accent z-10">
      <a href="/">
        <HomeIcon className={IconClassName} />
      </a>
      <a href="/artist">
        <ArtistIcon className="icon-active" />
      </a>
      <TourIcon className={IconClassName} />
    </div>
  );
};
export default Sidebar;
