import React from 'react';
import Button from './components/Button';
import Title from './components/PageTitleHeader';
import TrackTile from './components/TracksTile';
import { ReactComponent as TracksIcon } from './assets/icons/record-thicc.svg';
import TourHeader from './components/TourHeader';
import SetlistitemTour from './components/SetlistItemTour';

export default function TourDash() {
  return (
    <div>
      <TourHeader title="Divide" setlist="Ed Sheeran" />
      <div className="pl-32 flex">
        <div className="w-4/5">
          <Title title="Tracks">
            <TracksIcon className="w-12 h-12 mr-12" />
            <Button>New Track</Button>
          </Title>
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
        <div className="w-px h-screen bg-gray-700"></div>
        <div>
          <h1>Setlists</h1>
          <SetlistitemTour
            SetlistStyle="setlist-inactive"
            Setlistname="Arena tour"
            version={3}
            date={24052019}
          />
          <SetlistitemTour
            SetlistStyle="setlist-active"
            Setlistname="Stadium tour"
            version={3}
            date={24052019}
          />
          <SetlistitemTour
            SetlistStyle="setlist-inactive"
            Setlistname="Europe tour"
            version={3}
            date={24052017}
          />
        </div>
      </div>
    </div>
  );
}
