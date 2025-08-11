import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Rating from "@mui/material/Rating";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import Tooltip from "@mui/material/Tooltip";
import { ProductContext } from '../App';

const ProductCard = ({ image }) => {
  const context = useContext(ProductContext);
  return (
    <div className="productCard rounded-md border border-[#d8d8d8] overflow-hidden shadow-md">
      <div className="imgWrapper w-[100%] group overflow-hidden rounded-t-md relative transition-all">
        <Link>
          <div className="image overflow-hidden">
            <img src={image} alt="" className="w-full max-h-[220px]" />
            <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" className="w-full absolute top-[0] left-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] bg-primary text-white z-50 rounded-lg p-1 text-[10px] font-[500]">10%</span>
        <div className="actions duration-300 transition-all absolute group-hover:top-[10px] right-[15px] top-[-200px] flex-col flex z-50 items-center gap-2">
          <Tooltip title={"zoom"} placement="left">
            <Button onClick={() => context.setOpen(true)} className="!w-[35px] !text-[18px]  !h-[35px] !min-w-[35px] !bg-white !rounded-full hover:!bg-primary !text-black hover:!text-white transition-all">
              <MdOutlineZoomOutMap />
            </Button>
          </Tooltip>
          <Tooltip title={"Add to Wish list"} placement="left">
            <Button className="!w-[35px] !text-[18px] !h-[35px] !min-w-[35px] !bg-white !rounded-full hover:!bg-primary !text-black hover:!text-white transition-all">
              <FaRegHeart />
            </Button>
          </Tooltip>
          <Tooltip title={"Add to Compare"} placement="left">
            <Button className="!w-[35px] !text-[18px] !h-[35px] !min-w-[35px] !bg-white !rounded-full hover:!bg-primary !text-black hover:!text-white transition-all">
              <IoGitCompareOutline />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="product-info px-3 py-5">
        <h6 className="text-[13px]">
          <Link className="link transition-all">kasee</Link>
        </h6>
        <h3 className="text-[14px] leading-[18px] mt-1 font-[500] mb-1">
          <Link className="link transition-all">Embroidered Satin Saree with black and white </Link>
        </h3>
        <Rating name="size-small" defaultValue={2} size="small" readOnly />
        <div className="price-box flex items-center gap-4">
          <span className="line-through text-gray-500 font-[500] text-[15px]">$120</span>
          <span className="text-primary font-[600] text-[15px] ">$100</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard