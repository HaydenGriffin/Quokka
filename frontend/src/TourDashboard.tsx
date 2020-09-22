import React from 'react';
import {
  PrimaryButton,
  PageTitleHeader,
  TrackTile,
  TourHeader,
  SetlistItemTour,
} from './components/index';
import { TracksIcon } from './assets/icons/index';

export default function TourDash() {
  return (
    <div>
      <TourHeader title="Divide" setlist="Ed Sheeran" />
      <div className="pl-32 flex">
        <div className="w-2/3">
          <PageTitleHeader title="Tracks">
            <TracksIcon className="w-12 h-12 mr-12" />
            <PrimaryButton>New Track</PrimaryButton>
          </PageTitleHeader>
          <div className="grid grid-cols-6 pt-16 col-gap-2 row-gap-12">
            <TrackTile
              notification={true}
              trackname="Sing"
              sections={4}
              layers={12}
              media={3}
              notch={4}
              imag={2}
              assigned="Matt Cromwell"
            />
            <TrackTile
              notification={false}
              trackname="Bloodstream"
              sections={4}
              layers={12}
              media={3}
              notch={4}
              imag={2}
              assigned="Hayden Griffin"
            />
          </div>
        </div>
        <div className="w-px h-screen bg-accent mx-5 mt-5"></div>
        <div className="text-center">
          <h1 className="text-6xl font-bold mr-3">Setlists</h1>
          <SetlistItemTour
            SetlistStyle="setlist-inactive"
            SetlistName="Arena tour"
            version={3}
            date={24052019}
          />
          <SetlistItemTour
            SetlistStyle="setlist-active"
            SetlistName="Stadium tour"
            version={3}
            date={24052019}
          />
          <SetlistItemTour
            SetlistStyle="setlist-inactive"
            SetlistName="Europe tour"
            version={3}
            date={24052017}
          />
        </div>
      </div>
    </div>
  );
}
