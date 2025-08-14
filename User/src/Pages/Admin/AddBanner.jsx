import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { UploadBox } from "../../Components/Admin";
import { IoIosClose } from "react-icons/io";
const AddBanner = () => {
    const [age, setAge] = useState("");
       const handleChange = (event) => {
         setAge(event.target.value);
       };

  const [image, setImage] = useState();
  const handleImageUpload = (file) => {
    setImage(URL.createObjectURL(file[0]));
  };
  return (
    <div className="my-4 w-full shadow-md sm:rounded-lg bg-white p-5">
      <h2 className="text-[18px] font-[600]">Add Banner</h2>
      <form className="mt-5" action="">
        <div className="flex gap-3">
          <TextField id="outlined-basic" label="Description" variant="outlined" className="w-full" />
          <TextField id="outlined-basic" label="Link To" variant="outlined" className="w-full" />
        </div>
        <div className="w-[50%] pr-2">
          <FormControl className="w-full !mt-3 ">
            <InputLabel id="demo-simple-select-label">Section</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Section" onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        {image && (
          <div className=" mt-5  flex flex-col gap-3 justify-center relative items-center bg-gray-100 hover:bg-gray-200  w-[15%] rounded-md  border-dashed border-1 border-[rgba(0,0,0,0.2)] h-[120px]">
            <span className="w-[20px] h-[20px] bg-red-500 absolute !text-[19px] text-white rounded-full -top-[8px] -right-[8px] flex items-center justify-center cursor-pointer">
              <IoIosClose />
            </span>
            <img src={image} className="w-full h-full object-cover rounded-md" alt="" />
          </div>
        )}

        <UploadBox handleImageUpload={handleImageUpload} />
        <Button className="!flex w-full !bg-primary !text-white !font-[600] !capitalize !px-5 !gap-3 !mt-4">Add Product</Button>
      </form>
    </div>
  );
};

export default AddBanner;
