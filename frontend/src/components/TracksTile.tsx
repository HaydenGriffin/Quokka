import React, { FC } from 'react';
import { ReactComponent as ThreeDots } from '../assets/icons/more-horizontal.svg';
import { ReactComponent as UsersIcon } from '../assets/icons/users.svg';

// set properties for tracktile

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
      {notification && <div className="notify"></div>}
      <div className="tile">
        <ThreeDots className="threedots" />
        <h1 className="pt-8 text-3xl font-medium">{trackname}</h1>
        <p className="subtitle">Sections</p>
        <h3 className="pb-3 font-medium">{sections}</h3>
        <p className="subtitle">Layers</p>
        <h3 className="pb-3 font-medium">{layers}</h3>
        <section className="flex">
          <div className="flex mr-4">
            <div className="bg-media w-1 h-12 mr-2"></div>
            <div>
              <p className="subtitle">Media clip</p>
              <h4 className="font-medium">{media}</h4>
            </div>
          </div>
          <div className="flex mr-4">
            <div className="bg-notch w-1 h-12 mr-2"></div>
            <div>
              <p className="subtitle">Notch</p>
              <h4 className="font-medium">{notch}</h4>
            </div>
          </div>
          <div className="flex mr-4">
            <div className="bg-imag w-1 h-12 mr-2"></div>
            <div>
              <p className="subtitle">IMAG</p>
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
