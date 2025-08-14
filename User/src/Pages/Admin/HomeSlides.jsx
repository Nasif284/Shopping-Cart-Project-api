import React from 'react'
import { BannerTable } from '../../Components/Admin';
import { FaPlus } from 'react-icons/fa6';
import { Button } from '@mui/material';

const HomeSlides = () => {
  return (
    <div className="my-4 w-full shadow-md sm:rounded-lg bg-white p-5">
      <div className="flex items-center justify-between ">
        <h2 className="text-[18px] font-[600]">Home Slides</h2>
        <div className="flex gap-4">
          <Button className="!flex !bg-blue-500 !text-white !font-[600] !capitalize !px-5 !gap-3 !mt-4">
            <FaPlus />
            Add Home Slides
          </Button>
        </div>
      </div>
      <div className="relative w-full overflow-x-scroll shadow-md sm:rounded-lg">
        <BannerTable />
      </div>
    </div>
  );
}

export default HomeSlides