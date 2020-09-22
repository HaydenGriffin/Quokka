import React from 'react';
import { FC } from 'react';

type AvatarProps = {
  picture: string;
};

const Avatar: FC<AvatarProps> = ({ picture }: AvatarProps) => {
  return (
    <img src={picture} className="rounded-full h-24 w-24 p-5 mr-2" alt="" />
  );
};
export default Avatar;
