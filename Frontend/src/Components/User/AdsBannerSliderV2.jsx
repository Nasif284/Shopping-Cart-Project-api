import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import BannerBoxV2 from "./BannerBoxV2";
const AdsBannerSliderV2 = ({ items }) => {
  return (
    <div className="py-5 w-full overflow-hidden">
      <Swiper slidesPerView={items} spaceBetween={10} modules={[Navigation]} navigation={true} className="mySwiper">
        <SwiperSlide>
          <BannerBoxV2 info="left" image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2 info="left" image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg" />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          <BannerBoxV2 info="left" image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg" />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          <BannerBoxV2 info="left" image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg" />{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          <BannerBoxV2 info="left" image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2 info="left" image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg" />{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSliderV2;
