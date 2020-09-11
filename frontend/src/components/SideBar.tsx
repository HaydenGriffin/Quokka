import React, { FC } from 'react';
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as ArtistIcon } from '../assets/icons/mic-thicc.svg';
import { ReactComponent as TourIcon } from '../assets/icons/globe.svg';
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
