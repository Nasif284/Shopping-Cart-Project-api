import React, { useContext, useState } from 'react'
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
import { ProductContext } from '../App';
const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const context = useContext(ProductContext);
      const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [fomFields, setFormFields] = useState({
    email: "",
    password:""
  });
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black">Login to your account</h3>
          <form action="" className="w-full mt-5">
            <div className="form-group w-full mb-3">
              <TextField name='email' id="outlined-basic" label="Email Id " variant="outlined" className="w-full !mb-5 " />
              <FormControl sx={{ width: "100%" }} variant="outlined">
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
                  name='password'
                />
              </FormControl>
            </div>
            <Link onClick={()=> context.openToast('success','OTP Send Successfully')} to={'/verify'} className="text-[14px] cursor-pointer link font-[600]">Forgot Password?</Link>
            <div className="my-3">
              <Button type='submit' className="!bg-primary w-full  !text-white !text-[14px] !px-3 !py-3 flex gap-2  hover:!bg-[rgba(0,0,0,0.8)] !font-[600]">Login</Button>
            </div>
            <p className="text-center">
              Not Registered? <Link className="text-primary text-[14px] font-[600]">Sign Up</Link>
            </p>
            <p className="text-center font-[500]">Or continue with social account</p>
            <Button className='!flex !gap-3 !w-full !font-[600] !text-black  !bg-gray-100'>
              <FcGoogle className='text-[20px]' /> Login with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login