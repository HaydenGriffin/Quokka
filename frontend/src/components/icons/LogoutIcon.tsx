import React, { PureComponent } from 'react'
import LogoutLogo from '../../assets/icons/log-out.svg'

export default class LogoutIcon extends PureComponent {
    render() {
        return (
            <img src={LogoutLogo} alt="" width="32px" height="32px"/>
        )
    }
}
