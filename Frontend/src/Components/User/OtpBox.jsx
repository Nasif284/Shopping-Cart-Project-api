import React, { useState } from "react";

const OtpBox = ({ length, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const handleChange = (element, index) => {
    const value = element;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(""));

    if (value && index < length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };
  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };
  return (
    <div className="flex gap-[5px] justify-center">
      {otp.map((data, i) => (
        <input className="w-[45px] h-[45px] text-center text-[17px] rounded-md border-1 border-[rgba(0,0,0,0.3)]" key={i} id={`otp-input-${i}`} type="text" maxLength={1} value={otp[i]} onChange={(e) => handleChange(e.target.value, i)} onKeyDown={(e) => handleKeyDown(e, i)} />
      ))}
    </div>
  );
};

export default OtpBox;
