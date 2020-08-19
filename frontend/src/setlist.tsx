import React from 'react';
import Button from './components/Button';
import Title from './components/PageTitleHeader';
import SetlistTile from './components/SetlistTile';
import { ReactComponent as TracksIcon } from './assets/icons/record-thicc.svg';
import ArtistHeader from './components/ArtistHeader';

export default function Tracks() {
  return (
    <div>
      <ArtistHeader
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
          <SetlistTile
            notification={true}
            setname="Divide 2019"
            version={4}
            dateModified="24 July 2020"
            tracks={24}
            users={3}
          />
          <SetlistTile
            notification={false}
            setname="Glastonbury 2017"
            version={4}
            dateModified="15th April 2017"
            tracks={24}
            users={3}
          />
        </div>
      </div>
    </div>
  );
}
