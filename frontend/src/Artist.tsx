import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  PrimaryButton,
  PageTitleHeader,
  ProjectTile,
  ProjectDialog,
} from './components/index';
import * as api from './api/api';
import { ArtistIcon } from './assets/icons/index';

export default function Artist() {
  const [showProjectDialog, setShowDialog] = useState(false);
  const [artists, setArtists] = useState([]);
  const openProjectDialog = () => setShowDialog(true);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchDataAsync = async () => {
      const accessToken = await getAccessTokenSilently();
      const result = await api.artist.find(accessToken);
      setArtists(result.data);
    };
    fetchDataAsync();
  }, []);

  return (
    <>
      <ProjectDialog isOpen={showProjectDialog} setShowDialog={setShowDialog} />
      <div className="pl-32">
        <PageTitleHeader title="Artists">
          <ArtistIcon className="w-12 h-12 mr-12" />
          <PrimaryButton onClick={openProjectDialog}>
            Create Artist
          </PrimaryButton>
        </PageTitleHeader>
        <div className="grid grid-cols-6 pt-32 col-gap-2 row-gap-12">
          {artists.map((artist: any) => (
            <ProjectTile
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
