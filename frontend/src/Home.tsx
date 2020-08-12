import React from 'react';
import Projectbtn from './components/Button';
import Title from './components/PageTitleHeader';
import Tile from './components/ProjectTile';

export default function Home() {
  return (
    <div className="pl-32">
      <Title/>
      <Projectbtn/>
      <div className="grid grid-cols-6 pt-32 col-gap-2 row-gap-12">
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      </div>
    </div>
  );
}
