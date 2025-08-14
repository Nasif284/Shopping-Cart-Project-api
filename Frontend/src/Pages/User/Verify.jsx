import React, { useState } from 'react'
import { verify } from '../../assets'
import { OtpBox } from '../../Components/User';
import Button from '@mui/material/Button';

const Verify = () => {
    const [otp, setOtp] = useState("");
    const onChangeOtp = (value) => {
        setOtp(value)
    }
    const verifyOtp = (e) => {
        e.preventDefault()
        alert(otp)
    }
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <div className="flex items-center justify-center">
            <img src={verify} alt="" width={80} />
          </div>
          <h3 className="text-center text-[18px] text-black mt-4 mb-1">Verify OTP</h3>
          <p className="text-center !mt-0 !">
            OTP send to <span className="text-primary font-bold">example@gmail.com</span>
          </p>
          <form onSubmit={(e) => verifyOtp(e)} action="">
            <OtpBox length={6} onChange={onChangeOtp} />
            <div className="px-3">
              <Button type="submit" className="!bg-primary w-full !mt-5  !text-white !text-[14px] !px-3 !py-3 flex gap-2  hover:!bg-[rgba(0,0,0,0.8)] !font-[600]">
                Verify
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Verify