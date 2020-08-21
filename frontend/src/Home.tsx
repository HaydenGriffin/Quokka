import React, { Component } from 'react';
import Button from './components/Button';
import Title from './components/PageTitleHeader';
import Tile from './components/ProjectTile';
import { Api } from './api/api';
import axios from 'axios';

const api = new Api(
  'https://8a03fs0g30.execute-api.eu-west-2.amazonaws.com/dev'
);

export default class Home extends Component {
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
      <div className="pl-32">
        <Title title="Artists">
          <Button>Create Artist</Button>
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
}
