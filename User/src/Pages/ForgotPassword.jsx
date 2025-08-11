import React, { useContext, useState } from 'react'
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from '@mui/material/Button';
import { ProductContext } from '../App';
const ForgotPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
      const [showConfPassword, setShowConfPassword] = useState(false);
  const context = useContext(ProductContext);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfPassword = () => setShowConfPassword((show) => !show);
  const [fomFields, setFormFields] = useState({
    email: "",
    password:""
  });
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black">Forgot Password</h3>
          <form action="" className="w-full mt-5">
            <div className="form-group w-full mb-3">
              <FormControl className='!mb-4' sx={{ width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label={showPassword ? "hide the password" : "display the password"} onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="New Password"
                  name="newPassword"
                />
              </FormControl>
              <FormControl sx={{ width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showConfPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label={showConfPassword ? "hide the password" : "display the password"} onClick={handleClickShowConfPassword} edge="end">
                        {showConfPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                  name="confirmPassword"
                />
              </FormControl>
            </div>
            <div className="my-3">
              <Button type="submit" className="!bg-primary w-full  !text-white !text-[14px] !px-3 !py-3 flex gap-2  hover:!bg-[rgba(0,0,0,0.8)] !font-[600]">
                Change Password
              </Button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;