import React from 'react';
import GridTiles from './components/gridTemplate';
import Projectbtn from './components/Button';
import Title from './components/PageTitleHeader';

export default function Home() {
  return (
    <div className="pl-32">
      <Title/>
      <Projectbtn/>
      <GridTiles/>
    </div>
  );
}
