import React, { useState } from "react";
import Button from '@mui/material/Button'
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
const Navigation = () => {
    const [toggle,setToggle]=useState(false)
  return (
    <>
      <nav>
        <div className="container flex items-center justify-end gap-5">
          <div className="col_1 w-[20%]">
            <Button className="!text-black gap-2 w-full   " onClick={() => setToggle(!toggle)}>
              <RiMenu2Fill className="text-[18px]" />
              Shop by Categories
              <FaAngleDown className="text-[18px] ml-auto" />
            </Button>
          </div>
          <div className="col_2 w-[60%] flex justify-center">
            <ul className="flex items-center gap-7">
              <li>
                <Link className="link transition text-[14px] font-[500] ">Home</Link>
              </li>
              <li className="relative">
                <Link className="link transition text-[14px] font-[500]">Fashion</Link>
                <div className="submenu absolute top-[120%] left-[-100%] bg-white shadow-md min-w-[150px] opacity-0  transition-all z-1000">
                  <ul className="w-full">
                    <li className="relative">
                      <Link className="w-full">
                        <Button className="!text-black w-full">Men</Button>
                        <div className="submenu absolute top-[0%] left-[100%] bg-white shadow-md min-w-[150px] opacity-0  transition-all">
                          <ul className="w-full">
                            <li>
                              <Link className="w-full">
                                <Button className="!text-black w-full">Men</Button>
                              </Link>
                            </li>
                            <li>
                              <Link className="w-full">
                                <Button className="!text-black w-full">Women</Button>
                              </Link>
                            </li>
                            <li>
                              <Link className="w-full">
                                <Button className="!text-black w-full">Kids</Button>
                              </Link>
                            </li>
                            <li>
                              <Link className="w-full">
                                <Button className="!text-black w-full">Girls</Button>
                              </Link>
                            </li>
                            <li>
                              <Link className="w-full">
                                <Button className="!text-black w-full">Boys</Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="relative">
                      <Link className="w-full">
                        <Button className="!text-black w-full">Women</Button>
                      </Link>
                    </li>
                    <li>
                      <Link className="w-full">
                        <Button className="!text-black w-full">Kids</Button>
                      </Link>
                    </li>
                    <li>
                      <Link className="w-full">
                        <Button className="!text-black w-full">Girls</Button>
                      </Link>
                    </li>
                    <li>
                      <Link className="w-full">
                        <Button className="!text-black w-full">Boys</Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link className="link transition text-[14px] font-[500]">Bags</Link>
              </li>
              <li>
                <Link className="link transition text-[14px] font-[500]">Footwear</Link>
              </li>
              <li>
                <Link className="link transition text-[14px] font-[500]">Beauty</Link>
              </li>
              <li>
                <Link className="link transition text-[14px] font-[500] ">Jewellery</Link>
              </li>
            </ul>
          </div>
          <div className="col_3 w-[20%] flex justify-end items-center gap-2 font-[500]">
            <GoRocket />
            <p className="text-[13px] ">Free International Delivery</p>
          </div>
        </div>
      </nav>
      {toggle && <CategoryPanel toggleFunc={setToggle} toggle={toggle} />}
    </>
  );
};

export default Navigation;
