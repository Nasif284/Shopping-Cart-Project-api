import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaAngleDown } from "react-icons/fa6";
import Rating from "@mui/material/Rating";
import { CartQtyBox } from "../Components";
const CartItem = () => {
      const [sizeAnchorEl, setSizeAnchorEl] = React.useState(null);
      const [selectedSize, setSElectedSize] = useState("S");
      const openSize = Boolean(sizeAnchorEl);
      const handleClickSize = (event) => {
        setSizeAnchorEl(event.currentTarget);
      };
      const handleCloseSize = (size) => {
        setSizeAnchorEl(null);
        if (size !== null) {
          setSElectedSize(size);
        }
      };
  return (
    <div className="cartItem w-full mb-3 pb-5 border-b border-[rgba(0,0,0,0.1)] flex items-center gap-4 relative">
      <IoMdClose className="absolute top-[5px] right-[15px] cursor-pointer text-[22px] link transition-all" />
      <div className="img w-[15%] rounded-md overflow-hidden">
        <Link>
          <img className="w-full" src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" alt="" />
        </Link>
      </div>
      <div className="w-[85%]">
        <span className="text-[13px]">Rare Rabbit</span>
        <Link className="link">
          <h3 className="text-[15px] ">image image image Men Alias-N Regular Fit Spread Collar Shirt</h3>
        </Link>
        <Rating className="mt-2" name="size-small" defaultValue={2} size="small" readOnly />
        <div className="flex items-center gap-4 mt-2">
          <div>
            <span onClick={handleClickSize} className="flex gap-2 items-center justify-center bg-[#f1f1f1] text-[11px] rounded-md py-1 px-2 font-[600] cursor-pointer">
              Size: {selectedSize} <FaAngleDown />
            </span>
            <Menu
              id="basic-menu"
              anchorEl={sizeAnchorEl}
              open={openSize}
              onClose={() => setSizeAnchorEl(null)}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
              className="sizeMenu"
            >
              <MenuItem onClick={() => handleCloseSize("S")}>S</MenuItem>
              <MenuItem onClick={() => handleCloseSize("M")}>M</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XL")}>Xl</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XXL")}>XXl</MenuItem>
            </Menu>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <span className="text-[12px] font-[500]">Quantity :</span>
              <div className="cartQtyBoxWrapper w-[50px] h-[23px] flex">
                <CartQtyBox />
              </div>
            </div>
          </div>
        </div>
        <div className="price-box flex items-center mt-2 gap-4">
          <span className="text-primary font-[600] text-[14px] ">$100</span>
          <span className="line-through text-gray-500 font-[500] text-[14px]">$120</span>
          <span className="text-primary font-[600] text-[14px] ">55% OFF</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem