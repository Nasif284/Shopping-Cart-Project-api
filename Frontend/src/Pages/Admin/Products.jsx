import React from 'react'
import { ProductTable, SearchBox, SelectBox } from '../../Components/Admin';
import { FaPlus } from 'react-icons/fa';
import { Button } from '@mui/material';
import { MdBlock } from "react-icons/md";
const Products = () => {
  return (
    <div className=" my-4 w-full shadow-md sm:rounded-lg bg-white">
      <div className="flex items-center justify-between p-5">
        <h2 className="text-[18px] font-[600]">All Products </h2>
        <div className="flex gap-4">
          <Button className="!flex !bg-red-500 !text-white !font-[600] !capitalize !px-5 !gap-3 !mt-4">
            <MdBlock />
            Block
          </Button>
          <Button className="!flex !bg-blue-500 !text-white !font-[600] !capitalize !px-5 !gap-3 !mt-4">
            <FaPlus />
            Add Products
          </Button>
        </div>
      </div>
      <div className="flex items-center w-full pl-5 gap-5">
        <SelectBox placeholder={"Category"} />
        <SelectBox placeholder={"Sub Category"} />
        <SelectBox placeholder={"Third Level Category"} />
        <SearchBox  />
      </div>
      <div className="relative w-full overflow-x-scroll shadow-md sm:rounded-lg">
        <ProductTable />
      </div>
    </div>
  );
}

export default Products