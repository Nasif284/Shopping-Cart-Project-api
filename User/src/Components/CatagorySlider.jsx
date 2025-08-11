import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { cat1 } from "../assets";
import CatBox from "./CatBox";
const CatagorySlider = () => {

  return (
    <div className="catSlider py-8 pt-4 ">
      <div className="container overflow-hidden">
        <Swiper slidesPerView={7} spaceBetween={10} modules={[Navigation]} navigation={true} className="mySwiper">
          <SwiperSlide>
            <CatBox image={cat1} title="Fashion" />
          </SwiperSlide>
          <SwiperSlide>
            <CatBox image={cat1} title="Fashion" />
          </SwiperSlide>
          <SwiperSlide>
            <CatBox image={cat1} title="Fashion" />
          </SwiperSlide>
          <SwiperSlide>
            <CatBox image={cat1} title="Fashion" />
          </SwiperSlide>
          <SwiperSlide>
            <CatBox image={cat1} title="Fashion" />
          </SwiperSlide>
          <SwiperSlide>
            <CatBox image={cat1} title="Fashion" />
          </SwiperSlide>
          <SwiperSlide>
            <CatBox image={cat1} title="Fashion" />
          </SwiperSlide>
          <SwiperSlide>
            <CatBox image={cat1} title="Fashion" />
          </SwiperSlide>
          <SwiperSlide>
            <CatBox image={cat1} title="Fashion" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CatagorySlider;
