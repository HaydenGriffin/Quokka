import React, { FC } from 'react';

type ActivityItemProps = {
  user: string;
  message: string;
};

const ActivityItem: FC<ActivityItemProps> = ({
  user,
  message,
}: ActivityItemProps) => {
  return (
    <>
      <div className="relative flex text-left items-center pl-3">
        <div className="w-12 h-12 bg-accent rounded-full cursor-pointer"></div>
        <div className="bg-white m-6 py-3">
          <h1>{user}</h1>
          <p className="font-medium text-xl">{message}</p>
        </div>
      </div>
    </>
  );
};
export default ActivityItem;
