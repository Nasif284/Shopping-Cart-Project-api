import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Collapse } from "react-collapse";
import Rating from "@mui/material/Rating";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
const ProductSidebar = () => {
  const [isOpenCat, setIsOpenCat] = useState(true);
  const [isOpenAvai, setIsOpenAvai] = useState(true);
  const [isOpenSize, setIsOpenSize] = useState(true);
  return (
    <aside className="sidebar py-5 flex flex-col gap-5">
      <div className="box">
        <h1 className="mb-3 text-[16px] font-[600] flex items-center justify-between cursor-pointer" onClick={() => setIsOpenCat(!isOpenCat)}>
          Shop By Categories {isOpenCat ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h1>
        <Collapse isOpened={isOpenCat}>
          <div className="scroll px-3 w-full relative -left-[10px]">
            <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full" />
            <FormControlLabel control={<Checkbox size="small" />} label="Bags" className="w-full" />
            <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className="w-full" />
            <FormControlLabel control={<Checkbox size="small" />} label="Footwear" className="w-full" />
            <FormControlLabel control={<Checkbox size="small" />} label="Jewelry" className="w-full" />
          </div>
        </Collapse>
      </div>
      <div className="box">
        <h1 className="mb-3 text-[16px] font-[600] flex items-center justify-between cursor-pointer" onClick={() => setIsOpenAvai(!isOpenAvai)}>
          Availability {isOpenAvai ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h1>
        <Collapse isOpened={isOpenAvai}>
          <div className="scroll px-3 w-full relative -left-[10px]">
            <FormControlLabel control={<Checkbox size="small" />} label="Available (17)" className="w-full" />
            <FormControlLabel control={<Checkbox size="small" />} label="In Stock (17)" className="w-full" />
            <FormControlLabel control={<Checkbox size="small" />} label="Not Available (17)" className="w-full" />
          </div>
        </Collapse>
      </div>
      <div className="box">
        <h1 className="mb-3 text-[16px] font-[600] flex items-center justify-between gap-10 cursor-pointer" onClick={() => setIsOpenSize(!isOpenSize)}>
          Size {isOpenSize ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h1>
        <Collapse isOpened={isOpenSize}>
          <div className="scroll px-3 w-full relative -left-[10px]">
            <FormControlLabel control={<Checkbox size="small" />} label="Small (17)" className="w-full" />
            <FormControlLabel control={<Checkbox size="small" />} label="Medium (17)" className="w-full" />
            <FormControlLabel control={<Checkbox size="small" />} label="Large (17)" className="w-full" />
            <FormControlLabel control={<Checkbox size="small" />} label="XL (17)" className="w-full" />
            <FormControlLabel control={<Checkbox size="small" />} label="XXL (17)" className="w-full" />
          </div>
        </Collapse>
      </div>
      <div className="box">
        <h1 className="mb-3 text-[16px] font-[600] flex items-center justify-between gap-10 cursor-pointer" onClick={() => setIsOpenSize(!isOpenSize)}>
          Filter By Price
        </h1>
        <RangeSlider />
        <div className="flex justify-between pb-2 pt-4">
          <p className="text-[14px]">
            From <span className="font-[700]">Rs: 100</span>
          </p>
          <p className="text-[14px]">
            To <span className="font-[700]">Rs: 1500</span>
          </p>
        </div>
      </div>
      <div className="box">
        <h1 className="mb-3 text-[16px] font-[600] flex items-center justify-between gap-10 cursor-pointer" onClick={() => setIsOpenSize(!isOpenSize)}>
          Filter By Rating
        </h1>
        <div className="flex flex-col gap-1">
          <FormControlLabel control={<Checkbox size="small" />} label={<Rating name="size-small" defaultValue={5} size="small" readOnly />} className="w-full" />
          <FormControlLabel control={<Checkbox size="small" />} label={<Rating name="size-small" defaultValue={4} size="small" readOnly />} className="w-full" />
          <FormControlLabel control={<Checkbox size="small" />} label={<Rating name="size-small" defaultValue={3} size="small" readOnly />} className="w-full" />
          <FormControlLabel control={<Checkbox size="small" />} label={<Rating name="size-small" defaultValue={2} size="small" readOnly />} className="w-full" />
          <FormControlLabel control={<Checkbox size="small" />} label={<Rating name="size-small" defaultValue={1} size="small" readOnly />} className="w-full" />
        </div>
      </div>
    </aside>
  );
};

export default ProductSidebar;
