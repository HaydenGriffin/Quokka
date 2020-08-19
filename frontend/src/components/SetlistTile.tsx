import React, { FC } from 'react';
import { ReactComponent as ThreeDots } from '../assets/icons/more-horizontal.svg';
import { ReactComponent as UsersIcon } from '../assets/icons/users.svg';

type SetlistProps = {
  notification: boolean;
  setname: string;
  version: number;
  dateModified: string;
  tracks: number;
  users: number;
};

const Setlist: FC<SetlistProps> = ({
  notification,
  setname,
  version,
  dateModified,
  tracks,
  users,
}: SetlistProps) => {
  return (
    <div className="relative">
      {notification && <div className="notify"></div>}
      <div className="tile">
        <ThreeDots className="threedots" />
        <h1 className="pt-8 text-3xl font-medium">{setname}</h1>
        <p className="subtitle">Version</p>
        <h3 className="pb-12 font-medium">{version}</h3>
        <section className="flex">
          <div className="flex mr-4">
            <div className="bg-imag w-px h-12 mr-2"></div>

            <div>
              <p className="subtitle">Date Modified</p>
              <h4 className="font-medium">{dateModified}</h4>
            </div>
          </div>
          <div className="flex">
            <div className="bg-media w-px h-12 mr-2"></div>
            <div>
              <p className="subtitle">Tracks</p>
              <h4 className="font-medium">{tracks}</h4>
            </div>
          </div>
        </section>
        <div className="flex items-center mt-4">
          <div>
            <UsersIcon className="w-6 h-6 mr-2" />
          </div>
          <p className="font-medium">{users}</p>
        </div>
      </div>
    </div>
  );
};
export default Setlist;
