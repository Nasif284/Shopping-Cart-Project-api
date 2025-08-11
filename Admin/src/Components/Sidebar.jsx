import { Button } from '@mui/material';
import React, { useState } from 'react'
import { RxDashboard } from "react-icons/rx";
import { FaRegImages } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { RiProductHuntLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdImages } from "react-icons/io";
import { RiCouponLine } from "react-icons/ri";
import { SiBloglovin } from "react-icons/si";
import { IoLogOutOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from "react-collapse";
import { FaAngleUp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const [collIndex,setCollIndex] = useState(null)
  const openCollapse = (index) => {
    if (index === collIndex) {
      setCollIndex(null)
    } else {
      setCollIndex(index)
    }
  }
  return (

      <div className="sidebar fixed top-0 left-0 w-[18%] h-full bg-white border-r border-[rgba(0,0,0,0.1)] py-2 px-2">
        <div className="  w-full flex items-center justify-center py-2">
          <h1 className="text-[25px] text-center font-[600] text-[#ff5252]">Shopping Cart</h1>
        </div>
        <ul className="pl-4 mt-4">
          <li>
            <Link>
              <Button className="!w-full !items-center !py-2 !capitalize !justify-start !flex !gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[500]">
                <RxDashboard className="!text-[18px]" />
                <span>Dashboard</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link>
              <Button onClick={() => openCollapse(1)} className="!w-full !items-center !py-2 !capitalize !justify-start !flex !gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[500]">
                <FaRegImages className="!text-[18px]" />
                <span>Home Slides</span>
                {collIndex == 1 ? <FaAngleUp className="ml-auto" /> : <FaAngleDown className="ml-auto" />}
              </Button>
            </Link>
            <Collapse isOpened={collIndex === 1}>
              <ul className="w-full ">
                <li className="w-full ">
                  <Link>
                    <Button className="!text-[rgba(0,0,0,0.8)] !flex !gap-3 !items-center !pl-9 !text-[13px] !font-[500] !capitalize !justify-start !w-full">
                      <span className="block h-[5px] w-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span> Home Banners List
                    </Button>
                  </Link>
                </li>
                <li className="w-full ">
                  <Link>
                    <Button className="!text-[rgba(0,0,0,0.8)] !flex !gap-3 !items-center !pl-9 !text-[13px] !font-[500] !capitalize !justify-start !w-full">
                      <span className="block h-[5px] w-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span> Add Home Banner Slide
                    </Button>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>

          <li>
            <Link>
              <Button className="!w-full !items-center !py-2 !capitalize !justify-start !flex !gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[500]">
                <MdOutlineCategory className="!text-[18px]" />
                <span>Category</span>
                <FaAngleDown className="ml-auto" />
              </Button>
            </Link>
          </li>
          <li>
            <Link>
              <Button className="!w-full !items-center !py-2 !capitalize !justify-start !flex !gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[500]">
                <RiProductHuntLine className="!text-[18px]" />
                <span>Products</span>
                <FaAngleDown className="ml-auto" />
              </Button>
            </Link>
          </li>
          <li>
            <Link>
              <Button className="!w-full !items-center !py-2 !capitalize !justify-start !flex !gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[500]">
                <FiUsers className="!text-[18px]" />
                <span>Users</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link>
              <Button className="!w-full !items-center !py-2 !capitalize !justify-start !flex !gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[500]">
                <IoBagCheckOutline className="!text-[18px]" />
                <span>Orders</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link>
              <Button className="!w-full !items-center !py-2 !capitalize !justify-start !flex !gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[500]">
                <IoMdImages className="!text-[18px]" />
                <span>Banners</span>
                <FaAngleDown className="ml-auto" />
              </Button>
            </Link>
          </li>
          <li>
            <Link>
              <Button className="!w-full !items-center !py-2 !capitalize !justify-start !flex !gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[500]">
                <RiCouponLine className="!text-[18px]" />
                <span>Coupon</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link>
              <Button className="!w-full !items-center !py-2 !capitalize !justify-start !flex !gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[500]">
                <SiBloglovin className="!text-[18px]" />
                <span>Blogs</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link>
              <Button className="!w-full !items-center !py-2 !capitalize !justify-start !flex !gap-3 !text-[15px] !text-[rgba(0,0,0,0.8)] !font-[500]">
                <IoLogOutOutline className="!text-[18px]" />
                <span>Logout</span>
              </Button>
            </Link>
          </li>
        </ul>
      </div>

  );
}

export default Sidebar