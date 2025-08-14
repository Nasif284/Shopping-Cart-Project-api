import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { UploadBox } from "../../Components/Admin";
import { IoIosClose } from "react-icons/io";

const AddSubCategory = () => {
  const [image, setImage] = useState();
     const handleImageUpload = (file) => {
         setImage(URL.createObjectURL(file[0]))
    }
      const [image2, setImage2] = useState();
      const handleImageUpload2 = (file) => {
        setImage2(URL.createObjectURL(file[0]));
      };
     return (
       <div className="my-4 w-full flex gap-10 shadow-md sm:rounded-lg bg-white p-5">
         <div className="w-[50%]">
           <h2 className="text-[18px] font-[600]">Add Sub Category</h2>
           <form className="mt-5" action="">
             <div className="flex gap-3">
               <TextField id="outlined-basic" label="Category Name" variant="outlined" className="w-full" />
             </div>
             {image && (
               <div className=" mt-5  flex flex-col gap-3 justify-center relative items-center bg-gray-100 hover:bg-gray-200  w-[25%] rounded-md  border-dashed border-1 border-[rgba(0,0,0,0.2)] h-[120px]">
                 <span className="w-[20px] h-[20px] bg-red-500 absolute !text-[19px] text-white rounded-full -top-[8px] -right-[8px] flex items-center justify-center cursor-pointer">
                   <IoIosClose />
                 </span>
                 <img src={image} className="w-full h-full object-cover rounded-md" alt="" />
               </div>
             )}
             <UploadBox handleImageUpload={handleImageUpload} sub={true} />
             <Button className="!flex w-full !bg-primary !text-white !font-[600] !capitalize !px-5 !gap-3 !mt-4">Add Product</Button>
           </form>
         </div>
         <div className="w-[50%]">
           <h2 className="text-[18px] font-[600]">Add Third Level Category</h2>
           <form className="mt-5" action="">
             <div className="flex gap-3">
               <TextField id="outlined-basic" label="Category Name" variant="outlined" className="w-full" />
             </div>
             {image2 && (
               <div className=" mt-5  flex flex-col gap-3 justify-center relative items-center bg-gray-100 hover:bg-gray-200  w-[25%] rounded-md  border-dashed border-1 border-[rgba(0,0,0,0.2)] h-[120px]">
                 <span className="w-[20px] h-[20px] bg-red-500 absolute !text-[19px] text-white rounded-full -top-[8px] -right-[8px] flex items-center justify-center cursor-pointer">
                   <IoIosClose />
                 </span>
                 <img src={image2} className="w-full h-full object-cover rounded-md" alt="" />
               </div>
             )}
             <UploadBox handleImageUpload={handleImageUpload2} sub={true} />
             <Button className="!flex w-full !bg-primary !text-white !font-[600] !capitalize !px-5 !gap-3 !mt-4">Add Product</Button>
           </form>
         </div>
       </div>
     );
};

export default AddSubCategory;
