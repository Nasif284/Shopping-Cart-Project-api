import React from 'react'
import { Link } from 'react-router-dom';

const BannerBoxV2 = ({image,info}) => {
  return (
    <div className="bannerBox w-full overflow-hidden rounded-md h-[200px] group relative">
      <img src={image} alt="" className="w-full group-hover:scale-105 transition-all duration-150" />
      <div className={`absolute top-[25px] ${info == "left" ? "left-[20px]" : "right-[25px]"} w-[50%] pl-4 flex flex-col gap-4`}>
        <h6 className="font-[600] text-[18px] w-full">Samsung Gear VR Camera</h6>
        <p className="font-[600] text-[15px] text-primary">$129.00</p>
        <Link className="text-[14px] link font-[500] underline">SHOP NOW</Link>
      </div>
    </div>
  );
}

export default BannerBoxV2