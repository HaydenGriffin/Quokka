import React, { FC, useState } from 'react';

type TeamPhotoProps = {
  member?: string;
  photo?: string;
};

const TeamPhoto: FC<TeamPhotoProps> = ({ member, photo }: TeamPhotoProps) => {
  var [ShowName, setShowName] = useState<boolean>(false);
  var [ShowBox, setShowBox] = useState<string>('hidden');
  const name = () => {
    if (ShowName === false) {
      setShowName(true);
      setShowBox('');
    } else {
      setShowName(false);
      setShowBox('hidden');
    }
  };
  return (
    <>
      <div className="realtive items-center">
        <div className="team-photo" onClick={() => name()}>
          <p>{photo}</p>
        </div>
        <div className={'bg-white p-2 absolute ' + ShowBox}>
          <h1>{member}</h1>
        </div>
      </div>
    </>
  );
};
export default TeamPhoto;
