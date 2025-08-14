import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { UploadBox } from "../../Components/Admin";
import { IoIosClose } from "react-icons/io";
const AddProducts = () => {
  const [age, setAge] = useState("");
    const [images, setImages] = useState([]);
    const handleImageUpload = (files) => {
        const fileArray = Array.from(files).map((file) => (
            URL.createObjectURL(file)
        ));
        setImages((prev)=> [...prev, ...fileArray])
    }
    const handleChange = (event) => {

    setAge(event.target.value);
  };

  return (
    <div className="my-4 w-full shadow-md sm:rounded-lg bg-white p-5">
      <h2 className="text-[18px] font-[600]">Add Products </h2>
      <form className="mt-5" action="">
        <div className="flex gap-3 flex-wrap">
          <TextField id="outlined-basic" label="Product Name" variant="outlined" className="w-full" />
          <TextField id="outlined-multiline-static" label="Multiline" multiline rows={4} className="w-full" />
          <div className="w-full flex justify-between">
            <FormControl className="w-[24%]">
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Category" onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="w-[24%]">
              <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label=">Sub Category" onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className="w-[24%]">
              <InputLabel id="demo-simple-select-label">Third Level Category</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Third Level Category" onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="w-[24%]">
              <InputLabel id="demo-simple-select-label">Size</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Size" onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="w-full flex justify-between">
            <TextField id="outlined-basic" label="Price" variant="outlined" className="w-[24%]" />
            <TextField id="outlined-basic" label="Old Price" variant="outlined" className="w-[24%]" />
            <TextField id="outlined-basic" label="Brand" variant="outlined" className="w-[24%]" />
            <TextField id="outlined-basic" label="Stock" variant="outlined" className="w-[24%]" />
          </div>
          <TextField id="outlined-basic" label="Discount" variant="outlined" className="w-[24%]" />
          <FormControl className="w-[24%]">
            <InputLabel id="demo-simple-select-label">Is Featured</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Is Featured" onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex gap-3">
          {images.length > 0 &&
            images.map((image, i) => (
              <div key={i} className=" mt-5  flex flex-col gap-3 justify-center relative items-center bg-gray-100 hover:bg-gray-200  w-[15%] rounded-md  border-dashed border-1 border-[rgba(0,0,0,0.2)] h-[120px]">
                <span className="w-[20px] h-[20px] bg-red-500 absolute !text-[19px] text-white rounded-full -top-[8px] -right-[8px] flex items-center justify-center cursor-pointer">
                  <IoIosClose />
                </span>
                <img src={image} className="w-full h-full object-cover rounded-md" alt="" />
              </div>
            ))}
        </div>

        <UploadBox handleImageUpload={handleImageUpload} multiple={true} />
        <Button className="!flex w-full !bg-primary !text-white !font-[600] !capitalize !px-5 !gap-3 !mt-4">Add Product</Button>
      </form>
    </div>
  );
};

export default AddProducts;
