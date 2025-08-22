import React from 'react'
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FcGoogle } from "react-icons/fc";
const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black">Register with a new account</h3>
          <form action="" className="w-full mt-5">
            <div className="form-group w-full mb-3">
              <TextField id="outlined-basic" label="Full Name" variant="outlined" className="w-full !mb-5 " />

              <TextField id="outlined-basic" label="Email Id " variant="outlined" className="w-full !mb-5 " />
              <FormControl sx={{ width: "100%" }} variant="outlined" className="w-full !mb-5 ">
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
                  label="Password"
                />
              </FormControl>
              <FormControl sx={{ width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
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
                  label="Password"
                />
              </FormControl>
            </div>
            <div className="my-3">
              <Button className="!bg-primary w-full  !text-white !text-[14px] !px-3 !py-3 flex gap-2  hover:!bg-[rgba(0,0,0,0.8)] !font-[600]">Register</Button>
            </div>
            <p className="text-center">
              Already have an account? <Link className="text-primary text-[14px] font-[600]">Login</Link>
            </p>
            <p className="text-center font-[500]">Or continue with social account</p>
            <Button className="!flex !gap-3 !w-full !font-[600] !text-black  !bg-gray-100">
              <FcGoogle className="text-[20px]" /> Login with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register