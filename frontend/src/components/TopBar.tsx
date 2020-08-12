import React from 'react'
import {FC} from 'react';
import Searchbar from './search';
import Avatar from './AvatarIcon';
import {ReactComponent as LogoutICon} from '../assets/icons/log-out.svg';
import {ReactComponent as BellIcon} from '../assets/icons/bell.svg';


const TopBar: FC = () => {
    return (
        <header className="pr-12 pt-2 h-24 bg-white">
                <div className="flex float-right items-center">
                    <h3>Hayden's Dashboard</h3>
                    <Searchbar/>
                    <Avatar/>
                    <BellIcon/>
                    <LogoutICon/>
                </div>
            </header>
    
    )

}
export default TopBar

