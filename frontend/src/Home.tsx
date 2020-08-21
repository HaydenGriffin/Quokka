import React, { Component } from 'react';
import Button from './components/Button';
import Title from './components/PageTitleHeader';
import Tile from './components/ProjectTile';
import { Api } from './api/api';
import { ReactComponent as ArtistIcon } from './assets/icons/mic-thicc.svg';
import ProjectDialog from './components/ProjectDialog';
import axios from 'axios';

const api = new Api(
  'https://8a03fs0g30.execute-api.eu-west-2.amazonaws.com/dev'
);

export default class Home extends Component {
   const [showProjectDialog, setShowDialog] = useState(false);	
	 const openProjectDialog = () => setShowDialog(true);
    
  state = {
    artists: [],
  };

  constructor(props: any) {
    super(props);
  }

  async componentDidMount() {
    try {
      const response = await api.getArtists('Matt');
      this.setState({ artists: response.data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <ProjectDialog isOpen={showProjectDialog} setShowDialog={setShowDialog} />
      <div className="pl-32">
        <Title title="Artists">
          <ArtistIcon className="w-12 h-12 mr-12" />	
	          <Button onClick={openProjectDialog}>Create Artist</Button>
        </Title>
        <div className="grid grid-cols-6 pt-32 col-gap-2 row-gap-12">
          {this.state.artists.map((artist: any) => (
            <Tile
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
    );
  }
