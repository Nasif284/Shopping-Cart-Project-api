import React from 'react'
import { IoSearch } from "react-icons/io5";
const SearchBox = () => {
  return (
    <div className="w-full h-[40px] bg-[#f1f1f1] border-1 border-[rgba(0,0,0,0.1)] mb-5 mr-5 rounded-sm relative">
      <IoSearch className='absolute top-[8px] left-[5px] text-[20px] pointer-events-none text-[rgba(0,0,0,0.5)]' />
      <input type="text" placeholder="Search Here..." className="w-full h-full pl-8 bg-transparent p-2 focus:outline-none" />
    </div>
  );
}

export default SearchBox