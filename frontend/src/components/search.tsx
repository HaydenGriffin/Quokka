// import SearchLogo from '../assets/icons/search.svg'
import React, { FC } from 'react';

const Search: FC = () => {
  return (
    <div className="relative p-5">
      <input
        type="search"
        name="Search"
        id=""
        className="bg-gray-300 rounded-full p-2"
        placeholder="Search..."
      />
      {/* <img src={SearchLogo} className="absolute w-6 search-ico top-0 left-0" alt=""/> */}
    </div>
  );
};
export default Search;
