import React from 'react';
import { FC } from 'react';

type AvatarIconProps = {
  picture: string;
};

const AvatarIcon: FC<AvatarIconProps> = ({ picture }: AvatarIconProps) => {
  return (
    <img src={picture} className="rounded-full h-24 w-24 p-5 mr-2" alt="" />
  );
};
export default AvatarIcon;
