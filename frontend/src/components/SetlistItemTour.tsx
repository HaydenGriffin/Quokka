import React, { FC } from 'react';

type SetlistItemTourProps = {
  SetlistStyle: string;
  SetlistName: string;
  version: number;
  date: number;
};

const SetlistItemTour: FC<SetlistItemTourProps> = ({
  SetlistStyle,
  SetlistName,
  version,
  date,
}: SetlistItemTourProps) => {
  const GetSetlist = () => {
    console.log('getting info for ' + SetlistName);
  };
  return (
    <div className={SetlistStyle} onClick={GetSetlist}>
      <h1 className="mr-12">{SetlistName}</h1>
      <h1 className="mr-12">{version}</h1>
      <h1>{date}</h1>
    </div>
  );
};
export default SetlistItemTour;
