import React from 'react';
import DashboardTile from './components/DashboardTile';
import ActivityPanel from './components/ActivityPanel';

export default function Dashboard() {
  return (
    <>
      <div className="flex">
        <div className="pl-32 mt-10 w-full">
          <h1 className="text-5xl font-bold mb-5">Hi Matt!</h1>
          <p className="text-xl font-regular mb-5">
            Your recent tours{'  '}
            <a href="#" className="underline text-gray-600">
              view all
            </a>
          </p>
          <DashboardTile
            notification={false}
            artist={'Ed Sheeran'}
            tour={'Divide'}
            setlist={'European Arenas'}
            sets={3}
            tracks={12}
            tourAdmin={'Matt Cromwell'}
          />
          <DashboardTile
            notification={false}
            artist={'Ed Sheeran'}
            tour={'Divide'}
            setlist={'European Arenas'}
            sets={3}
            tracks={12}
            tourAdmin={'Matt Cromwell'}
          />
        </div>
        <ActivityPanel />
      </div>
    </>
  );
}