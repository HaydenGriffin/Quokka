import React, { Component } from 'react'
import {ReactComponent as HomeIcon} from '../assets/icons/home.svg';
import {ReactComponent as SetlistIcon} from '../assets/icons/list.svg';
import TrackIcon from './icons/TracksIcon'
import ArtistIcon from './icons/ArtistIcon'

const IconClassName = 'icon';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <HomeIcon className={IconClassName}/>
                <SetlistIcon className={IconClassName}/>
                <TrackIcon></TrackIcon>
                <ArtistIcon></ArtistIcon>

            </div>

        )
    }
}
