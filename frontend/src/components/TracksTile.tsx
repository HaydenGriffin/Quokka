import React, { FC } from 'react';
import { ReactComponent as ThreeDots } from '../assets/icons/more-horizontal.svg';
import { ReactComponent as UsersIcon } from '../assets/icons/users.svg';

type ProjectTileProps = {
  notification: boolean;
  trackname: string;
  sections: number;
  layers: number;
  media: number;
  notch: number;
  imag: number;
  assigned: number;
};

const ProjectTile: FC<ProjectTileProps> = ({
  notification,
  trackname,
  sections,
  layers,
  media,
  notch,
  imag,
  assigned,
}: ProjectTileProps) => {
  return (
    <div className="relative">
      {notification && (
        <div className="bg-notify w-8 h-8 rounded-full text-center absolute top-0 left-0 z-10 shadow-xl"></div>
      )}
      <div className="bg-white rounded-md w-64 h- p-5 relative ml-3 mt-3 cursor-pointer transition duration-150 ease-in-out shadow-md hover:bg-accent">
        <ThreeDots className="absolute top-0 right-0 mr-4 mt-2 cursor-pointer" />
        <h1 className="pt-8 text-3xl font-medium">{trackname}</h1>
        <p className="text-xs text-gray-600 font-light">Sections</p>
        <h3 className="pb-3 font-medium">{sections}</h3>
        <p className="text-xs text-gray-600 font-light">Layers</p>
        <h3 className="pb-3 font-medium">{layers}</h3>
        <section className="flex">
          <div className="flex mr-4">
            <div className="bg-media w-1 h-12 mr-2"></div>
            <div>
              <p className="text-xs text-gray-600 font-light">Media clip</p>
              <h4 className="font-medium">{media}</h4>
            </div>
          </div>
          <div className="flex mr-4">
            <div className="bg-notch w-1 h-12 mr-2"></div>
            <div>
              <p className="text-xs text-gray-600 font-light">Notch</p>
              <h4 className="font-medium">{notch}</h4>
            </div>
          </div>
          <div className="flex mr-4">
            <div className="bg-imag w-1 h-12 mr-2"></div>
            <div>
              <p className="text-xs text-gray-600 font-light">IMAG</p>
              <h4 className="font-medium">{imag}</h4>
            </div>
          </div>
        </section>
        <div className="flex items-center mt-4">
          <div>
            <UsersIcon className="w-6 h-6 mr-2" />
          </div>
          <p>{assigned}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectTile;
