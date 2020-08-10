import React, { Component } from 'react'
import HomeIcon from './icons/HomeIcon'
import ArtistIcon from './icons/ArtistIcon'
import TracksIcon from './icons/TracksIcon'
import SetlistIcon from './icons/SetlistIcon'

export default class Header extends Component {
    render() {
        return (
            <div>
                <HomeIcon/>
                <ArtistIcon/>
                <TracksIcon/>
                <SetlistIcon/>
            </div>

        )
    }
}
