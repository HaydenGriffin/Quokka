import React, { useState } from 'react';
import Button from './components/Button';
import Title from './components/PageTitleHeader';
import SetlistTile from './components/SetlistTile';
import { ReactComponent as SetlistIcon } from './assets/icons/list.svg';
import SetlistHeader from './components/SetlistHeader';
import SetlistDialog from './components/SetlistDialog';

export default function Setlist() {
  const [showProjectDialog, setShowDialog] = useState(false);
  const openProjectDialog = () => setShowDialog(true);

  return (
    <>
      <SetlistDialog isOpen={showProjectDialog} setShowDialog={setShowDialog} />
      <div>
        <SetlistHeader title="Ed Sheeran" setlist="Divide 2019" />
        <div className="pl-32">
          <Title title="Setlist">
            <SetlistIcon className="w-12 h-12 mr-12" />
            <Button onClick={openProjectDialog}>Create Setlist</Button>
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
              setname="Glasto 2017"
              version={4}
              dateModified="15th April 2017"
              tracks={24}
              users={3}
            />
          </div>
        </div>
      </div>
    </>
  );
}
