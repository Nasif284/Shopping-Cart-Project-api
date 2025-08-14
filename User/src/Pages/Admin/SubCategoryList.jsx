import { Button, Tooltip } from '@mui/material';
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";    
import { MdDeleteOutline, MdOutlineModeEdit } from 'react-icons/md';
const SubCategoryList = () => {
    const [dropdown,setDropdown]= useState(false)
  return (
    <div className=" my-4 w-full shadow-md sm:rounded-lg bg-white">
      <div className="flex items-center justify-between p-5">
        <h2 className="text-[18px] font-[600]">Sub Category List</h2>
      </div>
      <div className="list w-full px-5 pb-5 ">
        <div className="mainCat w-full text-[18px] font-[500] bg-[#f1f1f1] px-4 py-3 flex items-center justify-between rounded-md">
          Fashion
          <Button className="!w-[40px] !h-[40px] !min-w-[40px] !text-black !rounded-full !text-[22px]" onClick={() => setDropdown(!dropdown)}>
            {dropdown ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </div>
        <div>
          {dropdown && (
            <>
              <ul>
                <li className="w-full flex justify-between px-4 py-3 font-[500] ">
                  Women
                  <div className="flex gap-2 !text-[18px] justify-center items-center ">
                    <Tooltip className="cursor-pointer" title="Edit">
                      <MdOutlineModeEdit className="text-[20px]" />
                    </Tooltip>
                    <Tooltip className="cursor-pointer" title="Delete">
                      <MdDeleteOutline className="text-[20px]" />
                    </Tooltip>
                  </div>
                </li>
              </ul>
              <ul>
                <li className="w-full flex justify-between pl-10 pr-4 py-3 font-[500]">
                  Top
                  <div className="flex gap-2 !text-[18px] justify-center items-center ">
                    <Tooltip className="cursor-pointer" title="Edit">
                      <MdOutlineModeEdit className="text-[20px]" />
                    </Tooltip>
                    <Tooltip className="cursor-pointer" title="Delete">
                      <MdDeleteOutline className="text-[20px]" />
                    </Tooltip>
                  </div>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubCategoryList