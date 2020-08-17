import React, { FC } from 'react';

type ArtistsProps = {
  Pheader: string;
  Psubheader: string;
};

const ArtistPropeties: FC<ArtistsProps> = ({
  Pheader,
  Psubheader,
}: ArtistsProps) => {
  return (
    <div className="flex">
      <div className="bg-accent w-px mr-2"></div>
      <div>
        <p className="subtitle text-lg">{Pheader}</p>
        <h3 className="font-medium text-1xl">{Psubheader}</h3>
      </div>
    </div>
  );
};

export default ArtistPropeties;
