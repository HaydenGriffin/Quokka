import React, { FC } from 'react';

type ActivityItemProps = {
  user: string;
  project: string;
  message: string;
};

const ActivityItem: FC<ActivityItemProps> = ({
  user,
  project,
  message,
}: ActivityItemProps) => {
  return (
    <div className="relative">
      <div className="bg-white m-6 py-6">
        <h1 className="font-medium text-xl">{user}</h1>
        <h3>{project}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
};
export default ActivityItem;
