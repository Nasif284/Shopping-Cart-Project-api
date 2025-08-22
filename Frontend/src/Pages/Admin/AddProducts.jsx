import  { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { UploadBox } from "../../Components/Admin";
import { IoIosClose } from "react-icons/io";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productValidationSchema } from "./utils/productValidation";

const AddProducts = () => {
  const [age, setAge] = useState("");
  const [color, setColor] = useState("#ff0000");
  const [images, setImages] = useState([]);

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode:"onBlur",
    resolver: yupResolver(productValidationSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      subCategory: "",
      thirdCategory: "",
      brand: "",
      variants: [
        {
          size: "",
          price: "",
          oldPrice: "",
          stock: "",
          discount: "",
          color: "#000000",
          isFeatured: false,
          images: [],
        },
      ],
    },
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: "variants",
  });

  const handleImageUpload = (files) => {
    const fileArray = Array.from(files).map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...fileArray]);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const addVariants = () => {
    append({
      size: "",
      price: "",
      oldPrice: "",
      stock: "",
      discount: "",
      color: "#000000",
      isFeatured: false,
      images: [],
    });
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="my-4 w-full shadow-md sm:rounded-lg bg-white p-5">
      <h2 className="text-[18px] font-[600]">Add Products </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5" action="">
        <div className="flex gap-3 flex-wrap">
          <TextField {...register("name")} error={!!errors.name?.message} helperText={errors.name?.message} id="outlined-basic" label="Product Name" variant="outlined" className="w-full" />
          <TextField {...register("description")} error={!!errors.description?.message} helperText={errors.description?.message} id="outlined-multiline-static" label="Multiline" multiline rows={4} className="w-full" />
          <div className="w-full flex justify-between">
            <div className="w-[24%]">
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <FormControl className="w-full">
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select {...field} labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Category" onChange={handleChange}>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
              {errors.category && <p className="text-red-500">{errors.category.message}</p>}
            </div>

            <div className="w-[24%]">
              <Controller
                name="subCategory"
                control={control}
                render={({ field }) => (
                  <FormControl className="w-full">
                    <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>
                    <Select {...field} labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Sub Category" onChange={handleChange}>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
              {errors.subCategory && <p className="text-red-500">{errors.subCategory.message}</p>}
            </div>
            <div className="w-[24%]">
              <Controller
                name="thirdCategory"
                control={control}
                render={({ field }) => (
                  <FormControl className="w-full">
                    <InputLabel id="demo-simple-select-label">Third Level Category</InputLabel>
                    <Select {...field} labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Third Level Category" onChange={handleChange}>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />
              {errors.thirdCategory && <p className="text-red-500">{errors.thirdCategory.message}</p>}
            </div>
            <TextField {...register("brand")} error={!!errors.brand?.message} helperText={errors.brand?.message} id="outlined-basic" label="Brand" variant="outlined" className="w-[24%]" />
          </div>

          {fields.map((field, i) => {
            return (
              <div key={field.id} className="variants-section pt-2 w-full">
                <h2 className="text-[18px] font-[600] py-3 flex justify-between items-center">
                  Add Variants
                  <Button onClick={() => remove(i)} className="!bg-red-500 !text-white !font-[600] !capitalize !px-5 !py-2 !rounded-md">
                    Remove Variant
                  </Button>
                </h2>
                <div className="flex gap-3 flex-wrap w-full">
                  <div className="w-full flex justify-between">
                    <div className="w-[24%]">
                      <Controller
                        name={`variants.${i}.size`}
                        control={control}
                        render={({ field }) => (
                          <FormControl className="w-full">
                            <InputLabel id="demo-simple-select-label">Size</InputLabel>
                            <Select {...field} labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Size" onChange={handleChange}>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        )}
                      />
                      {errors?.variants?.[i]?.size && <p className="text-red-500">{errors.variants[i].size.message}</p>}
                    </div>
                    <TextField {...register(`variants.${i}.price`)} error={!!errors?.variants?.[i]?.price} helperText={errors?.variants?.[i]?.price?.message} label="Price" variant="outlined" className="w-[24%]" />
                    <TextField {...register(`variants.${i}.oldPrice`)}  id="outlined-basic" label="Old Price" variant="outlined" className="w-[24%]" />
                    <TextField {...register(`variants.${i}.stock`)} error={!!errors?.variants?.[i]?.stock} helperText={errors?.variants?.[i]?.stock?.message} id="outlined-basic" label="Stock" variant="outlined" className="w-[24%]" />
                  </div>
                  <TextField {...register(`variants.${i}.discount`)}  id="outlined-basic" label="Discount" variant="outlined" className="w-[24%]" />
                  <div className="w-[24%]">
                    <Controller
                      name={`variants.${i}.size`}
                      control={control}
                      render={({ field }) => (
                        <FormControl className="w-full">
                          <InputLabel id="demo-simple-select-label">Is Featured</InputLabel>
                          <Select {...field} labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Is Featured" onChange={handleChange}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      )}
                    />
                  </div>
                  <div className="w-[24%] ml-[6px] flex items-center justify-between border-1 border-[rgba(0,0,0,0.1)] rounded-sm px-3">
                    <label className="text-sm  text-[17px] text-gray-500">Color</label>
                    <div className="flex items-center gap-3">
                      <TextField
                        {...register(`variants.${i}.color`)}
                        error={!!errors?.variants?.[i]?.color}
                        helperText={errors?.variants?.[i]?.color?.message}
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="w-[60px] h-[40px] p-0 border-none"
                        inputProps={{
                          style: {
                            padding: 0,
                            height: "40px",
                            cursor: "pointer",
                          },
                        }}
                      />
                    </div>
                  </div>
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
              </div>
            );
          })}

          <Button onClick={addVariants} className="!flex !ml-auto w-[25%] !bg-primary !text-white !font-[600] !capitalize !px-5 !gap-3 !mt-4">
            Add Variant
          </Button>
        </div>

        <Button className="!flex w-full !bg-primary !text-white !font-[600] !capitalize !px-5 !gap-3 !mt-4">Add Product</Button>
      </form>
    </div>
  );
};

export default AddProducts;
