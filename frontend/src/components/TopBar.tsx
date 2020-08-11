import React, { PureComponent } from 'react'
import Searchbar from './search'
import Avatar from './AvatarIcon'
import LICO from './icons/LogoutIcon'
import BellIcon from './icons/BellIcon'

export default class TopBar extends PureComponent {
    render() {
        return (
            <header className="pr-12 pt-2 h-24 bg-white">
                <div className="flex float-right items-center">
                    <h3>Hayden's Dashboard</h3>
                    <Searchbar/>
                    <Avatar/>
                    <BellIcon/>
                    <LICO/>
                </div>
            </header>
        )
    }
}
