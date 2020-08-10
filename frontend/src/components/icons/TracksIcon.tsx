import React, { PureComponent } from 'react'
import TrackIcon from '../../assets/icons/icons8-music-record-50.png'

export default class TracksIcon extends PureComponent {
    render() {
        return (
            <img src={TrackIcon} alt="" width="32px" height="32px"/>
        )
    }
}
