import React, { FC } from 'react';
import Button from './Button';
import { ReactComponent as CloseIco } from '../assets/icons/x.svg';

const ProjectModal: FC = () => {
  return (
    <div className="w-full h-full bg-black">
      <div className="w-1/2 h-1/2 bg bg-white"></div>
    </div>
  );
};
export default ProjectModal;
