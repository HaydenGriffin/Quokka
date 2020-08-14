import React from 'react';
import Button from './components/Button';
import Title from './components/PageTitleHeader';
import TrackTile from './components/TracksTile';
import { ReactComponent as TracksIcon } from './assets/icons/record-thicc.svg';
import Artistheader from './components/ArtistHeader';

export default function Tracks() {
  return (
    <div>
      <Artistheader
        title="Ed Sheeran"
        setlist="Divide 2019"
        pagename="Tracks"
        pageinfo="This is where you can create tracks"
      />
      <div className="pl-32">
        <Title title="Tracks">
          <TracksIcon className="w-12 h-12 mr-12" />
          <Button>Create Track</Button>
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
    </div>
  );
}
