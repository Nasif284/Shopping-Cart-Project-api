import Button from "@mui/material/Button";
import React, { useRef } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

const QtyBox = () => {
  const qtyRef = useRef(null);

  const plusQty = () => {
    if (qtyRef.current) {
        qtyRef.current.value++;
    }
  };

  const minusQty = () => {
 
      if (qtyRef.current.value > 1) {
        qtyRef.current.value--;
    } 

  };

  return (
    <div className="qtyBox w-full h-full flex items-center relative">
      <input ref={qtyRef} type="number" defaultValue={1} className="w-full h-full p-2 pl-4 text-[15px] focus:outline-none border-1 border-[rgba(0,0,0,0.2)] rounded-md" />
      <div className="flex flex-col items-center h-full justify-between border-l-1 border-[rgba(0,0,0,0.2)] absolute top-0 right-0">
        <Button className="!min-w-[30px] !h-[20px] !text-[12px] !text-black !rounded-none" onClick={plusQty}>
          <FaAngleUp />
        </Button>
        <Button className="!min-w-[30px] !h-[20px] !text-[12px] !text-black !rounded-none" onClick={minusQty}>
          <FaAngleDown />
        </Button>
      </div>
    </div>
  );
};

export default QtyBox;
