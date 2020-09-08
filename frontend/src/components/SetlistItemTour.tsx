import React, { FC } from 'react';

type SetlistitemTourProps = {
  SetlistStyle: string;
  Setlistname: string;
  version: number;
  date: number;
};

const SetlistitemTour: FC<SetlistitemTourProps> = ({
  SetlistStyle,
  Setlistname,
  version,
  date,
}: SetlistitemTourProps) => {
  return (
    <div className={SetlistStyle}>
      <h1 className="mr-12">{Setlistname}</h1>
      <h1 className="mr-12">{version}</h1>
      <h1>{date}</h1>
    </div>
  );
};
export default SetlistitemTour;
