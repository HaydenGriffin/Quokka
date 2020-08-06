import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-wrap fixed w-full bg-white border-b-4 border-gray-100 items-center justify-between h-16">
      <div className="flex flex-row items-center justify-between">
        <span className="font-bold text-xl mx-2">Quokka</span>
      </div>
      <div className="flex justify-end flex-row px-2 py-4"></div>
    </nav>
  );
};

export default Navigation;
