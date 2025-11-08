import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function RightSection() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>


      <div className=" shadow-slider ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper & > *:w-[60%]  & > *:max-h-[250px] & > *:rounded-sm"
        >
          <SwiperSlide>
            <img className=" rounded-sm " src="./Images/slider1.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" rounded-sm" src="./Images/slider2.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" rounded-sm" src="./Images/slider3.webp" alt="" />
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
}
