import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
const MyListItems = () => {
       return (
         <div className="cartItem w-full mb-2 pb-2 border-b border-[rgba(0,0,0,0.1)] flex items-center gap-4 relative">
           <IoMdClose className="absolute top-[5px] right-[15px] cursor-pointer text-[22px] link transition-all" />
           <div className="img w-[25%] h-[150px] rounded-md overflow-hidden">
             <Link>
               <img className="w-full" src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" alt="" />
             </Link>
           </div>
           <div className="w-[75%] pr-5">
             <span className="text-[11px]">Rare Rabbit</span>
             <Link className="link">
               <h3 className="text-[13px] ">image image image Men Alias-N Regular Fit Spread Collar Shirt</h3>
             </Link>
             <Rating className="mt-1" name="size-small" defaultValue={2} size="small" readOnly />
             <div className="price-box flex items-center mt-1 gap-4">
               <span className="text-primary font-[600] text-[12px] ">$100</span>
               <span className="line-through text-gray-500 font-[500] text-[14px]">$120</span>
               <span className="text-primary font-[600] text-[12px] ">55% OFF</span>
             </div>
             <Button  className="!bg-primary !text-[11px] !mt-3 !rounded-md !text-white w-[150px] !font-[500]">Add to Cart</Button>
           </div>
         </div>
       );
}

export default MyListItems