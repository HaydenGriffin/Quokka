import React, { FC } from 'react';

type ArtistHeaderProps = {
  title: string;
  setlist: string;
};

const ArtistHeader: FC<ArtistHeaderProps> = ({
  title,
  setlist,
}: ArtistHeaderProps) => {
  return (
    <div className="bg-white pl-32 mt-8 h-64 w-2/4">
      <h1 className="text-6xl font-bold mr-10">{title}</h1>
      <p className="subtitle text-lg">Current Setlist</p>
      <h3 className="font-medium text-3xl">{setlist}</h3>
    </div>
  );
};
export default ArtistHeader;
