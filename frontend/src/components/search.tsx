import SearchLogo from '../assets/icons/search.svg';
import React, { FC } from 'react';

const Search: FC = () => {
  return (
    <div className="relative p-5">
      <input
        type="search"
        name="Search"
        id=""
        className="bg-gray-300 rounded-full p-2 pl-10"
        placeholder="Search..."
      />
      <img
        src={SearchLogo}
        className="absolute w-8 top-0 left-2  pl-2 pt-6"
        alt=""
      />
    </div>
  );
};
export default Search;
