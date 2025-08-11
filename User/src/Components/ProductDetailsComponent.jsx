import React, { useState } from 'react'
import { ProductSlider, ProductZoom, QtyBox, Review } from "../Components";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
const ProductDetailsComponent = () => {
        const [selectedSize, setSelectedSize] = useState(0);
  return (
    <>
      <h1 className="text-[22px] font-[600] mb-2">Sheetal prostitute Pink Color Saree with Blouse piece</h1>
      <div className="flex items-center gap-3">
        <span className="text-gray-400 text-[13px]">
          Brand: <span className="font-[500] text-black">House of Chikankari</span>
        </span>
        <Rating name="size-small" defaultValue={2} size="small" readOnly />
        <span className="text-[13px]">Reviews (5)</span>
      </div>
      <div className="price-box flex items-center gap-4 mt-4">
        <span className="line-through text-gray-500 font-[500] text-[20px]">$120</span>
        <span className="text-primary font-[600] text-[20px] ">$100</span>
        <span className="text-[14px]">
          Available in Stock: <span className="text-green-600 font-bold">134 Items</span>
        </span>
      </div>
      <p className="text-[14px] leading-[25px] mt-3 pr-[10px] mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <div className="flex items-center gap-3">
        <span className="text-[16px]">Size:</span>
        <div className="sizes flex items-center gap-1">
          <Button onClick={() => setSelectedSize(0)} className={`${selectedSize === 0 ? "!bg-primary !text-white" : "!text-black"}`}>
            S
          </Button>
          <Button onClick={() => setSelectedSize(1)} className={`${selectedSize === 1 ? "!bg-primary !text-white" : "!text-black"}`}>
            M
          </Button>
          <Button onClick={() => setSelectedSize(2)} className={`${selectedSize === 2 ? "!bg-primary !text-white" : "!text-black"}`}>
            L
          </Button>
          <Button onClick={() => setSelectedSize(3)} className={`${selectedSize === 3 ? "!bg-primary !text-white" : "!text-black"}`}>
            XL
          </Button>
        </div>
      </div>
      <p className="text-[14px] mt-4 !text-[rgba(0,0,0,0.7)]">Free Shipping (Est. Delivery Time 2-3 Days)</p>
      <div className="flex items-center mt-4 gap-4">
        <div className="qtyBoxWrapper w-[70px] h-[40px]">
          <QtyBox />
        </div>
        <Button className="!bg-primary !text-white !text-[13px] !px-3 !py-2 flex gap-2  hover:!bg-[rgba(0,0,0,0.8)] !font-[500]">
          <IoCartOutline className="!text-[19px]" />
          Add To Cart
        </Button>
      </div>
      <div className="flex items-center gap-5 mt-7">
        <span className="flex cursor-pointer font-[500] link text-[13px] items-center gap-2">
          <FaRegHeart className="text-[18px]" />
          Add To Wishlist
        </span>
        <span className="flex link cursor-pointer font-[500] text-[13px] items-center gap-2">
          <IoGitCompareOutline className="text-[18px]" />
          Add To Compare
        </span>
      </div>
    </>
  );
}

export default ProductDetailsComponent