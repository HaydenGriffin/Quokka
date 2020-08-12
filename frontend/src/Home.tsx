import React from 'react';
import Button from './components/Button';
import Title from './components/PageTitleHeader';
import Tile from './components/ProjectTile';

export default function Home() {
  return (
    <div className="pl-32">
      <Title title="Projects">
        <Button>Create Project</Button>
      </Title>
      <div className="grid grid-cols-6 pt-32 col-gap-2 row-gap-12">
        <Tile
          notification={true}
          artist="Ed Sheeran"
          set="Live Set"
          sets={66}
          tracks={24}
          users={3}
        />
      </div>
    </div>
  );
}
