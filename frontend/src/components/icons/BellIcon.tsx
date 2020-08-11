import React, { PureComponent } from 'react'
import BellLogo from '../../assets/icons/bell.svg'

export default class BellIcon extends PureComponent {
    render() {
        return (
            <img src={BellLogo} alt="" width="32px" height="32px"/>
        )
    }
}
