import React, { useRef, useState } from "react";
import "react-inner-image-zoom/lib/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
const ProductZoom = () => {
    const [sliderIndex, setSliderIndex] = useState(0)
    const zoomSliderBig = useRef()
    const zoomSliderSml = useRef();
    const goto = (index) => {
        setSliderIndex(index)
        zoomSliderSml.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }
  return (
    <div className="flex gap-3 ">
      <div className="slider w-[15%]">
        <Swiper ref={zoomSliderSml} direction={"vertical"} slidesPerView={5} spaceBetween={0} modules={[Navigation]} navigation={true} className="zoomSlider h-[500px] overflow-hidden">
          <SwiperSlide>
            <div className={`item rounded-md group cursor-pointer overflow-hidden ${sliderIndex===0 ? 'opacity-100' :'opacity-30' }`} onClick={() => goto(0)}>
              <img src="https://api.spicezgold.com/download/file_1734529918447_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp" className="w-full group-hover:scale-110 " alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-md group cursor-pointer overflow-hidden " onClick={() => goto(1)}>
              <img src="https://api.spicezgold.com/download/file_1734529918450_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-1-202410111253.webp" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-md group cursor-pointer overflow-hidden " onClick={() => goto(2)}>
              <img src="https://api.spicezgold.com/download/file_1734529918447_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp" className="w-full group-hover:scale-110 " alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-md group cursor-pointer overflow-hidden " onClick={() => goto(3)}>
              <img src="https://api.spicezgold.com/download/file_1734529918450_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-1-202410111253.webp" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-md group cursor-pointer overflow-hidden " onClick={() => goto(4)}>
              <img src="https://api.spicezgold.com/download/file_1734529918447_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp" className="w-full group-hover:scale-110 " alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-md group cursor-pointer overflow-hidden " onClick={() => goto(5)}>
              <img src="https://api.spicezgold.com/download/file_1734529918450_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-1-202410111253.webp" alt="" />
            </div>
                  </SwiperSlide>
                  <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
      <div className="zoomContainer h-[500px] overflow-hidden  w-[85%]">
        <Swiper ref={zoomSliderBig} slidesPerView={1} className="mySwiper">
          <SwiperSlide>
            <InnerImageZoom zoomType={"hover"} zoomScale={1} src="https://api.spicezgold.com/download/file_1734529918447_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom zoomType={"hover"} zoomScale={1} src="https://api.spicezgold.com/download/file_1734529918450_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-1-202410111253.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom zoomType={"hover"} zoomScale={1} src="https://api.spicezgold.com/download/file_1734529918447_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom zoomType={"hover"} zoomScale={1} src="https://api.spicezgold.com/download/file_1734529918450_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-1-202410111253.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom zoomType={"hover"} zoomScale={1} src="https://api.spicezgold.com/download/file_1734529918447_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom zoomType={"hover"} zoomScale={1} src="https://api.spicezgold.com/download/file_1734529918450_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-1-202410111253.webp" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductZoom;
