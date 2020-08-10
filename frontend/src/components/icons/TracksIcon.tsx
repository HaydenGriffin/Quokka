import React, { Component } from 'react'
import TrackIcon from '../../assets/icons/icons8-music-record-50.png'

export default class TracksIcon extends Component {
    render() {
        return (
            <img src={TrackIcon} alt="" width="32px" height="32px" className="icon"/>
        )
    }
}
