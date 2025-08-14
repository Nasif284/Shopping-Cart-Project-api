import React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
const AdminLogin = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <section className="section h-[100vh] py-10 ">
      <div className="container h-full flex items-center justify-center">
        <div className="card h-full flex items-center justify-center flex-col shadow-md w-full min-h-full m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center font-[700] mb-10 text-[30px] text-black">
            Welcome Back! <br /> Sign in with your credentials
          </h3>
          <form action="" className="w-full  mt-5  flex flex-col items-center justify-center">
            <div className="form-group w-full flex flex-col items-center mb-3">
              <TextField name="email" id="outlined-basic" label="Email Id " variant="outlined" className="w-[400px] !mb-5 " />
              <FormControl sx={{ width: "400px" }} variant="outlined">
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
                  name="password"
                />
              </FormControl>
            </div>
            <div className="my-3">
              <Button type="submit" className="!bg-primary w-[400px]  !text-white !text-[14px] !px-3 !py-3 flex gap-2  hover:!bg-[rgba(0,0,0,0.8)] !font-[600]">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
