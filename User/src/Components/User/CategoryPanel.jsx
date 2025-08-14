import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { IoMdClose } from "react-icons/io";
import Button from "@mui/material/Button";
import { FiPlusSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMinusSquare } from "react-icons/fi";
const CategoryPanel = ({ toggleFunc }) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [secIndex, setSecIndex] = useState(null);
  function toggle(index) {
    if (index === submenuIndex) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  }
  function toggleSec(index) {
    if (index === secIndex) {
      setSecIndex(null);
    } else {
      setSecIndex(index);
    }
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="catPanel">
      <div className="p-3 flex items-center justify-between text-[16px] font-[500]">
        <h1>Shop by categories</h1>
        <IoMdClose onClick={() => toggleFunc(false)} className="text-[22px]" />
      </div>
      <Divider />
      <div className="scroll">
        <ul className="w-full relative first-level">
          <li className="flex items-center pr-5 flex-col">
            <div className="flex items-center w-full">
              <Link className="w-full">
                <Button className="w-full !justify-start !px-3 !text-black ">Fashion</Button>
              </Link>
              {submenuIndex === 1 ? <FiMinusSquare className="cursor-pointer" onClick={() => toggle(1)} /> : <FiPlusSquare className="cursor-pointer" onClick={() => toggle(1)} />}
            </div>
            {submenuIndex === 1 && (
              <ul className="sec-level w-full pl-4">
                <li className="flex items-center flex-col">
                  <div className="flex items-center w-full ">
                    <Link className="w-full">
                      <Button className="w-full !justify-start !px-3 !text-black ">Fashion</Button>
                    </Link>
                    {secIndex === 1 ? <FiMinusSquare className="cursor-pointer" onClick={() => toggleSec(1)} /> : <FiPlusSquare className="cursor-pointer" onClick={() => toggleSec(1)} />}
                  </div>
                  {secIndex === 1 && (
                    <ul className="third-level w-full pl-4">
                      <li className="pl-5">
                        <Link className="w-full !justify-start !px-3 flex link mb-2 ">Fashion</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
        <ul className="w-full relative first-level">
          <li className="flex items-center pr-5 flex-col">
            <div className="flex items-center w-full">
              <Link className="w-full">
                <Button className="w-full !justify-start !px-3 !text-black ">Fashion</Button>
              </Link>
              {submenuIndex === 2 ? <FiMinusSquare className="cursor-pointer" onClick={() => toggle(2)} /> : <FiPlusSquare className="cursor-pointer" onClick={() => toggle(2)} />}
            </div>
            {submenuIndex === 2 && (
              <ul className="sec-level w-full pl-4">
                <li className="flex items-center flex-col">
                  <div className="flex items-center w-full ">
                    <Link className="w-full">
                      <Button className="w-full !justify-start !px-3 !text-black ">Fashion</Button>
                    </Link>
                    {secIndex === 2 ? <FiMinusSquare className="cursor-pointer" onClick={() => toggleSec(2)} /> : <FiPlusSquare className="cursor-pointer" onClick={() => toggleSec(2)} />}
                  </div>
                  {secIndex === 2 && (
                    <ul className="third-level w-full pl-4">
                      <li className="pl-5">
                        <Link className="w-full !justify-start !px-3 flex link mb-2 ">Fashion</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );
  return (
    <div>
      <Drawer open={open} onClose={() => toggleFunc(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
