'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import Image from "next/image";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
export const HeroBannerSection = () => {
  return (
    <>
      <section className="w-full overflow-hidden">
        <Swiper 
          modules={[Navigation]}
          slidesPerView={1}
          autoplay={true}
          navigation
          loop
        >
          <SwiperSlide className="w-full object-cover">
            <Image src={'/banners/banner-1.jpg'} width={1920} height={600} className="w-full" alt="Banner 1"/>
            {/* <img src={'/banners/banner-1.jpg'} width={1920} height={600} className="w-full" alt="Banner 1"/> */}
          </SwiperSlide>
          <SwiperSlide>
            <Image src={'/banners/banner-2.jpg'} width={1920} height={600} className="w-full" alt="Banner 1"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={'/banners/banner-3.jpg'} width={1920} height={600} className="w-full" alt="Banner 1"/>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}