import React, { FC } from 'react';
import { ReactComponent as DropdownIco } from '../assets/icons/chevron-down.svg';

type ArtistHeaderProps = {
  title: string;
  setlist: string;
  pagename: string;
  pageinfo: string;
};

const ArtistHeader: FC<ArtistHeaderProps> = ({
  title,
  setlist,
  pagename,
  pageinfo,
}: ArtistHeaderProps) => {
  return (
    <div className=" flex w-full">
      <div className="bg-white pl-32 mt-8 h-64 w-3/4 mr-20 flex">
        <div>
          <h1 className="text-6xl font-bold mr-10">{title}</h1>
          <p className="subtitle text-lg">Current Setlist</p>
          <div className="flex items-center">
            <h3 className="font-medium text-3xl mr-3">{setlist}</h3>
            <DropdownIco className="w-8 h-8" />
          </div>
        </div>
        <div className="grid">
          <p className="subtitle text-lg">Deadline</p>
          <h3 className="font-medium text-1xl">26th July 2020</h3>
          <p className="subtitle text-lg">Video Resolution</p>
          <h3 className="font-medium text-1xl">2600x4056</h3>
          <p className="subtitle text-lg">Deadline</p>
          <h3 className="font-medium text-1xl">26th July 2020</h3>
        </div>
      </div>
      <div className="bg-accent w-64 h-64 mt-8 text-center p-5">
        <h1>{pagename}</h1>
        <p>{pageinfo}</p>
      </div>
    </div>
  );
};
export default ArtistHeader;
