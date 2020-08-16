import React, { FC } from 'react';
import ActivityItem from './ActivityItem';
import { ReactComponent as CloseIco } from '../assets/icons/x.svg';

const ActivityPanel: FC = () => {
  return (
    <div className="w-1/4 fixed h-screen bg-accent z-10 right-0 shadow-2xl text-center hidden">
      <CloseIco className="w-10 right-0 absolute mt-6 mr-6 cursor-pointer " />
      <h1 className="text-6xl font-bold pb-24">Activity</h1>
      <ActivityItem
        user="Matt"
        project="Ed Sheeran"
        message="Created new track Sing."
      />
    </div>
  );
};
export default ActivityPanel;
