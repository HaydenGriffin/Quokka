import React, { FC } from 'react';
import { ReactComponent as ThreeDots } from '../assets/icons/more-horizontal.svg';
import { ReactComponent as UsersIcon } from '../assets/icons/users.svg';

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
      {notification && (
        <div className="bg-notify w-8 h-8 rounded-full text-center absolute top-0 left-0 z-10"></div>
      )}
      <div className="bg-white rounded-md w-64 h- p-5 relative ml-3 mt-3">
        <ThreeDots className="absolute top-0 right-0 mr-4 mt-2" />
        <h1 className="pt-8 text-3xl">{artist}</h1>
        <p className="text-xs text-gray-600">Current set</p>
        <h3 className="pb-12">{set}</h3>
        <section className="flex">
          <div className="flex mr-4">
            <div className="bg-imag w-1 h-12 mr-2"></div>
            <div>
              <p className="text-xs text-gray-600">sets</p>
              <h4>{sets}</h4>
            </div>
          </div>
          <div className="flex">
            <div className="bg-media w-1 h-12 mr-2"></div>
            <div>
              <p className="text-xs text-gray-600">Tracks</p>
              <h4>{tracks}</h4>
            </div>
          </div>
        </section>
        <div className="flex items-center mt-4">
          <div>
            <UsersIcon className="w-6 h-6 mr-2" />
          </div>
          <p>{users}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectTile;
