import React, { FC } from 'react';
import { ThreeDotsIcon, UsersIcon } from '../assets/icons/index';

type ProjectTileProps = {
  notification: boolean;
  artist: string;
  set: string;
  sets: number;
  tracks: number;
  users: number;
};

const ProjectTile: FC<ProjectTileProps> = ({
  notification,
  artist,
  set,
  sets,
  tracks,
  users,
}: ProjectTileProps) => {
  return (
    <div className="relative">
      {notification && <div className="notify"></div>}
      <div className="tile">
        <ThreeDotsIcon className="threedots" />
        <h1 className="pt-8 text-3xl font-medium">{artist}</h1>
        <p className="subtitle">Current set</p>
        <h3 className="pb-12 font-medium">{set}</h3>
        <section className="flex">
          <div className="flex mr-4">
            <div className="bg-imag w-px h-12 mr-2"></div>
            <div>
              <p className="subtitle">Sets</p>
              <h4 className="font-medium">{sets}</h4>
            </div>
          </div>
          <div className="flex">
            <div className="bg-media w-px h-12 mr-2"></div>
            <div>
              <p className="subtitle">Tracks</p>
              <h4 className="font-medium">{tracks}</h4>
            </div>
          </div>
        </section>
        <div className="flex items-center mt-4">
          <div>
            <UsersIcon className="w-6 h-6 mr-2" />
          </div>
          <p className="font-medium">{users}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectTile;
