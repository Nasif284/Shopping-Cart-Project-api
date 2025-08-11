import Button from '@mui/material/Button';
import React from 'react'
import { BiLogOut } from 'react-icons/bi';
import { FaCloudUploadAlt, FaRegHeart } from 'react-icons/fa';
import { FaRegCircleUser } from 'react-icons/fa6';
import { IoBagCheckOutline, IoLocationOutline, IoWalletOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const UserSidebar = () => {
  return (
    <div className="col1 w-[20%]">
          <div className="card w-full bg-white shadow-md rounded-md ">
              
        <div className="w-full  p-5 flex items-center justify-center flex-col">
          <div className="w-[110px] h-[110px] rounded-full overflow-hidden relative group">
            <img src="https://www.zoho.com/inventory/case-study/images/maxime-loiselle.jpg" className="w-full h-full object-cover " alt="" />
            <div className=" cursor-pointer absolute top-0 left-0 bg-[rgba(0,0,0,0.6)] w-[100%] opacity-0 group-hover:opacity-100 transition-all h-[100%] z-50 flex flex-col items-center justify-center">
              <FaCloudUploadAlt className="!text-white !text-[25px]" />
              <p className="!m-0 text-white !text-[10px] font-[500] ">Change Profile</p>
              <input type="file" className="absolute w-full top-0 left-0 h-full opacity-0 cursor-pointer " />
            </div>
          </div>
          <div className="text-center mt-5">
            <h1 className="text-[16px] leading-3">Muhammad Nasif</h1>
            <p className="!m-0 !text-[13px]">nasifhima@gmail.com</p>
          </div>
        </div>
        <div className="w-full bg-[#f1f1f1]">
          <ul className="pb-5 userTabs">
            <li className="w-full">
              <NavLink to={"/myAccount"}>
                <Button className="!capitalize  !font-[600] !text-[15px] !w-full !text-[rgba(0,0,0,0.8)] !px-5 !justify-start !rounded-none flex items-center gap-2">
                  <FaRegCircleUser className="!text-[17px]" />
                  My account
                </Button>
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink to={"/address"}>
                <Button className="!capitalize !font-[600] !text-[15px] !w-full !text-[rgba(0,0,0,0.8)] !px-5 !justify-start !rounded-none flex items-center gap-2">
                  <IoLocationOutline className="!text-[17px]" />
                  Address
                </Button>
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink to={"/myList"}>
                <Button className="!capitalize !font-[600] !text-[15px] !w-full !text-[rgba(0,0,0,0.8)] !px-5 !justify-start !rounded-none flex items-center gap-2">
                  <FaRegHeart className="!text-[17px]" /> My list
                </Button>
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink to={"/orders"}>
                <Button className="!capitalize !font-[600] !text-[15px] !w-full !text-[rgba(0,0,0,0.8)] !px-5 !justify-start !rounded-none flex items-center gap-2">
                  <IoBagCheckOutline className="!text-[18px]" /> Orders
                </Button>
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink to={"/myWallet"}>
                <Button className="!capitalize !font-[600] !text-[15px] !w-full !text-[rgba(0,0,0,0.8)] !px-5 !justify-start !rounded-none flex items-center gap-2">
                  <IoWalletOutline className="!text-[17px]" />
                  My Wallet
                </Button>
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink to={"/logout"}>
                <Button className="!capitalize !font-[600] !text-[15px] !w-full !text-[rgba(0,0,0,0.8)] !px-5 !justify-start !rounded-none flex items-center gap-2">
                  <BiLogOut className="!text-[17px]" /> Logout
                </Button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserSidebar