import React, { Component } from 'react'
import ArtistLogo from '../../assets/icons/icons8-micro-50.png'

export default class ArtistIcon extends Component {
    render() {
        return (
            <img src={ArtistLogo} alt="" width="32px" height="32px" className="icon"/>
        )
    }
}
