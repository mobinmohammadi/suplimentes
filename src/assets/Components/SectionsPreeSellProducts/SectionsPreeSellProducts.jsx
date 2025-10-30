import SectionsTitle from "../SectionsTitle/SectionsTitle";
import ItemSliderPreeSell from "../ItemSliderPreeSell/ItemSliderPreeSell";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { allProducts, preSellProducts } from "../../../Data.js";

export default function SliderPreeSellProducts() {
  const [userBasket, setUserBasket] = useState([]);

  const addToUserBasket = (Product) => {
    setUserBasket([...userBasket, {...Product}]);
    
  };

  return (
    <div className="container-custom bg-red mb-10 bg-white p-5">
      <SectionsTitle title="پر فروش" />
      <div className="mt-5 x:hidden flex gap-8">
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {preSellProducts.map((products) => (
            <SwiperSlide className="pb-14">
              <ItemSliderPreeSell
                addToUserBasket={addToUserBasket}
                items={products}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden x:flex xs:hidden mt-10 gap-8">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {preSellProducts.map((products) => (
            <SwiperSlide className="pb-14 cursor-pointer">
              <ItemSliderPreeSell
                addToUserBasket={addToUserBasket}
                items={products}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="xs:flex md:hidden hidden mt-10 gap-8">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {preSellProducts.map((products) => (
            <SwiperSlide className="pb-14 cursor-pointer">
              <ItemSliderPreeSell
                addToUserBasket={addToUserBasket}
                items={products}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:flex mmd:hidden hidden mt-10 gap-8">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {preSellProducts.map((products) => (
            <SwiperSlide className="pb-14 cursor-pointer">
              <ItemSliderPreeSell
                addToUserBasket={addToUserBasket}
                items={products}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden mmd:flex mt-10 gap-8">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {preSellProducts.map((products) => (
            <SwiperSlide className="pb-14 cursor-pointer">
              <ItemSliderPreeSell
                addToUserBasket={addToUserBasket}
                items={products}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
