"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import VehicleCard from "../VehicleCard/VehicleCard";

const VehicleSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
        <SwiperSlide key={i}>
          <VehicleCard />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VehicleSlider;
