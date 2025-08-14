import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination,Autoplay } from "swiper/modules";
import Button from '@mui/material/Button';
const HomeSlider2 = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Navigation, Pagination,Autoplay]}
      className="homeSlide2"
    >
      <SwiperSlide>
        <div className="item rounded-md overflow-hidden w-full relative">
          <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" alt="banner" />
          <div className="info absolute top-0 -right-[100%] duration-500 opacity-0 transition-all w-[50%] h-[100%] flex  flex-col justify-center z-50 p-8">
            <h4 className="text-[20px] font-[500] w-full mb-3">Big Saving Days Sale</h4>
            <h2 className="text-[35px] font-[600]">Women Solid Round Green T-Shirt</h2>
            <h3 className="text-[20px] flex items-center gap-3 font-[500] w-full mb-3 mt-3">
              Starting At Only <span className="text-[35px] font-[600] text-primary">$59.00</span>
            </h3>
            <div>
              <Button className="!mt-4 !bg-primary !text-white !px-5  py-4">SUBSCRIBE</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item rounded-md overflow-hidden w-full relative">
          <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg" />
          <div className="info -right-[100%] opacity-0 absolute duration-500 top-0 transition-all w-[50%] h-[100%] flex  flex-col justify-center z-50 p-8">
            <h4 className="text-[20px] font-[500] w-full mb-3">Big Saving Days Sale</h4>
            <h2 className="text-[35px] font-[600]">Buy Modern Chair In Black Color</h2>
            <h3 className="text-[20px] flex items-center gap-3 font-[500] w-full mb-3 mt-3">
              Starting At Only <span className="text-[35px] font-[600] text-primary">$99.00</span>
            </h3>
            <div>
              <Button className="!mt-4 !bg-primary !text-white !px-5  py-4">SHOP NOW</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HomeSlider2