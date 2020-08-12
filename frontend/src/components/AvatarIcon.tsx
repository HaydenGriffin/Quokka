import React from 'react';
import { FC } from 'react';
import AvatarPhoto from '../assets/images/me.jpg';

const AvatarIcon: FC = () => {
  return (
    <img src={AvatarPhoto} className="rounded-full h-24 w-24 p-5 mr-2" alt="" />
  );
};
export default AvatarIcon;
