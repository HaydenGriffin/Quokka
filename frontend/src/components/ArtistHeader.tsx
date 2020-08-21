import React, { FC } from 'react';
import { ReactComponent as DropdownIcon } from '../assets/icons/chevron-down.svg';
import { ReactComponent as ThreeDotsIcon } from '../assets/icons/more-horizontal.svg';
import ArtistProperties from './ArtistProperties';

type ArtistHeaderProps = {
  title: string;
  setlist: string;
};

const ArtistHeader: FC<ArtistHeaderProps> = ({
  title,
  setlist,
}: ArtistHeaderProps) => {
  return (
    <div className=" flex w-full">
      <div className="bg-white pl-32 mt-8 h-64 w-3/4 mr-5 flex relative z-0">
        <ThreeDotsIcon className="absolute top-0 right-0 mr-6 mt-3 cursor-pointer" />
        <div>
          <h1 className="text-6xl font-bold mr-10">{title}</h1>
          <p className="subtitle text-lg">Current Setlist</p>
          <div className="flex items-center">
            <h3 className="font-medium text-3xl mr-3">{setlist}</h3>
            <DropdownIcon className="w-8 h-8" />
          </div>
        </div>
        <div className=" grid grid-cols-2 col-gap-1 row-gap-1 items-center">
          <ArtistProperties Pheader="Sets" Psubheader="6" />
          <ArtistProperties Pheader="Tracks" Psubheader="24" />
          <ArtistProperties Pheader="Deadline" Psubheader="28 July 2020" />
          <ArtistProperties Pheader="Video Resolution" Psubheader="2600x4056" />
        </div>
      </div>
      <div className="bg-accent w-1/2 h-64 mt-8 text-center "></div>
    </div>
  );
};
export default ArtistHeader;
