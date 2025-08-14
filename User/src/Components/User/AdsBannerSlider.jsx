import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { banner1 } from "../../assets";
import BannerBox from "./BannerBox";
const AdsBannerSlider = ({ items }) => {
  return (
    <div className="py-5 w-full overflow-hidden">
      <Swiper slidesPerView={items} spaceBetween={10} modules={[Navigation]} navigation={true} className="mySwiper">
        <SwiperSlide>
          <BannerBox image={banner1} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox image={banner1} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox image={banner1} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <BannerBox image={banner1} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox image={banner1} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <BannerBox image={banner1} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox image={banner1} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <BannerBox image={banner1} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
