import React, { FC } from 'react';
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as SetlistIcon } from '../assets/icons/list.svg';
import { ReactComponent as TrackIcon } from '../assets/icons/record-thicc.svg';
import { ReactComponent as ArtistIcon } from '../assets/icons/mic-thicc.svg';

const IconClassName = 'icon';

const Sidebar: FC = () => {
  return (
    <div className="w-16 pt-24 fixed h-screen bg-accent z-0">
      <HomeIcon className={IconClassName} />
      <a href="/">
        <ArtistIcon className="icon-active" />
      </a>
      <a href="/tracks">
        <TrackIcon className={IconClassName} />
      </a>
      <SetlistIcon className={IconClassName} />
    </div>
  );
};
export default Sidebar;
