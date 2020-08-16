import React, { FC } from 'react';
import Button from './Button';
import { ReactComponent as CloseIco } from '../assets/icons/x.svg';

const ProjectModal: FC = () => {
  return (
    <div className="w-full h-full absolute flex justify-center items-center inset-0 bg-black bg-opacity-25 z-20 ">
      <div className="w-auto h-64 bg-white relative p-10 py-5">
        <CloseIco className="w-6 absolute right-0 mt-0 mr-5" />
        <h1 className="text-3xl font-medium mt-3">New Artist</h1>
        <p className="subtitle mb-3">Artistname</p>
        <input type="text" className="bg-primary py-2 px-1 w-full mb-6" />
        <Button>Create Artist</Button>
      </div>
    </div>
  );
};
export default ProjectModal;
