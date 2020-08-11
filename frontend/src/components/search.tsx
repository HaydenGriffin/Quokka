import React, { PureComponent } from 'react';
// import SearchLogo from '../assets/icons/search.svg'

export default class search extends PureComponent {
  render() {
    return <div className="relative p-5">
        <input type="search" name="Search" id="" className="bg-gray-300 rounded-full p-2" placeholder="Search..." />
        {/* <img src={SearchLogo} className="absolute w-6 search-ico top-0 left-0" alt=""/> */}
    </div>
    
  }
}
