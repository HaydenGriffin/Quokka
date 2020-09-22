import React from 'react';
import {
  PrimaryButton,
  TrackTile,
  PageTitleHeader,
  ArtistHeader,
} from '../components/index';
import { TracksIcon } from '../assets/icons/index';

export default function Tracks() {
  return (
    <div>
      <ArtistHeader title="Ed Sheeran" setlist="Divide 2019" />
      <div className="pl-32">
        <PageTitleHeader title="Tracks">
          <TracksIcon className="w-12 h-12 mr-12" />
          <PrimaryButton>Create Track</PrimaryButton>
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
    </div>
  );
}
