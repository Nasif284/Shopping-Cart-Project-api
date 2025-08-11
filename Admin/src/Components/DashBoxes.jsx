import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LuUsers } from "react-icons/lu";
import { IoStatsChart } from "react-icons/io5";
import { AiFillGift } from "react-icons/ai";
import { RiProductHuntLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { BsBank } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const DashBoxes = () => {
  return (
    <Swiper slidesPerView={5} spaceBetween={10} navigation={true} modules={[Navigation]} className="mySwiper w-full">
      <SwiperSlide className="w-full">
        <div className="p-4 rounded-md text-white bg-green-600 flex items-center justify-between">
          <div className="info flex items-center gap-3">
            <LuUsers className="!text-[22px]" />
            <div>
              <p className="text-[14px]">Total Users</p>
              <h2 className="text-[18px] font-[600]">2354</h2>
            </div>
          </div>
          <div className="icon">
            <IoStatsChart className="!text-[22px]" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <div className="p-4 rounded-md text-white bg-blue-600 flex items-center justify-between">
          <div className="info flex items-center gap-3">
            <AiFillGift className="!text-[22px]" />
            <div>
              <p className="text-[14px]">Total Orders</p>
              <h2 className="text-[18px] font-[600]">2354</h2>
            </div>
          </div>
          <div className="icon">
            <IoStatsChart className="!text-[22px]" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <div className="p-4 rounded-md text-white bg-pink-600 flex items-center justify-between">
          <div className="info flex items-center gap-3">
            <RiProductHuntLine className="!text-[22px]" />
            <div>
              <p className="text-[14px]">Total Products</p>
              <h2 className="text-[18px] font-[600]">2354</h2>
            </div>
          </div>
          <div className="icon">
            <IoStatsChart className="!text-[22px]" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <div className="p-4 rounded-md text-white bg-amber-600 flex items-center justify-between">
          <div className="info flex items-center gap-3">
            <GoGraph className="!text-[22px]" />
            <div>
              <p className="text-[14px]">Total Sales</p>
              <h2 className="text-[18px] font-[600]">2354</h2>
            </div>
          </div>
          <div className="icon">
            <IoStatsChart className="!text-[22px]" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <div className="p-4 rounded-md text-white bg-orange-600 flex items-center justify-between">
          <div className="info flex items-center gap-3">
            <BsBank className="!text-[22px]" />
            <div>
              <p className="text-[14px]">Total Revenue</p>
              <h2 className="text-[18px] font-[600]">2354</h2>
            </div>
          </div>
          <div className="icon">
            <IoStatsChart className="!text-[22px]" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default DashBoxes;
