import React from 'react'
import { AdsBannerSlider, AdsBannerSliderV2, BannerBoxV2, BlogItem, CatagorySlider, HomeSlider, HomeSlider2, ProductSlider } from '../../Components/User'
import { FaShippingFast } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Home = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
      <HomeSlider />
      <section className="py-5 ">
        <div className="container flex gap-5">
          <div className="part1 w-[70%]">
            <HomeSlider2 />
          </div>
          <div className="part2 w-[30%] gap-3 flex items-center flex-col justify-between">
            <BannerBoxV2 info="left" image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg" />
            <BannerBoxV2 info="right" image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg" />
          </div>
        </div>
      </section>
      <CatagorySlider />
      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="left-sec">
              <h2 className="text-[22px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[400]">Do not miss the current offers until the end of March.</p>
            </div>
            <div className="rightSec w-[60%]">
              <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
                <Tab label="Item Four" />
                <Tab label="Item Five" />
                <Tab label="Item Six" />
                <Tab label="Item Seven" />
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
                <Tab label="Item Four" />
                <Tab label="Item Five" />
                <Tab label="Item Six" />
                <Tab label="Item Seven" />
              </Tabs>
            </div>
          </div>
          <ProductSlider items={6} />
        </div>
      </section>
      <section className=" bg-white pt-2 pb-4">
        <div className="container">
          <div className="freeShipping w-full px-4 py-5 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-[50px]" />
              <span className="text-[22px] font-[500]">FREE SHIPPING</span>
            </div>
            <div className="col2">
              <p className="mb-0 font-[500]">Free Delivery Now On Your First Order and over $200</p>
            </div>
            <p className="font-bold text-[30px]">- Only $200*</p>
          </div>
          <AdsBannerSliderV2 items={4} />
        </div>
      </section>
      <section className=" bg-white pb-5">
        <div className="container">
          <h2 className="text-[22px] font-[600]">Latest Products</h2>
          <ProductSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className=" bg-white pb-5">
        <div className="container">
          <h2 className="text-[22px] font-[600]">Featured Products</h2>
          <ProductSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className="pb-8 bg-white blogSection">
        <div className="container overflow-hidden">
          <h2 className="text-[22px] font-[600] mb-5">From the Blog</h2>
          <Swiper slidesPerView={4} spaceBetween={20} modules={[Navigation]} navigation={true} className="mySwiper">
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

    </>
  );
}

export default Home