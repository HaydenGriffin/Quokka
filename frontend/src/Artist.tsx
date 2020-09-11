import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import Title from './components/PageTitleHeader';
import Tile from './components/ProjectTile';
import * as api from './api/api';
import { ReactComponent as ArtistIcon } from './assets/icons/mic-thicc.svg';
import ProjectDialog from './components/ProjectDialog';
import { useAuth0 } from '@auth0/auth0-react';

export default function Artist() {
  const [showProjectDialog, setShowDialog] = useState(false);
  const [artists, setArtists] = useState([]);
  const openProjectDialog = () => setShowDialog(true);
  const { getAccessTokenSilently } = useAuth0();

  // useEffect(() => {
  //   const fetchDataAsync = async () => {
  //     const accessToken = await getAccessTokenSilently();
  //     const result = await api.artist.find(accessToken);
  //     setArtists(result.data);
  //   };
  //   fetchDataAsync();
  // }, []);

  return (
    <>
      <ProjectDialog isOpen={showProjectDialog} setShowDialog={setShowDialog} />
      <div className="pl-32">
        <Title title="Artists">
          <ArtistIcon className="w-12 h-12 mr-12" />
          <Button onClick={openProjectDialog}>Create Artist</Button>
        </Title>
        <div className="grid grid-cols-6 pt-32 col-gap-2 row-gap-12">
          {artists.map((artist: any) => (
            <Tile
              key={artist.pk}
              notification={true}
              artist={artist.artistName}
              set="Live Set"
              sets={66}
              tracks={24}
              users={3}
            />
          ))}
        </div>
      </div>
    </>
  );
}
