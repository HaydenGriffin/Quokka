import React, { useState } from 'react';
import Button from './components/Button';
import Title from './components/PageTitleHeader';
import Tile from './components/ProjectTile';
import { ReactComponent as ArtistIcon } from './assets/icons/mic-thicc.svg';
import ProjectDialog from './components/ProjectDialog';
export default function Home() {
  const [showProjectDialog, setShowDialog] = useState(false);
  const openProjectDialog = () => setShowDialog(true);

  return (
    <>
      <ProjectDialog isOpen={showProjectDialog} setShowDialog={setShowDialog} />
      <div className="pl-32">
        <Title title="Artists">
          <ArtistIcon className="w-12 h-12 mr-12" />
          <Button onClick={openProjectDialog}>Create Artist</Button>
        </Title>
        <div className="grid grid-cols-6 pt-4 col-gap-2 row-gap-12">
          <Tile
            notification={true}
            artist="Ed Sheeran"
            set="Live Set"
            sets={66}
            tracks={24}
            users={3}
          />
          <Tile
            notification={false}
            artist="Taylor swift"
            set="Redemption"
            sets={4}
            tracks={32}
            users={6}
          />
        </div>
      </div>
    </>
  );
}
