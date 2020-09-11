import React, { FC } from 'react';
import ActivityItem from './ActivityItem';
import { ReactComponent as CloseIcon } from '../assets/icons/x.svg';

const ActivityPanel: FC = () => {
  return (
    <div className="w-1/4 fixed h-screen bg-white z-10 right-0 shadow-2xl text-center mr-12 mt-12 ">
      <h1 className="text-6xl font-bold pb-2">Activity</h1>
      <p>Here’s the most recent activity from other team members.</p>
      <div className="w-1 h-full absolute bg-accent ml-8 mt-20"></div>
      <ActivityItem
        user="Matt Cromwell"
        message="Created new track Sing for Ed Sheeran."
      />
      <ActivityItem
        user="Matt Cromwell"
        message="Updated Shape of you for Ed Sheeran."
      />
      <ActivityItem user="Matt Cromwell" message="Created new Tour: Divide." />
      <ActivityItem
        user="Matt Cromwell"
        message="Created new Artist: Ed Sheeran."
      />
    </div>
  );
};
export default ActivityPanel;
