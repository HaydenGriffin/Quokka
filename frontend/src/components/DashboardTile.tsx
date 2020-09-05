import React, { FC } from 'react';
import { ReactComponent as ThreeDots } from '../assets/icons/more-horizontal.svg';
import { ReactComponent as UsersIcon } from '../assets/icons/users.svg';

type ProjectTileProps = {
  notification: boolean;
  artist: string;
  tour: string;
  setlist: string;
  sets: number;
  tracks: number;
  tourAdmin: string;
};

const ProjectTile: FC<ProjectTileProps> = ({
  notification,
  artist,
  tour,
  setlist,
  sets,
  tracks,
  tourAdmin,
}: ProjectTileProps) => {
  return (
    <div className="relative mb-5 cursor-pointer">
      {notification && <div className="notify"></div>}
      <div className="dashboard-tile">
        <div className="mr-20">
          <h1 className="text-5xl font-bold">{tour}</h1>
          <h3 className="font-regular text-2xl">{artist}</h3>
        </div>
        <div className="mr-10">
          <p className="subtitle">Current setlist</p>
          <h3 className=" font-medium">{setlist}</h3>
        </div>
        <section className="flex">
          <div className="flex mr-10">
            <div className="bg-imag w-px h-12 mr-2"></div>
            <div>
              <p className="subtitle">Sets</p>
              <h4 className="font-medium">{sets}</h4>
            </div>
          </div>
          <div className="flex mr-10">
            <div className="bg-media w-px h-12 mr-2"></div>
            <div>
              <p className="subtitle">Tracks</p>
              <h4 className="font-medium">{tracks}</h4>
            </div>
          </div>
        </section>
        <div>
          <p className="subtitle">Tour Admin</p>
          <p className="font-medium">{tourAdmin}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectTile;
