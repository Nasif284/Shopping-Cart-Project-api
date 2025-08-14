import React from 'react'
import { IoMdImages } from "react-icons/io";

const UploadBox = ({ handleImageUpload,multiple,sub }) => {
    const onchange = (e) =>{
        handleImageUpload(e.target.files)
    }
  return (
    <div className={`p-3 mt-5  flex flex-col gap-3 justify-center relative items-center bg-gray-100 hover:bg-gray-200 cursor-pointer ${sub ? "w-[25%]" : "w-[15%]"} rounded-md overflow-hidden border-dashed border-1 border-[rgba(0,0,0,0.2)] h-[120px]`}>
      <h4 className={`!font-[400] ${sub && "text-[14px]"}  !text-center`}>Image Upload</h4>
      <IoMdImages className="!text-[40px] text-[rgba(0,0,0,0.4)]" />
      <input type="file" onChange={onchange} className="absolute top-0 right-0 w-full h-full opacity-0 cursor-pointer" multiple={multiple} />
    </div>
  );
};

export default UploadBox