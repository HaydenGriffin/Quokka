import React, { Component } from 'react'
import {ReactComponent as HomeIcon} from '../assets/icons/home.svg';
import {ReactComponent as SetlistIcon} from '../assets/icons/list.svg';
import {ReactComponent as TrackIcon} from '../assets/icons/record-thicc.svg';
import {ReactComponent as ArtistIcon} from '../assets/icons/mic-thicc.svg';


const IconClassName = 'icon';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <HomeIcon className={IconClassName}/>
                <ArtistIcon className={IconClassName}></ArtistIcon>
                <TrackIcon className={IconClassName}></TrackIcon>
                <SetlistIcon className={IconClassName}/>
               
            </div>

        )
    }
}
