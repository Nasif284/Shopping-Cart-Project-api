
import { Button, TextField } from "@mui/material";
import { SizeTable } from "../../Components/Admin";

const AddSize = () => {
  return (
    <div className="my-4 w-full shadow-md sm:rounded-lg bg-white p-5">
      <h2 className="text-[18px] font-[600]">Add Size</h2>
      <form className="mt-5" action="">
        <div className="flex gap-3">
          <TextField id="outlined-basic" label="Add Product Size" variant="outlined" className="w-[50%]" />
        </div>

        <Button className="!flex w-[50%] !bg-primary !text-white !font-[600] !capitalize !px-5 !gap-3 !mt-4">Add Product Size</Button>
          </form>
          <div className="mt-5">
              <SizeTable/>
          </div>
    </div>
  );
}

export default AddSize