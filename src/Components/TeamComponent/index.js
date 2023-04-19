import React, { useEffect, useState } from "react";
import "./index.css";
import Employee from "../Employee";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TeamComponent() {
  return (
    <>
      <div className="third-container-team">
        <Swiper
          spaceBetween={140}
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Employee />
          </SwiperSlide>
          <SwiperSlide>
            <Employee />
          </SwiperSlide>
          <SwiperSlide>
            <Employee />
          </SwiperSlide>
          <SwiperSlide>
            <Employee />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
