import React, { FC } from 'react';
import { SearchIcon } from '../assets/icons/index';

const SearchBar: FC = () => {
  return (
    <div className="relative p-5">
      <input
        type="search"
        name="Search"
        id=""
        className="bg-primary rounded-full p-2 pl-10"
        placeholder="Search..."
      />
      <img
        src={SearchIcon}
        className="absolute w-8 top-0 left-2  pl-2 pt-6"
        alt=""
      />
    </div>
  );
};
export default SearchBar;
